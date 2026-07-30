import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { i18next } from '@tencentcloud/uikit-base-component-react';
import { TranslateIcon, HelpCircleIcon } from 'tdesign-icons-react';
import { Input, Button, Tooltip } from 'tdesign-react';
import { Message } from 'tuikit-live-manager-sdk-react';
import {
  loginWithSecret,
  saveCredentials,
  getDefaultRoutePath,
  getDefaultLanguage,
  toggleLanguage,
  setDocumentLanguage,
  resolveDemoTargetPath,
  getHelpLinks,
  I18N,
} from 'tuikit-live-manager-sdk-react';
import type { SupportedLanguage } from 'tuikit-live-manager-sdk-react';

interface CredentialLoginPageProps {
  showServerConfigLink?: boolean;
}

export default function CredentialLoginPage({ showServerConfigLink = true }: CredentialLoginPageProps) {
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
  // Vite define 对 __DEMO_MODE__ 在 dev 下替换不稳定（与 router/index.tsx 一致），
  // 使用 typeof 守卫避免 ReferenceError；非 demo 构建时回落为 false。
  const demoModeEnabled = typeof __DEMO_MODE__ !== 'undefined' ? __DEMO_MODE__ : false;

  const handleToggleLanguage = () => {
    const nextLang = toggleLanguage(currentLanguage);
    setDocumentLanguage(nextLang);
    if (i18next && typeof i18next.changeLanguage === 'function') {
      i18next.changeLanguage(nextLang);
    }
    setCurrentLanguage(nextLang);
  };

  const handleLogin = async () => {
    const appId = Number(sdkAppId.trim());
    if (!appId || appId <= 0) {
      Message.warning(t(I18N.SDK_APP_ID_REQUIRED));
      return;
    }
    if (!secretKey.trim()) {
      Message.warning(t(I18N.SECRET_KEY_REQUIRED));
      return;
    }

    setLoading(true);
    try {
      const res = await loginWithSecret(appId, secretKey.trim(), userId.trim() || 'administrator');

      if (res.code === 0 && res.data) {
        saveCredentials(res.data);
        const from = (location.state as any)?.from || defaultRoutePath;
        navigate(from, { replace: true });
      } else {
        Message.error(res.message || t(I18N.CREDENTIAL_LOGIN_FAILED));
      }
    } catch (e: any) {
      Message.error(e.message || t(I18N.CREDENTIAL_LOGIN_FAILED));
    } finally {
      setLoading(false);
    }
  };

  const handleServerConfig = () => {
    navigate('/server-config', { replace: true });
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
          <h1 className="login-title">{t(I18N.CREDENTIAL_LOGIN_TITLE)}</h1>
          <p className="login-subtitle">{t(I18N.CREDENTIAL_LOGIN_SUBTITLE)}</p>
        </div>

        <div className="login-form-wrapper login-form-wrapper--tdesign">
          <div className="login-field login-field--horizontal">
            <label className="login-field__label">
              {t(I18N.SDK_APP_ID_LABEL)}
              <Tooltip placement="top" content={
                <div className="login-help-tooltip">
                  <a href={helpLinks.sdkAppId} target="_blank" rel="noopener noreferrer">{t(I18N.SDK_APP_ID_HELP_LINK)}</a>
                </div>
              }>
                <HelpCircleIcon size="14px" className="login-help-icon" />
              </Tooltip>
            </label>
            <Input
              className="login-tdesign-input"
              value={sdkAppId}
              onChange={(value) => setSdkAppId(String(value).replace(/\D/g, ''))}
              onEnter={handleLogin}
              placeholder={t(I18N.SDK_APP_ID_PLACEHOLDER)}
              disabled={loading}
              clearable
            />
          </div>

          <div className="login-field login-field--horizontal">
            <label className="login-field__label">
              {t(I18N.SECRET_KEY_LABEL)}
              <Tooltip placement="top" content={
                <div className="login-help-tooltip">
                  <span>{t(I18N.SECRET_KEY_MEMORY_ONLY)} </span>
                  <a href={helpLinks.secretKey} target="_blank" rel="noopener noreferrer">{t(I18N.SECRET_KEY_HELP_LINK)}</a>
                </div>
              }>
                <HelpCircleIcon size="14px" className="login-help-icon" />
              </Tooltip>
            </label>
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
          </div>

          <div className="login-field login-field--horizontal">
            <label className="login-field__label">
              {t(I18N.USER_ID_LABEL)}
              <Tooltip placement="top" content={
                <div className="login-help-tooltip">
                  <span>{t(I18N.USER_ID_HELP_PREFIX)} </span>
                  <a href={helpLinks.userId} target="_blank" rel="noopener noreferrer">{t(I18N.USER_ID_HELP_LINK)}</a>
                </div>
              }>
                <HelpCircleIcon size="14px" className="login-help-icon" />
              </Tooltip>
            </label>
            <Input
              className="login-tdesign-input"
              value={userId}
              onChange={(value) => setUserId(String(value))}
              onEnter={handleLogin}
              placeholder={t(I18N.USER_ID_PLACEHOLDER)}
              disabled={loading}
              clearable
            />
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

          {showServerConfigLink && !demoModeEnabled && (
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

          {demoModeEnabled && (
            <div style={{ marginTop: '16px', textAlign: 'center' }}>
              <div style={{ height: '1px', background: '#e5e7eb', margin: '16px 0' }} />
              <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 12px' }}>{t(I18N.DEMO_MODE_DESC)}</p>
              <button
                type="button"
                style={{
                  background: 'none',
                  border: '1px solid #1C66E5',
                  color: '#1C66E5',
                  padding: '6px 20px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
                onClick={() => { window.location.href = resolveDemoTargetPath('react'); }}
              >
                {t(I18N.TRY_DEMO_MODE)}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
