import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { i18next } from '@tencentcloud/uikit-base-component-react';
import { TranslateIcon, HelpCircleIcon, ErrorCircleIcon } from 'tdesign-icons-react';
import { Input, Button, Tooltip, Dialog } from 'tdesign-react';
import {
  login,
  saveCredentials,
  getDefaultRoutePath,
  getDefaultLanguage,
  toggleLanguage,
  setDocumentLanguage,
  getHelpLinks,
  validateCredentialLogin,
  verifyCredentials,
  clearCredentials,
  reportBusinessOp,
  reportConversionClick,
  I18N,
  resolveLoginBrandName,
} from 'tuikit-live-manager-sdk-react';
import type { SupportedLanguage } from 'tuikit-live-manager-sdk-react';

interface CredentialLoginPageProps {
  showServerConfigLink?: boolean;
}

interface FieldErrors {
  sdkAppId: string;
  secretKey: string;
  userId: string;
}

export default function CredentialLoginPage({ showServerConfigLink = false }: CredentialLoginPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const defaultRoutePath = getDefaultRoutePath();

  // 与 MainLayout 完全一致：用 i18next.t.bind() 而非 useUIKit().t，
  // 因为 useUIKit().t 是 getFixedT——绑死了初始语言，切换不生效
  const t = i18next && typeof i18next.t === 'function'
    ? i18next.t.bind(i18next) as (key: string, options?: Record<string, string>) => string
    : ((key: string, _options?: Record<string, string>) => key);

  const [sdkAppId, setSdkAppId] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [userId, setUserId] = useState('administrator');
  const [loading, setLoading] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(getDefaultLanguage());
  const helpLinks = getHelpLinks('react', currentLanguage);

  // 表单逐字段错误提示（输入框下方红字）
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    sdkAppId: '',
    secretKey: '',
    userId: '',
  });

  // 凭证验证失败 / 登录失败弹框
  const [showVerifyDialog, setShowVerifyDialog] = useState(false);
  const [verifyError, setVerifyError] = useState('');


  /**
   * 转化触点上报：登录页帮助/文档链接点击。
   * 点"如何获取凭证"= 正在认真尝试接入（意向+摩擦信号），只记录动作。
   * 上报异常静默吞掉，不影响链接跳转。
   */
  const resolveLoginScene = () => {
    return 'customer';
  };
  const trackConversion = (track: string) => {
    try {
      reportConversionClick(track, resolveLoginScene());
    } catch {
      // RUM 未初始化等异常不影响 UI
    }
  };

  // 登录页顶部品牌位：自定义 BrandConfig.appName 优先，否则兜底到产品名文案
  // （中文："腾讯直播管理系统"，英文："Tencent Live Manager"）。
  // 走公共函数统一解析策略，与 Vue 端共用。
  const loginProductName = resolveLoginBrandName(currentLanguage, t);

  const clearFieldErrors = () => {
    setFieldErrors({ sdkAppId: '', secretKey: '', userId: '' });
  };

  const handleToggleLanguage = () => {
    const nextLang = toggleLanguage(currentLanguage);
    setDocumentLanguage(nextLang);
    if (i18next && typeof i18next.changeLanguage === 'function') {
      i18next.changeLanguage(nextLang);
    }
    setCurrentLanguage(nextLang);
  };

  const handleLogin = async () => {
    // 登录入口点击/提交埋点：记录登录入口选择信号
    trackConversion('login_click');
    clearFieldErrors();

    // ===== 1. 输入级校验：逐字段红字提示 =====
    const validation = validateCredentialLogin(sdkAppId, secretKey, userId);
    if (!validation.valid) {
      if (validation.field) {
        setFieldErrors((prev) => ({ ...prev, [validation.field!]: t(validation.message!) }));
      }
      reportBusinessOp('credential_login', 'validate', false);
      return;
    }

    const appId = Number(sdkAppId.trim());
    setLoading(true);
    try {
      const res = await login({ sdkAppId: appId, secretKey: secretKey.trim(), userId: userId.trim() || 'administrator' });

      if (res.code === 0 && res.data) {
        saveCredentials(res.data);

        // ===== 2. 登录后凭证有效性验证 =====
        const verifyResult = await verifyCredentials();
        if (!verifyResult.valid) {
          clearCredentials();
          setVerifyError(verifyResult.error || t(I18N.CREDENTIAL_VERIFICATION_FAILED));
          setShowVerifyDialog(true);
          reportBusinessOp('credential_verify', 'verify', false);
          return;
        }

        reportBusinessOp('credential_login', 'login', true);
        reportBusinessOp('credential_verify', 'verify', true);
        const from = (location.state as any)?.from || defaultRoutePath;
        navigate(from, { replace: true });
      } else {
        setVerifyError(res.message || t(I18N.CREDENTIAL_LOGIN_FAILED));
        setShowVerifyDialog(true);
        reportBusinessOp('credential_login', 'login', false);
      }
    } catch (e: any) {
      setVerifyError(e.message || t(I18N.CREDENTIAL_LOGIN_FAILED));
      setShowVerifyDialog(true);
      reportBusinessOp('credential_login', 'login', false);
    } finally {
      setLoading(false);
    }
  };

  const handleServerConfig = () => {
    navigate('/server-config', { replace: true });
  };

  const handleSdkAppIdChange = (value: string) => {
    setSdkAppId(String(value).replace(/\D/g, ''));
    if (fieldErrors.sdkAppId) setFieldErrors((prev) => ({ ...prev, sdkAppId: '' }));
  };

  return (
    <div className="login-container">
      <div
        className="lang-switch-btn"
        onClick={handleToggleLanguage}
        title={currentLanguage === 'zh-CN' ? 'Switch to English' : '切换到中文'}
      >
        <TranslateIcon size="16px" />
        <span>{currentLanguage === 'zh-CN' ? 'EN' : '中'}</span>
      </div>

      <div className="login-content">
        <div className="login-header">
          <div className="login-product-name">{loginProductName}</div>
          {
            <>
              <h1 className="login-title">{t(I18N.CREDENTIAL_LOGIN_TITLE)}</h1>
              <p className="login-subtitle">{t(I18N.CREDENTIAL_LOGIN_SUBTITLE)}</p>
            </>
          }
        </div>



        {
          <div className="login-notice login-notice--config">
            <ErrorCircleIcon size="16px" className="login-notice__icon" />
            <div className="login-notice__content">
              <span>{t(I18N.LOGIN_SERVER_NOT_CONFIGURED_NOTICE)} </span>
              <a href="https://cloud.tencent.com/document/product/647/123831#2f8aa93c-a53b-4939-a460-64270c6484b9" target="_blank" rel="noopener noreferrer" onClick={() => trackConversion('server_setup_guide')}>{t(I18N.LOGIN_SERVER_SETUP_GUIDE)}</a>
            </div>
          </div>
        }

        <div className="login-form-wrapper login-form-wrapper--tdesign">
          <div className="login-field login-field--horizontal">
            <label className="login-field__label">
              {t(I18N.SDK_APP_ID_LABEL)}
              <Tooltip placement="top" content={
                <div className="login-help-tooltip">
                  <p>{t(I18N.SDK_APP_ID_DESC)}</p>
                  <a href={helpLinks.sdkAppId} target="_blank" rel="noopener noreferrer" onClick={() => trackConversion('help_sdk_app_id')}>{t(I18N.SDK_APP_ID_HELP_LINK)}</a>
                </div>
              }>
                <HelpCircleIcon size="14px" className="login-help-icon" />
              </Tooltip>
            </label>
            <div className="login-field__input-wrapper">
              <Input
                className="login-tdesign-input"
                value={sdkAppId}
                onChange={handleSdkAppIdChange}
                onEnter={handleLogin}
                placeholder={t(I18N.SDK_APP_ID_PLACEHOLDER)}
                disabled={loading}
                clearable
              />
              {fieldErrors.sdkAppId && <p className="login-field__error">{fieldErrors.sdkAppId}</p>}
            </div>
          </div>

          <div className="login-field login-field--horizontal">
            <label className="login-field__label">
              {t(I18N.SECRET_KEY_LABEL)}
              <Tooltip placement="top" content={
                <div className="login-help-tooltip">
                  <p>{t(I18N.SECRET_KEY_DESC)}</p>
                  <span>{t(I18N.SECRET_KEY_MEMORY_ONLY)} </span>
                  <a href={helpLinks.secretKey} target="_blank" rel="noopener noreferrer" onClick={() => trackConversion('help_secret_key')}>{t(I18N.SECRET_KEY_HELP_LINK)}</a>
                </div>
              }>
                <HelpCircleIcon size="14px" className="login-help-icon" />
              </Tooltip>
            </label>
            <div className="login-field__input-wrapper">
              <Input
                className="login-tdesign-input"
                type="password"
                value={secretKey}
                onChange={(value) => setSecretKey(String(value))}
                onEnter={handleLogin}
                placeholder={t(I18N.SECRET_KEY_PLACEHOLDER)}
                disabled={loading}
                clearable
              />
              {fieldErrors.secretKey && <p className="login-field__error">{fieldErrors.secretKey}</p>}
            </div>
          </div>

          <div className="login-field login-field--horizontal">
            <label className="login-field__label">
              {t(I18N.USER_ID_LABEL)}
              <Tooltip placement="top" content={
                <div className="login-help-tooltip">
                  <p>{t(I18N.USER_ID_DESC)}</p>
                  <span>{t(I18N.USER_ID_HELP_PREFIX)} </span>
                  <a href={helpLinks.userId} target="_blank" rel="noopener noreferrer" onClick={() => trackConversion('help_user_id')}>{t(I18N.USER_ID_HELP_LINK)}</a>
                </div>
              }>
                <HelpCircleIcon size="14px" className="login-help-icon" />
              </Tooltip>
            </label>
            <div className="login-field__input-wrapper">
              <Input
                className="login-tdesign-input"
                value={userId}
                onChange={(value) => setUserId(String(value))}
                onEnter={handleLogin}
                placeholder={t(I18N.USER_ID_PLACEHOLDER)}
                disabled={loading}
                clearable
              />
              {fieldErrors.userId && <p className="login-field__error">{fieldErrors.userId}</p>}
            </div>
          </div>

          <Button
            block
            theme="primary"
            onClick={handleLogin}
            loading={loading}
            disabled={loading}
          >
            {loading ? t(I18N.LOGGING_IN) : t(I18N.LOGIN_BTN)}
          </Button>

          {showServerConfigLink && (
            <div className="server-config-link">
              <button
                type="button"
                className="server-config-btn"
                onClick={handleServerConfig}
                disabled={loading}
              >
                {t(I18N.TOGGLE_LOGIN_MODE)}
              </button>
            </div>
          )}
        </div>

      </div>

      {/* 凭证验证失败 / 登录失败弹框 */}
      <Dialog
        visible={showVerifyDialog}
        header={t(I18N.CREDENTIAL_VERIFY_DIALOG_TITLE)}
        confirmBtn={t(I18N.CREDENTIAL_VERIFY_DIALOG_DOC_LINK)}
        cancelBtn={t(I18N.CLOSE)}
        onConfirm={() => {
          window.open(helpLinks.sdkAppId, '_blank', 'noopener,noreferrer');
          setShowVerifyDialog(false);
        }}
        onClose={() => setShowVerifyDialog(false)}
        width="480px"
        attach="body"
      >
        <div className="login-verify-dialog">
          <p className="login-verify-dialog__error">{verifyError}</p>
          <div className="login-verify-dialog__hints">
            <p className="login-verify-dialog__hint-text">{t(I18N.CREDENTIAL_VERIFY_DIALOG_SECRETKEY_HINT)}</p>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
