import axios from 'axios';
import VueAxios from 'vue-axios'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './theme.css'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(fas);
createApp(App)
    .use(VueAxios, axios)
    .use(store)
    .use(router)
    .mount('#app')

