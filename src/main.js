import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Bootstrap Configuration
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Create Vue App
const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')