import { setUserInfo, setToken, getUserInfo, getToken, removeUserInfo, removeToken } from '@/util/session.js'
import axios from '@/axios'
import {Toast} from "vant"

const user = {
  state: {
    userInfo: getUserInfo() || {},
    token: getToken() || ''
  },
  actions: {
    loginByAccount ({commit}, loginInfo) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/login', {
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
          Toast.success('修改成功')
          window.history.go(-1)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    register ({commit}, registerInfo) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/register', {
          account: registerInfo.account,
          password: registerInfo.password
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
    logout ({commit}) {
      return new Promise((resolve, reject) => {
        commit('CLEAR_TOKEN')
        commit('CLEAR_USERINFO')
        resolve()
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
    },
    CLEAR_TOKEN: (state) => {
      state.token = ''
      removeToken()
    },
    CLEAR_USERINFO: (state) => {
      state.userInfo = {}
      removeUserInfo()
    }
  }
}

export default user
