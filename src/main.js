import axios from 'axios';
import VueAxios from 'vue-axios'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './scss/app.scss'

createApp(App)
    .use(VueAxios, axios)
    .use(store)
    .use(router)
    .mount('#app')

