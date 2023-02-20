import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import {router} from './router';
// window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;


createApp(App)
    .use(router)
    .mount('#app')

