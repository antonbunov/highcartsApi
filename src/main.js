import './assets/main.css'

import HighchartsVue from 'highcharts-vue'
import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'

import HighchartsVue from 'highcharts-vue'


createApp(App).mount('#app')
createApp(App).use(HighchartsVue)
App.use(HighchartsVue)