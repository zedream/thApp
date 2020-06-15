const tokenKey = 'th-token'

export const setUserInfo = (userInfo) => {
  localStorage.setItem('userinfo', userInfo)
}

export const setToken = (token) => {
  localStorage.setItem(tokenKey, token)
}

export const removeUserInfo = () => {
  localStorage.removeItem('userinfo')
}

export const removeToken = () => {
  localStorage.removeItem(tokenKey)
}

export const getUserInfo = () => {
  return JSON.parse(localStorage.getItem('userinfo'))
}

export const getToken = () => {
  return localStorage.getItem(tokenKey)
}
