/**
 * IM 回调路由 — Group.CallbackBeforeSendMsg
 *
 * 接收腾讯云 IM 在消息投递前的回调，根据 toggle 状态决定拦截或放行。
 *
 * 回调格式参考：
 * https://cloud.tencent.com/document/product/269/1619
 */

const express = require('express');
const db = require('../db');
const crypto = require('crypto');

const router = express.Router();

/**
 * 生成唯一 content_id
 * 使用 GroupId + From_Account + timestamp + 随机数
 */
function generateContentId(groupId, fromAccount, timestamp) {
  const raw = `${groupId}_${fromAccount}_${timestamp}_${Math.random().toString(36).slice(2, 8)}`;
  return crypto.createHash('md5').update(raw).digest('hex');
}

/**
 * 检查 MsgBody 中是否包含放行重发标记
 * 用于避免 SDK 放行后重发的消息再次被拦截
 */
function isApprovedResend(msgBody) {
  if (!Array.isArray(msgBody)) return false;

  for (const item of msgBody) {
    if (item.CloudCustomData) {
      try {
        const custom = typeof item.CloudCustomData === 'string'
          ? JSON.parse(item.CloudCustomData)
          : item.CloudCustomData;
        if (custom.moderation_approved_resend) return true;
      } catch (e) {
        // 解析失败说明不是我们打的标记，忽略
      }
    }
  }
  return false;
}

/**
 * 从 IM 回调的 MsgBody 中提取文本内容
 */
function extractTextContent(msgBody) {
  if (!Array.isArray(msgBody)) return '';

  for (const item of msgBody) {
    if (item.MsgType === 'TIMTextElem' && item.MsgContent && item.MsgContent.Text) {
      return item.MsgContent.Text;
    }
  }
  return '';
}

/**
 * POST /im-callback
 *
 * 腾讯云 IM Group.CallbackBeforeSendMsg 回调处理
 *
 * 请求体示例（腾讯云 IM 回调格式）：
 * {
 *   "CallbackCommand": "Group.CallbackBeforeSendMsg",
 *   "GroupId": "live_room_123",
 *   "Type": "Public",
 *   "From_Account": "user_456",
 *   "Operator_Account": "",
 *   "Random": 123456,
 *   "MsgBody": [
 *     {
 *       "MsgType": "TIMTextElem",
 *       "MsgContent": { "Text": "你好" }
 *     }
 *   ]
 * }
 *
 * 响应（拦截消息）：
 * {
 *   "ActionStatus": "OK",
 *   "ErrorCode": 1,
 *   "ErrorInfo": "Message intercepted for moderation"
 * }
 *
 * 响应（放行消息）：
 * {
 *   "ActionStatus": "OK",
 *   "ErrorCode": 0,
 *   "ErrorInfo": ""
 * }
 */
router.post('/', (req, res) => {
  const body = req.body;
  const command = body.CallbackCommand || '';
  const groupId = body.GroupId || '';
  const fromAccount = body.From_Account || '';
  const msgBody = body.MsgBody || [];
  const timestamp = Date.now();

  console.log(`[CALLBACK] 收到回调: command=${command}, groupId=${groupId}, from=${fromAccount}`);

  // 非发消息回调，放行
  if (command !== 'Group.CallbackBeforeSendMsg') {
    console.log('[CALLBACK] 非发消息回调，放行');
    return res.json({ ActionStatus: 'OK', ErrorCode: 0, ErrorInfo: '' });
  }

  const toggleEnabled = db.getToggleEnabled();

  // 全员审核关闭，放行
  if (!toggleEnabled) {
    console.log(`[CALLBACK] 全员审核关闭，放行消息: ${groupId}/${fromAccount}`);
    return res.json({ ActionStatus: 'OK', ErrorCode: 0, ErrorInfo: '' });
  }

  // 全员审核开启，拦截消息并存入数据库
  const content = extractTextContent(msgBody);

  // 检查是否为 SDK 放行后重发的消息，是则直接放行不拦截
  if (isApprovedResend(msgBody)) {
    console.log(`[CALLBACK] 放行重发消息(已审核通过): contentId=-, groupId=${groupId}, from=${fromAccount}, content="${content}"`);
    return res.json({ ActionStatus: 'OK', ErrorCode: 0, ErrorInfo: '' });
  }

  const contentId = generateContentId(groupId, fromAccount, timestamp);

  db.insertMessage({
    content_id: contentId,
    group_id: groupId,
    from_account: fromAccount,
    content,
    msg_type: msgBody.length > 0 ? msgBody[0].MsgType : 'TIMTextElem',
    msg_body: JSON.stringify(msgBody),
  });

  console.log(`[CALLBACK] 拦截消息: contentId=${contentId}, groupId=${groupId}, from=${fromAccount}, content="${content}"`);

  // 返回非 0 ErrorCode 表示拦截
  res.json({
    ActionStatus: 'OK',
    ErrorCode: 1,
    ErrorInfo: 'Message intercepted for moderation',
  });
});

module.exports = router;
