//  service 统一出口

import YfRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const yfRequest = new YfRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config: any) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
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
