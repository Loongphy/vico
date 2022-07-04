import { createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import i18n from './locales'

const app = createApp(App)
app.use(i18n)
app.mount('#app')
