<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <RouterView />
    <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
      [Default Layout]
    </div>
    <button class="icon-btn mx-2 !outline-none" :title="isDark ? t('button.toggle_light') : t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>
  </main>
</template>
