import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

axios.defaults.baseURL = "https://metawaydemo.vps-kinghost.net:8485/api"
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

createApp(App).use(router).mount('#app')
