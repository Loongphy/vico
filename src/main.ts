import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import { createI18n } from 'vue-i18n'
import NProgress from 'nprogress'
import App from './App.vue'
import 'nprogress/nprogress.css'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const i18n = createI18n({
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  allowComposition: true,
  messages,
})

// 打开进度条
export const start = () => {
  NProgress.start()
}

// 关闭进度条
export const close = () => {
  NProgress.done()
}

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(() => {
  start()
})

router.afterEach(() => {
  close()
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
