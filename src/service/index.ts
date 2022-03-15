//  service 统一出口

import YfRequest from './request'
import { BASE_URL, TIMEOUT } from './request/config'

const yfRequest = new YfRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('实例请求成功拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('实例请求失败拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('实例响应成功拦截')
      return res.data
    },
    responseInterceptorCatch: (err) => {
      console.log('实例响应失败拦截')
      return err
    }
  }
})
export default yfRequest
