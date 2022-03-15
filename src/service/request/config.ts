// const BASE_URL = 'http://coderwhy.org/prod'
// const BASE_NAME = 'cyf'

// 根据process.env.NODE_ENV 判断环境  不需要手动修改

export let BASE_URL = ''
export const TIMEOUT = 10000
if (process.env.NODE_ENV === 'production') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'text') {
  BASE_URL = '/api'
}
