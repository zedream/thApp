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

function plusReady() {
	// Android处理返回键
	plus.key.addEventListener('backbutton',function() {
		plus.nativeUI.toast('THao: 再按一次退出')
		plus.runtime.quit()
	}, false)
	store.commit('INIT_STATUSBAR')
	console.log(store.state.bar.sysStatusbar.height)
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
}).$mount('#app')
