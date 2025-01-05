import './assets/main.css'

import HighchartsVue from 'highcharts-vue'
import { createApp } from 'vue'
import App from './App.vue'

// первый вариант
// const app = createApp(App)
// app.mount('#app')
// app.use(HighchartsVue)

// второй вариант
createApp(App).use(HighchartsVue).mount('#app')


// createApp(App).mount('#app')
// createApp(App).use(HighchartsVue)
// App.use(HighchartsVue)