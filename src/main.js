import axios from 'axios';
import VueAxios from 'vue-axios'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './scss/app.scss'

axios.defaults.baseURL = 'https://test-assignment.emphasoft.com'

const localStorageToken = localStorage.getItem('token')
if (!!localStorageToken) {
    axios.defaults.headers.common['Authorization'] = `Token ${localStorageToken}`
}

createApp(App)
    .use(VueAxios, axios)
    .use(store)
    .use(router)
    .mount('#app')

