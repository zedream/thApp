import axios from 'axios'
import router from '@/router'
import { getToken } from '@/util/session'
import { Toast } from 'vant'

axios.defaults.timeout = 50000
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500
}
// 跨域请求，允许保存cookie
// axios.defaults.withCredentials = true

// http request拦截
axios.interceptors.request.use(config => {
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
  if (status === 401) router.push({path: '/login'})
  // 如果请求为非200否者默认统一处理
  if (status !== 200) {
		Toast(message)
    return Promise.reject(new Error(message))
  }
  return res
}, error => {
  return Promise.reject(new Error(error))
})

export default axios
