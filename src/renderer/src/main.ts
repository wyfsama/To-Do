import './assets/main.css'
// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(ArcoVueIcon).mount('#app')
