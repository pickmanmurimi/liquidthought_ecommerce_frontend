import { createApp } from 'vue'
import 'aos/dist/aos.css'
import './tailwind/tailwind.css'
import App from './App.vue'
import router from './Router/router'
import AOS from 'aos';
AOS.init();


createApp(App)
    .use(router)
    .mount('#app');
