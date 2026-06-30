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

      <div class="login-form-wrapper login-form-wrapper--tdesign">
        <div class="login-field login-field--horizontal">
          <label class="login-field__label">{{ $t(I18N.SDK_APP_ID_LABEL) }}</label>
          <t-input class="login-tdesign-input" :value="sdkAppId" @change="onSdkAppIdChange" @enter="handleLogin" :placeholder="$t(I18N.SDK_APP_ID_PLACEHOLDER)" :disabled="loading" clearable />
        </div>

        <div class="login-field login-field--horizontal">
          <label class="login-field__label">{{ $t(I18N.SECRET_KEY_LABEL) }}</label>
          <t-input class="login-tdesign-input" type="password" v-model="secretKey" @enter="handleLogin" :placeholder="$t(I18N.SECRET_KEY_PLACEHOLDER)" :disabled="loading" clearable />
        </div>

        <div class="login-field login-field--horizontal">
          <label class="login-field__label">{{ $t(I18N.USER_ID_LABEL) }}</label>
          <t-input class="login-tdesign-input" v-model="userId" @enter="handleLogin" :placeholder="$t(I18N.USER_ID_PLACEHOLDER)" :disabled="loading" clearable />
        </div>

        <t-button block theme="primary" :loading="loading" :disabled="loading" @click="handleLogin">{{ $t(I18N.LOGIN_BTN) }}</t-button>

        <div class="credential-hint">{{ $t(I18N.SECRET_KEY_MEMORY_ONLY) }}</div>

        <div v-if="showServerConfigLink" class="server-config-link">
          <button type="button" class="server-config-btn" :disabled="loading" @click="handleServerConfig">{{ $t(I18N.TOGGLE_LOGIN_MODE) }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { TranslateIcon } from 'tdesign-icons-vue-next';
import {
  loginWithSecret,
  saveCredentials,
  getDefaultRoutePath,
  getDefaultLanguage,
  toggleLanguage,
  setDocumentLanguage,
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

const $t = (key: string): string => {
  const resource = currentLanguage.value === 'zh-CN' ? zhResource : enResource;
  return (resource as Record<string, string>)[key] || key;
};

function onSdkAppIdChange(value: string | number) { sdkAppId.value = String(value).replace(/\D/g, ''); }

function handleLanguageToggle() {
  const nextLang = toggleLanguage(currentLanguage.value);
  setDocumentLanguage(nextLang);
  currentLanguage.value = nextLang;
}

async function handleLogin() {
  const appId = Number(sdkAppId.value.trim());
  if (!appId || appId <= 0) { alert($t(I18N.SDK_APP_ID_REQUIRED)); return; }
  if (!secretKey.value.trim()) { alert($t(I18N.SECRET_KEY_REQUIRED)); return; }

  loading.value = true;
  try {
    const res = await loginWithSecret(appId, secretKey.value.trim(), userId.value.trim() || 'administrator');
    if (res.code === 0 && res.data) {
      saveCredentials(res.data);
      router.replace((route.query.redirect as string) || defaultRoutePath);
    } else {
      alert(res.message || $t(I18N.CREDENTIAL_LOGIN_FAILED));
    }
  } catch (e: any) {
    alert(e.message || $t(I18N.CREDENTIAL_LOGIN_FAILED));
  } finally {
    loading.value = false;
  }
}

function handleServerConfig() { router.push({ name: 'config-required' }); }
</script>

<style scoped>
.lang-switch-btn { position: absolute; top: 16px; right: 16px; display: flex; align-items: center; gap: 4px; padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 500; color: #4e5969; background: rgba(255,255,255,0.8); border: 1px solid #e5e7eb; z-index: 10; }
.lang-switch-btn:hover { background: #f7f8fa; color: #1d2129; }
.login-form-wrapper--tdesign { gap: 20px; }
.login-tdesign-input { flex: 1; }
.server-config-link { text-align: center; margin-top: 4px; }
.server-config-btn { background: none; border: none; color: #6b7280; font-size: 13px; cursor: pointer; text-decoration: underline; }
.server-config-btn:disabled { cursor: not-allowed; }
</style>
