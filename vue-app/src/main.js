import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import store from './store'
import axios from './axios'
import VueAxios from 'vue-axios'

Vue.use(Vant)
Vue.use(router)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	axios,
  render: h => h(App),
}).$mount('#app')
