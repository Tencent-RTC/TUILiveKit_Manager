// 公共样式由 tuikit-live-manager-sdk-react 入口自动加载，无需单独 import
import { i18next } from '@tencentcloud/uikit-base-component-react';

interface ConfigRequiredPageProps {
  missingItems: string[];
}

/**
 * 配置缺失提示页面
 * 当检测到缺少 SDK_APP_ID、SECRET_KEY 或 USER_ID 时显示此页面
 */
export default function ConfigRequiredPage({ missingItems }: ConfigRequiredPageProps) {
  const t = i18next && typeof i18next.t === 'function'
    ? i18next.t.bind(i18next)
    : ((key: string) => key);

  // 判断当前是否为中文语言环境
  const isChinese = i18next && i18next.language === 'zh-CN';

  const getMissingLabel = (item: string) => {
    const labels: Record<string, string> = {
      'SDK_APP_ID': 'SdkAppId',
      'SECRET_KEY': 'SecretKey',
      'USER_ID': 'UserId',
    };
    return labels[item] || item;
  };

  return (
    <div className="login-container">
      <div className="login-content">
        {/* 标题 */}
        <div className="login-header">
          <h1 className="login-title">{t('Live Room Management Platform')}</h1>
        </div>

        {/* 警告提示 */}
        <div className="config-warning">
          <div className="config-warning__title">{t('Config Missing')}</div>
          <div className="config-warning__content">
            {t('Config Missing Content')}<br />
            {missingItems.map(item => (
              <span key={item} className="config-warning__item">{getMissingLabel(item)}</span>
            )).reduce((acc: React.ReactNode[], curr, idx) => {
              if (idx > 0) acc.push(t('Enumeration Separator'));
              acc.push(curr);
              return acc;
            }, [])}
            <br /><br />
            {t('Config Missing Instructions')}
            <ul className="config-warning__list">
              <li><code>SDK_APP_ID</code> - {t('Tencent Cloud SDK AppID')}</li>
              <li><code>SECRET_KEY</code> - {t('Tencent Cloud SecretKey')}</li>
            </ul>
            {/* 中文文档链接 */}
            {isChinese && (
              <div className="config-warning__doc">
                <a href="https://cloud.tencent.com/document/product/647/123831" target="_blank" rel="noopener noreferrer">
                  配置指南
                </a>
              </div>
            )}
            {/* TODO: 英文文档链接，待添加 */}
          </div>
        </div>
      </div>
    </div>
  );
}