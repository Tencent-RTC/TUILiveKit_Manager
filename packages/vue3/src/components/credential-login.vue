<template>
  <div class="login-container">
    <div class="lang-switch-btn" @click="handleLanguageToggle" :title="currentLanguage === 'zh-CN' ? 'Switch to English' : '切换到中文'">
      <TranslateIcon size="16px" />
      <span>{{ currentLanguage === 'zh-CN' ? 'EN' : '中' }}</span>
    </div>

    <div class="login-content">
      <div class="login-header">
        <h1 class="login-title">{{ $t(I18N.CREDENTIAL_LOGIN_TITLE) }}</h1>
        <p class="login-subtitle">{{ $t(I18N.CREDENTIAL_LOGIN_SUBTITLE) }}</p>
      </div>

      <div v-if="demoModeEnabled" class="login-notice login-notice--demo">
        <InfoCircleIcon size="16px" class="login-notice__icon" />
        <div class="login-notice__content">
          <span>{{ $t(I18N.LOGIN_DEMO_NOTICE) }} </span>
          <a :href="DOC_URLS.integration" target="_blank" rel="noopener noreferrer">{{ $t(I18N.LOGIN_DEMO_INTEGRATION_DOC) }}</a>
        </div>
      </div>
      <div v-else class="login-notice login-notice--config">
        <ErrorCircleIcon size="16px" class="login-notice__icon" />
        <div class="login-notice__content">
          <span>{{ $t(I18N.LOGIN_SERVER_NOT_CONFIGURED_NOTICE) }} </span>
          <a :href="DOC_URLS.setup" target="_blank" rel="noopener noreferrer">{{ $t(I18N.LOGIN_SERVER_SETUP_GUIDE) }}</a>
        </div>
      </div>

      <div class="login-form-wrapper login-form-wrapper--tdesign">
        <div class="login-field login-field--horizontal">
          <label class="login-field__label">
            {{ $t(I18N.SDK_APP_ID_LABEL) }}
            <t-tooltip placement="top">
              <template #content>
                <div class="login-help-tooltip">
                  <p>{{ $t(I18N.SDK_APP_ID_DESC) }}</p>
                  <a :href="helpLinks.sdkAppId" target="_blank" rel="noopener noreferrer">{{ $t(I18N.SDK_APP_ID_HELP_LINK) }}</a>
                </div>
              </template>
              <HelpCircleIcon size="14px" class="login-help-icon" />
            </t-tooltip>
          </label>
          <div class="login-field__input-wrapper">
            <t-input class="login-tdesign-input" :value="sdkAppId" @change="onSdkAppIdChange" @enter="handleLogin" :placeholder="$t(I18N.SDK_APP_ID_PLACEHOLDER)" :disabled="loading" clearable />
            <p v-if="fieldErrors.sdkAppId" class="login-field__error">{{ fieldErrors.sdkAppId }}</p>
          </div>
        </div>

        <div class="login-field login-field--horizontal">
          <label class="login-field__label">
            {{ $t(I18N.SECRET_KEY_LABEL) }}
            <t-tooltip placement="top">
              <template #content>
                <div class="login-help-tooltip">
                  <p>{{ $t(I18N.SECRET_KEY_DESC) }}</p>
                  <span>{{ $t(I18N.SECRET_KEY_MEMORY_ONLY) }} </span>
                  <a :href="helpLinks.secretKey" target="_blank" rel="noopener noreferrer">{{ $t(I18N.SECRET_KEY_HELP_LINK) }}</a>
                </div>
              </template>
              <HelpCircleIcon size="14px" class="login-help-icon" />
            </t-tooltip>
          </label>
          <div class="login-field__input-wrapper">
            <t-input class="login-tdesign-input" type="password" v-model="secretKey" @enter="handleLogin" :placeholder="$t(I18N.SECRET_KEY_PLACEHOLDER)" :disabled="loading" clearable />
            <p v-if="fieldErrors.secretKey" class="login-field__error">{{ fieldErrors.secretKey }}</p>
          </div>
        </div>

        <div class="login-field login-field--horizontal">
          <label class="login-field__label">
            {{ $t(I18N.USER_ID_LABEL) }}
            <t-tooltip placement="top">
              <template #content>
                <div class="login-help-tooltip">
                  <p>{{ $t(I18N.USER_ID_DESC) }}</p>
                  <span>{{ $t(I18N.USER_ID_HELP_PREFIX) }} </span>
                  <a :href="helpLinks.userId" target="_blank" rel="noopener noreferrer">{{ $t(I18N.USER_ID_HELP_LINK) }}</a>
                </div>
              </template>
              <HelpCircleIcon size="14px" class="login-help-icon" />
            </t-tooltip>
          </label>
          <div class="login-field__input-wrapper">
            <t-input class="login-tdesign-input" v-model="userId" @enter="handleLogin" :placeholder="$t(I18N.USER_ID_PLACEHOLDER)" :disabled="loading" clearable />
            <p v-if="fieldErrors.userId" class="login-field__error">{{ fieldErrors.userId }}</p>
          </div>
        </div>

        <t-button block theme="primary" :loading="loading" :disabled="loading" @click="handleLogin">{{ $t(I18N.LOGIN_BTN) }}</t-button>

        <div v-if="showServerConfigLink && !demoModeEnabled" class="server-config-link">
          <button type="button" class="server-config-btn" :disabled="loading" @click="handleServerConfig">{{ $t(I18N.TOGGLE_LOGIN_MODE) }}</button>
        </div>

        <div v-if="demoModeEnabled" style="margin-top: 16px; text-align: center;">
          <div style="height: 1px; background: #e5e7eb; margin: 16px 0;" />
          <p style="font-size: 13px; color: #6b7280; margin: 0 0 12px;">{{ $t(I18N.DEMO_MODE_DESC) }}</p>
          <button
            type="button"
            style="background: none; border: 1px solid #1C66E5; color: #1C66E5; padding: 6px 20px; border-radius: 999px; font-size: 13px; cursor: pointer;"
            @click="enterDemoMode"
          >
            {{ $t(I18N.TRY_DEMO_MODE) }}
          </button>
        </div>
      </div>
    </div>

    <!-- 凭证验证失败弹框 -->
    <t-dialog
      :visible="showVerifyDialog"
      :header="$t(I18N.CREDENTIAL_VERIFY_DIALOG_TITLE)"
      :confirm-btn="$t(I18N.CREDENTIAL_VERIFY_DIALOG_DOC_LINK)"
      :cancel-btn="$t(I18N.CLOSE)"
      @confirm="openHelpDoc"
      @close="closeVerifyDialog"
      width="480px"
      attach="body"
    >
      <div class="login-verify-dialog">
        <p class="login-verify-dialog__error">{{ verifyError }}</p>
        <div class="login-verify-dialog__hints">
          <p class="login-verify-dialog__hint-text">{{ $t(I18N.CREDENTIAL_VERIFY_DIALOG_SECRETKEY_HINT) }}</p>
        </div>
      </div>
    </t-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { TranslateIcon, HelpCircleIcon, InfoCircleIcon, ErrorCircleIcon } from 'tdesign-icons-vue-next';
import {
  loginWithSecret,
  saveCredentials,
  getDefaultRoutePath,
  getDefaultLanguage,
  toggleLanguage,
  setDocumentLanguage,
  resolveDemoTargetPath,
  getHelpLinks,
  validateCredentialLogin,
  verifyCredentials,
  clearCredentials,
  reportBusinessOp,
  enResource,
  zhResource,
  I18N,
} from 'tuikit-live-manager-sdk-vue';
import type { SupportedLanguage } from 'tuikit-live-manager-sdk-vue';

defineProps<{ showServerConfigLink?: boolean }>();

const router = useRouter();
const route = useRoute();

const sdkAppId = ref('');
const secretKey = ref('');
const userId = ref('administrator');
const loading = ref(false);
const currentLanguage = ref<SupportedLanguage>(getDefaultLanguage());
const defaultRoutePath = getDefaultRoutePath();
const helpLinks = computed(() => getHelpLinks('vue', currentLanguage.value));

// 表单逐字段错误提示（输入框下方红字）
const fieldErrors = reactive<{ sdkAppId: string; secretKey: string; userId: string }>({
  sdkAppId: '',
  secretKey: '',
  userId: '',
});

// 凭证验证失败弹框
const showVerifyDialog = ref(false);
const verifyError = ref('');

const $t = (key: string): string => {
  const resource = currentLanguage.value === 'zh-CN' ? zhResource : enResource;
  return (resource as Record<string, string>)[key] || key;
};

function clearFieldErrors() {
  fieldErrors.sdkAppId = '';
  fieldErrors.secretKey = '';
  fieldErrors.userId = '';
}

function onSdkAppIdChange(value: string | number) {
  sdkAppId.value = String(value).replace(/\D/g, '');
  if (fieldErrors.sdkAppId) fieldErrors.sdkAppId = '';
}

function handleLanguageToggle() {
  const nextLang = toggleLanguage(currentLanguage.value);
  setDocumentLanguage(nextLang);
  currentLanguage.value = nextLang;
}

function setFieldError(field: string | undefined, message: string | undefined) {
  if (field && message) {
    (fieldErrors as any)[field] = message;
  }
}

async function handleLogin() {
  clearFieldErrors();

  // ===== 1. 输入级校验：逐字段红字提示 =====
  const validation = validateCredentialLogin(
    sdkAppId.value,
    secretKey.value,
    userId.value,
  );
  if (!validation.valid) {
    setFieldError(validation.field, $t(validation.message!));
    reportBusinessOp('credential_login', 'validate', false);
    return;
  }

  const appId = Number(sdkAppId.value.trim());
  loading.value = true;
  try {
    const res = await loginWithSecret(appId, secretKey.value.trim(), userId.value.trim() || 'administrator');
    if (res.code === 0 && res.data) {
      saveCredentials(res.data);

      // ===== 2. 登录后凭证有效性验证 =====
      const verifyResult = await verifyCredentials();
      if (!verifyResult.valid) {
        clearCredentials();
        verifyError.value = verifyResult.error || $t(I18N.CREDENTIAL_VERIFICATION_FAILED);
        showVerifyDialog.value = true;
        reportBusinessOp('credential_verify', 'verify', false);
        return;
      }

      reportBusinessOp('credential_login', 'login', true);
      reportBusinessOp('credential_verify', 'verify', true);
      router.replace((route.query.redirect as string) || defaultRoutePath);
    } else {
      verifyError.value = res.message || $t(I18N.CREDENTIAL_LOGIN_FAILED);
      showVerifyDialog.value = true;
      reportBusinessOp('credential_login', 'login', false);
    }
  } catch (e: any) {
    verifyError.value = e.message || $t(I18N.CREDENTIAL_LOGIN_FAILED);
    showVerifyDialog.value = true;
    reportBusinessOp('credential_login', 'login', false);
  } finally {
    loading.value = false;
  }
}

function closeVerifyDialog() {
  showVerifyDialog.value = false;
}

function openHelpDoc() {
  window.open(helpLinks.value.sdkAppId, '_blank', 'noopener,noreferrer');
  showVerifyDialog.value = false;
}

function handleServerConfig() { router.push({ name: 'config-required' }); }

const DOC_URLS = {
  integration: 'https://cloud.tencent.com/document/product/647/123012',
  setup: 'https://cloud.tencent.com/document/product/647/123012#2f8aa93c-a53b-4939-a460-64270c6484b9',
};

const demoModeEnabled = typeof __DEMO_MODE__ !== 'undefined' ? __DEMO_MODE__ : false;
const enterDemoMode = demoModeEnabled
  ? () => { window.location.href = resolveDemoTargetPath('vue'); }
  : () => {};
</script>

<style scoped>
.lang-switch-btn { position: absolute; top: 16px; right: 16px; display: flex; align-items: center; gap: 4px; padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 500; color: #4e5969; background: rgba(255,255,255,0.8); border: 1px solid #e5e7eb; z-index: 10; }
.lang-switch-btn:hover { background: #f7f8fa; color: #1d2129; }
.login-form-wrapper--tdesign { gap: 20px; }
.login-tdesign-input { flex: 1; }
.server-config-link { text-align: center; margin-top: 4px; }
.server-config-btn { background: none; border: none; color: #6b7280; font-size: 13px; cursor: pointer; text-decoration: underline; }
.server-config-btn:disabled { cursor: not-allowed; }

/* 输入框包裹 + 错误提示 */
.login-field__input-wrapper { flex: 1; display: flex; flex-direction: column; gap: 4px; }
.login-field__error { margin: 0; font-size: 12px; color: #e34d59; line-height: 1.4; }

/* 验证失败弹框样式 */
.login-verify-dialog__error { margin: 0 0 16px; font-size: 14px; color: #e34d59; line-height: 1.6; }
.login-verify-dialog__hints { background: #f7f8fa; border-radius: 8px; padding: 14px 16px; }
.login-verify-dialog__hint-text { margin: 0; font-size: 12px; color: #4e5969; line-height: 1.6; }

/* 登录页顶部说明文案 */
.login-notice { margin-bottom: 16px; padding: 10px 14px; border-radius: 8px; font-size: 13px; line-height: 1.6; }
.login-notice--demo { background: #eef2ff; color: #3b5998; }
.login-notice--config { background: #fff4e5; color: #b45309; }
.login-notice a { color: inherit; font-weight: 600; text-decoration: underline; }
.login-notice a:hover { opacity: 0.8; }
</style>
