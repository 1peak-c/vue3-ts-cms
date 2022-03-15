import axios from 'axios'
// 类型注解
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// 自定义的类型注解可以抽取到另外一个文件夹中保存
// 定义自己的 YfRequsetConfig  这样我可以在每一个接口实例中传递自定义的拦截器
interface YfRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}
// /service/index.ts 里的传入的配置参数改变   YfRequsetConfig这个接口类型继承AxiosRequestConfig  这样就可以传入自定义拦截器配置YfrequestInterceptors
interface YfRequsetConfig extends AxiosRequestConfig {
  interceptors?: YfRequestInterceptors
}

// 用class封装，可以创建多个axios实例   instance就是axios实例
class YfRequest {
  instance: AxiosInstance
  interceptors?: YfRequestInterceptors

  constructor(config: YfRequsetConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // 每个实例的请求拦截器（ 从config中取出的拦截器是对应实例的拦截器）
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 每个实列的响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所有实例拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有实例请求拦截器')
        return config
      },
      (err) => {
        console.log(err)
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有实例响应拦截器')
        return res
      },
      (err) => {
        console.log(err)
        return err
      }
    )
  }

  // 在request里封装每一次网络请求的请求拦截器与响应拦截器
  request(config: YfRequsetConfig): any {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default YfRequest
