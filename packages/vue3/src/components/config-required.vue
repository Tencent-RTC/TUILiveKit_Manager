<template>
  <div class="login-container">
    <div class="login-content">
      <!-- 标题 -->
      <div class="login-header">
        <h1 class="login-title">{{ t('Live Room Management Platform') }}</h1>
      </div>

      <!-- 警告提示 -->
      <div class="config-warning">
        <div class="config-warning__title">{{ t('Config Missing') }}</div>
        <div class="config-warning__content">
          {{ t('Config Missing Content') }}
          <span v-for="(item, index) in missingItems" :key="item" class="config-warning__item">
            {{ getMissingLabel(item) }}{{ index < missingItems.length - 1 ? t('Enumeration Separator') : '' }}
          </span>
          <br /><br />
          {{ t('Config Missing Instructions') }}
          <ul class="config-warning__list">
            <li><code>SDK_APP_ID</code> - {{ t('Tencent Cloud SDK AppID') }}</li>
            <li><code>SECRET_KEY</code> - {{ t('Tencent Cloud SecretKey') }}</li>
          </ul>
          <!-- 中文文档链接 -->
          <div v-if="isChinese" class="config-warning__doc">
            <a href="https://cloud.tencent.com/document/product/647/123012" target="_blank" rel="noopener noreferrer">
              配置指南
            </a>
          </div>
          <!-- TODO: 英文文档链接，待添加 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { checkServerConfig, isLoggedIn } from 'tuikit-live-manager-sdk-vue';
import { useUIKit } from '@tencentcloud/uikit-base-component-vue3';
import { i18next } from '@tencentcloud/uikit-base-component-vue3';
// 公共样式由 tuikit-live-manager-sdk-vue 入口自动加载，无需单独 import

const router = useRouter();
const route = useRoute();
const { t } = useUIKit();

const missingItems = ref<string[]>([]);

// 判断当前是否为中文语言环境
const isChinese = computed(() => i18next.language === 'zh-CN');

onMounted(async () => {
  // 从路由 query 获取缺失项
  const queryMissing = route.query.missing;
  if (queryMissing && typeof queryMissing === 'string') {
    missingItems.value = queryMissing.split(',');
  } else {
    // 重新检查配置状态
    try {
      const res = await checkServerConfig();
      const data = res.data;
      if (!data) {
        missingItems.value = ['SDK_APP_ID', 'SECRET_KEY', 'USER_ID'];
        return;
      }

      const missing: string[] = [];
      if (!data.hasSdkAppId) missing.push('SDK_APP_ID');
      if (!data.hasSecretKey) missing.push('SECRET_KEY');
      if (!data.hasIdentifier) missing.push('USER_ID');
      missingItems.value = missing;

      // 如果已登录且无缺失项，直接跳转
      if (missing.length === 0 && isLoggedIn()) {
        router.replace('/live-list');
      }
    } catch {
      missingItems.value = ['SDK_APP_ID', 'SECRET_KEY', 'USER_ID'];
    }
  }
});

const getMissingLabel = (item: string) => {
  const labels: Record<string, string> = {
    'SDK_APP_ID': 'SdkAppId',
    'SECRET_KEY': 'SecretKey',
    'USER_ID': 'UserId',
  };
  return labels[item] || item;
};
</script>
