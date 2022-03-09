// const BASE_URL = 'http://coderwhy.org/prod'
// const BASE_NAME = 'cyf'

// 根据process.env.NODE_ENV 判断环境  不需要手动修改

export let BASE_URL = ''
export let BASE_NAME = ''
if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://123.207.32.32:8000'
  BASE_NAME = 'cyfP'
} else if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000'
  BASE_NAME = 'cyfD'
} else if (process.env.NODE_ENV === 'text') {
  BASE_URL = 'http://123.207.32.32:8000'
  BASE_NAME = 'cyfT'
}
