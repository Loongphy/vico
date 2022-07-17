import { createApp } from 'vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)
app.mount('#app')
