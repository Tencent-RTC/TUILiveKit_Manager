<template>
  <div class="main-layout">
    <!-- 顶部导航栏 -->
    <header class="main-header">
      <div class="header-left">
        <component v-if="layoutSlots?.headerLeft" :is="layoutSlots.headerLeft" />
        <!-- Logo -->
        <div class="header-logo">
          <img v-if="brand.logoUrl" :src="brand.logoUrl" alt="logo"/>
          <span class="logo-text">{{ brand.appName || 'LiveKit' }}</span>
        </div>
        <div class="header-divider" />
        <h1 class="page-title">{{ brand.pageTitle ? t(brand.pageTitle) : t('Live Room Management Platform') }}</h1>
      </div>

      <div class="header-right">
        <component v-if="layoutSlots?.headerRight" :is="layoutSlots.headerRight" />
        <!-- 语言切换按钮 -->
        <div
          class="lang-switch-btn"
          @click="handleToggleLanguage"
          :title="currentLanguage === 'zh-CN' ? t('Switch to English') : t('Switch to Chinese')"
        >
          <TranslateIcon size="16px" />
          <span class="lang-switch-label">{{ currentLanguage === 'zh-CN' ? 'EN' : '中' }}</span>
        </div>

        <div class="user-menu">
          <div class="user-avatar">
            <img
              v-if="userProfile?.avatarUrl && !avatarLoadFailed"
              class="user-avatar-image"
              :src="userProfile.avatarUrl"
              :alt="t('Avatar Alt', { name: displayUserName })"
              referrerpolicy="no-referrer"
              @error="avatarLoadFailed = true"
            />
            <UserIcon v-else size="16px" />
          </div>
          <span class="user-name">{{ displayUserName }}</span>
        </div>
      </div>
    </header>

    <div class="main-body">
      <!-- 侧边栏 -->
      <aside class="main-sidebar">
        <div class="sidebar-content">
          <component v-if="layoutSlots?.sidebarTop" :is="layoutSlots.sidebarTop" />
          <!-- 导航菜单 -->
          <nav class="sidebar-menu">
            <div
              v-for="menu in translatedMenus"
              :key="menu.key"
              class="menu-item"
              :class="{ active: activeMenu === menu.key }"
              @click="handleMenuClick(menu.path)"
            >
              <component :is="menuIcons[menu.icon || menu.key]" size="18px" />
              <span>{{ menu.translatedTitle }}</span>
            </div>
          </nav>
          <component v-if="layoutSlots?.sidebarBottom" :is="layoutSlots.sidebarBottom" />
        </div>
      </aside>

      <!-- 页面内容 -->
      <main class="main-content">
        <div class="content-wrapper">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { VideoCamera1Icon, ViewModuleIcon, GiftIcon, UserIcon, TranslateIcon } from 'tdesign-icons-vue-next';
import { useUIKit } from '@tencentcloud/uikit-base-component-vue3';
import i18nextInstance from '@tencentcloud/uikit-base-component-vue3/dist/providers/UIKitProvider/i18n';
import {
  getCurrentUserId,
  batchGetUserProfilePortrait,
} from 'tuikit-live-manager-sdk-vue';
import {
  getActiveAppConfig,
  getMenuKeyFromPath,
  getDefaultLanguage,
  toggleLanguage,
  setDocumentLanguage,
  resolveAccount,
} from 'tuikit-live-manager-sdk-vue';
import type { SupportedLanguage } from 'tuikit-live-manager-sdk-vue';
import { enResource, zhResource } from 'tuikit-live-manager-sdk-vue';
import { updateDocumentTitle } from '../router';
import type { UserPortraitProfile } from '../api/auth';

const { t, setLanguage, i18next } = useUIKit();

// 使用内部 i18next 实例注册资源
if (i18nextInstance && typeof i18nextInstance.addResourceBundle === 'function') {
  i18nextInstance.addResourceBundle('en-US', 'translation', enResource, true, true);
  i18nextInstance.addResourceBundle('zh-CN', 'translation', zhResource, true, true);
} else {
  console.warn('[MainLayout] i18nextInstance 不可用');
}

const appConfig = getActiveAppConfig<any>();
const brand = appConfig.brand;
const menus = appConfig.menus;
const layoutSlots = appConfig.components?.layout;

// 当前语言状态
const currentLanguage = ref<SupportedLanguage>(getDefaultLanguage());

// 创建一个响应式的语言key,用于强制重新渲染菜单
const languageKey = ref(0);

// 创建一个响应式的翻译函数,依赖于语言变化
const translatedMenus = computed(() => {
  // 强制依赖 languageKey,确保语言切换时重新计算
  const _ = languageKey.value;
  return menus.map(menu => ({
    ...menu,
    translatedTitle: t(menu.title)
  }));
});

/** 菜单 key → 图标组件映射 */
const menuIcons: Record<string, any> = {
  'live-monitor': VideoCamera1Icon,
  'live-list': ViewModuleIcon,
  'gift-config': GiftIcon,
};

const router = useRouter();
const route = useRoute();

const userProfile = ref<UserPortraitProfile | null>(null);
const avatarLoadFailed = ref(false);

// 当前激活的菜单项
const activeMenu = ref('live-list');

const currentUserId = computed(() => getCurrentUserId() || '');
const fallbackUserName = computed(
  () => currentUserId.value || t('Administrator')
);
const displayUserName = computed(
  () => userProfile.value?.nick || fallbackUserName.value
);

// 获取用户资料
watch(currentUserId, (newUserId) => {
  if (!newUserId) {
    userProfile.value = null;
    avatarLoadFailed.value = false;
    return;
  }

  let cancelled = false;
  batchGetUserProfilePortrait([newUserId])
    .then((profileMap) => {
      if (cancelled) return;
      userProfile.value = profileMap.get(newUserId) || null;
      avatarLoadFailed.value = false;
    })
    .catch((error) => {
      if (cancelled) return;
      console.error('[MainLayout] Failed to fetch user profile:', error);
      userProfile.value = null;
      avatarLoadFailed.value = false;
    });

  return () => {
    cancelled = true;
  };
}, { immediate: true });

// 点击外部关闭用户菜单
onMounted(async () => {
  // 监听 i18next 语言变化事件,强制重新计算翻译
  if (i18next && typeof i18next.on === 'function') {
    i18next.on('languageChanged', () => {
      languageKey.value++;
    });
  }

  // 确保语言已同步（getDefaultLanguage 已在 App.vue 中根据 localStorage + 浏览器语言初始化）
  try {
    await resolveAccount();
  } catch (err) {
    console.warn('[MainLayout] 解析账号信息失败:', err);
  }
});

onUnmounted(() => {
  // 移除 i18next 监听器
  if (i18next && typeof i18next.off === 'function') {
    i18next.off('languageChanged');
  }
});

// 监听路由变化，更新菜单状态
watch(
  () => route.path,
  (path) => {
    const key = getMenuKeyFromPath(path);
    if (key) {
      activeMenu.value = key;
    }
  },
  { immediate: true }
);

// 处理菜单点击
const handleMenuClick = (path: string) => {
  router.push(path.startsWith('/') ? path : `/${path}`);
};

// 处理语言切换
const handleToggleLanguage = () => {
  const nextLang = toggleLanguage(currentLanguage.value);
  // 先更新 html lang，再触发 i18next（changeLanguage 会自动持久化到 i18nextLng）
  setDocumentLanguage(nextLang);
  setLanguage(nextLang);  // 这个会触发 i18next.changeLanguage,进而触发 languageChanged 事件
  currentLanguage.value = nextLang;
  // 更新浏览器标题
  updateDocumentTitle();
};
</script>

<!-- CSS 已提取到 tuikit-live-manager-sdk-vue/style/main-layout.css，通过入口自动加载 -->
