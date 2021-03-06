import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/'
import pageRouter from './page'
import tabBarRouter from './tabBar'
import viewsRouter from './views'
import settingRouter from './views/setting'
import { Toast } from 'vant'
import statusbar from '../util/native'

Vue.use(Router)

let router = new Router({
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    // savedPosition 这个参数当且仅当导航 (通过浏览器的 前进/后退 按钮触发) 时才可用  效果和 router.go() 或 router.back()
    if (savedPosition) {
      // 返回savedPosition 其实就是 当用户点击 返回的话，保持之前游览的高度
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  },
  routes: [
    ...viewsRouter,
    ...pageRouter,
    ...tabBarRouter,
    ...settingRouter
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(router.history.current.meta.isTab)
  function plusReady() {
    // Android处理返回键
    plus.key.addEventListener('backbutton', function() {
      if (from.meta.isTab) {
        plus.runtime.quit()
      }
      // plus.nativeUI.toast('再按一次退出')
      // plus.runtime.quit()
    }, false)
  }
  // if (window.plus) {
  //   plusReady()
  // } else {
  //   document.addEventListener('plusready', plusReady, false)
  // }
  // ...
  let meta = to.meta
  store.commit('SET_TITLE', to.name)
  store.commit('SET_TABBAR', to.path)

  if (meta.isAuth === true) {
    if (localStorage.getItem('userinfo')) {
      next()
    } else {
      next({
        path: '/login', // 未登录则跳转至login页面
        // query: {redirect: to.fullPath} // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面
      })
      Toast('请先登录')
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  let meta = to.meta
  if (window.plus && meta.statusbarStyle) {
    statusbar.setStatusBar(meta.statusbarStyle)
  }
})

export default router
