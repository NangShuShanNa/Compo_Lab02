import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// ✅ create pinia instance
const pinia = createPinia()

// ✅ install pinia & router
createApp(App)
  .use(pinia)   // <-- THIS IS MISSING
  .use(router)
  .mount('#app')
