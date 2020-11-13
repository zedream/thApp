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

document.oncontextmenu = function() {
	return false
}
console.log(router)

function plusReady() {
	// Android处理返回键
	plus.key.addEventListener('backbutton', function() {
		// plus.nativeUI.toast('再按一次退出')
		// plus.runtime.quit()
		router.go(-1)
	}, false)
	if (window.location.hash.search('/login')) {
		store.commit('INIT_STATUSBAR', 'light')
	} else {
		store.commit('INIT_STATUSBAR', 'dark')
	}
}
if (window.plus) {
	plusReady()
} else {
	document.addEventListener('plusready', plusReady, false)
}

new Vue({
	router,
	store,
	axios,
  	render: h => h(App),
	// mounted() {
	// 	document.dispatchEvent(new Event('render-event'))
	// }
}).$mount('#app')
