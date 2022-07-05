import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import i18n from './locales'
import App from './App.vue'
import routes from '~pages'
import '@unocss/reset/tailwind.css'
import 'uno.css'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
