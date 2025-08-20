import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'

// ✅ Import nprogress styles
import 'nprogress/nprogress.css'

// ✅ Import Vercel Analytics
import { inject } from '@vercel/analytics'

// ✅ Create pinia instance
const pinia = createPinia()

// ✅ Create app
const app = createApp(App)

// ✅ Enable analytics tracking
inject()

// ✅ Install pinia & router into the app
app.use(pinia)
app.use(router)
app.mount('#app')
