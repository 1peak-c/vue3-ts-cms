import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import { BASE_URL, BASE_NAME } from './service/request/config'
// console.log(BASE_URL)
// console.log(BASE_NAME)
// console.log(123)
// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(store)
app.use(router)
// registerApp(app)

// app.use(ElementPlus) // 全局引入element-plus

app.mount('#app')
