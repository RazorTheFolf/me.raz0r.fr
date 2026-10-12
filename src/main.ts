import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import './styles/root.css'
import './styles/base.css'

const app = createApp(App).use(router).use(i18n)

router.isReady().then(() => app.mount('#app'))
