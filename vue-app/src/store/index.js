import Vue from 'vue'
import Vuex from 'vuex'
import bar from './modules/bar'
import user from './modules/user'
import communicate from './modules/communicate'
import socket from './modules/socket'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
		bar,
		user,
		communicate,
		socket
  }
})

export default store
