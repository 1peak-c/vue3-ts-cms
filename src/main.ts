import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import YfRequest from './service'

// 这个请求会有单独的拦截器
// YfRequest.request({
//   url: './home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单个网路请求拦截器')
//       return config
//     }
//   }
// })

YfRequest.request({
  url: './home/multidata',
  method: 'GET'
}).then((res: any) => {
  console.log(res)
})

// import { BASE_URL, BASE_NAME } from './service/request/config'
// console.log(BASE_URL)
// console.log(BASE_NAME)
// console.log(123)
// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// app.use(ElementPlus) // 全局引入element-plus

const app = createApp(App)
app.use(store)
app.use(router)
// registerApp(app)

app.mount('#app')
