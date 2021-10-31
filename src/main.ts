import { createApp } from 'vue'
import './tailwind/tailwind.css'
import App from './App.vue'
import router from './Router/router'

createApp(App)
    .use(router)
    .mount('#app');
