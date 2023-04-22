import { createApp } from 'vue'
import App from './App.vue'
import controller from './controller'
import Router from '@/router'

createApp(App).use(controller).use(Router).mount('#app')
