import { setUserInfo, setToken, getUserInfo, getToken } from '@/util/session.js'
import axios from '@/axios'

const user = {
  state: {
    userInfo: getUserInfo() || {},
    token: getToken() || ''
  },
  actions: {
    loginByAccount ({commit}, loginInfo) {
      return new Promise((resolve, reject) => {
        axios.post('/login', {
          account: loginInfo.account,
          password: loginInfo.password
        }).then(res => {
          commit('SET_TOKEN', res.data.token)
          commit('SET_USERINFO', res.data.result)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    updateUserInfo ({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        axios.post('/users/update', {
          ...userInfo
        }).then(res => {
          commit('SET_USERINFO', res.data.result)
        })
        .catch(err => {
          reject(err)
        })
      })
    }
  },
  mutations: {
    SET_TOKEN: (state, value) => {
      state.token = value
      setToken(value)
    },
    SET_USERINFO: (state, value) => {
      state.userInfo = value
      setUserInfo(JSON.stringify(value))
    }
  }
}

export default user
