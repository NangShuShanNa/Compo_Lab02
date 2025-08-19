import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// ✅ Import nprogress styles
import 'nprogress/nprogress.css'

// ✅ Create pinia instance
const pinia = createPinia()

// ✅ Install pinia & router into the app
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
