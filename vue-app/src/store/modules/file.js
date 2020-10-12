import axios from '@/axios'

const file = {
  state: {
  },
  actions: {
    upload ({state}, data) {
      return new Promise((resolve, reject) => {
        axios.post('/file/upload', data)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    getFiles ({state}, data) {
      console.log(state)
      return new Promise((resolve, reject) => {
        axios.get('/file/list', {params: data})
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    deleteFile ({commit}, data) {
      return new Promise((resolve, reject) => {
        axios.post('/file/delete', data)
        .then(res => {
          commit('SET_TOKEN1')
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
      })
    }
  },
  mutations: {

  }
}

export default file
