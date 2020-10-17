import axios from 'axios'
import router from '@/router'
import { getToken } from '@/util/session'
import { Toast } from 'vant'

const Domain = 'http://th.vaiwan.com/thapp-files/'

axios.defaults.timeout = 5000
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500
}

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '' : 'http://thApp.vaiwan.com'

// 跨域请求，允许保存cookie
// axios.defaults.withCredentials = true

// http request拦截
axios.interceptors.request.use(config => {
  if (config.url === '/users/update') {
    config.data.avatar = config.data.avatar.split(Domain)[1]
  }
  if (getToken()) {
    config.headers['TH-Auth'] = `th ${getToken()}`
  }
  return config
}, error => {
  return Promise.reject(error)
})
// http response 拦截
axios.interceptors.response.use(res => {
  // 获取状态码
  const status = res.data.code || res.status
  const message = res.data.msg || '未知错误'
  // 如果是401则跳转到登录页面
  if (status === 401) router.push({ path: '/login' })
  // 如果请求为非200否者默认统一处理
  if (status !== 200) {
		Toast(message)
    return Promise.reject(new Error(message))
  }
  return res
}, error => {
  if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
    Toast('请求超时')
  }
  return Promise.reject(new Error(error))
})

export default axios
