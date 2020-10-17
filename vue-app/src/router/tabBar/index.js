import Layout from '@/page/index'
import Home from '@/views/home/index'

export default [{
    path: '/home',
    component: Layout,
    children: [{
    path: '/home',
    name: '首页',
    meta: {
      keepAlive: true,
      isTab: true,
      isAuth: true,
      statusbarBackground: '#ffffff',
      statusbarStyle: 'dark'
    },
    component: Home
    }]
  }, {
	path: '/message',
	component: Layout,
	  children: [{
      path: '/message',
      name: '消息',
      meta: {
        keepAlive: true,
        isTab: true,
        isAuth: true,
        statusbarBackground: '#ffffff',
        statusbarStyle: 'dark'
      },
      component: () => import( /* webpackChunkName: "views" */ '@/views/message/index')
	}]
  }, {
	path: '/shopWindow',
	component: Layout,
	children: [{
      path: '/shopWindow',
      name: '橱窗',
      meta: {
        keepAlive: true,
        isTab: true,
        isAuth: true,
        statusbarBackground: '#ffffff',
        statusbarStyle: 'dark'
		},
      component: () => import( /* webpackChunkName: "views" */ '@/views/shop/shopWindow')
	}]
  }, {
	path: '/universe',
	component: Layout,
	children: [{
      path: '/universe',
      name: '圈子',
      meta: {
        keepAlive: true,
        isTab: true,
        isAuth: true,
        statusbarBackground: '#ffffff',
        statusbarStyle: 'dark'
		},
      component: () => import( /* webpackChunkName: "views" */ '@/views/universe/index')
	}]
  }, {
	path: '/self',
	component: Layout,
	children: [{
      path: '/self',
      name: '我',
      meta: {
        keepAlive: true,
        isTab: true,
        isAuth: true,
        statusbarBackground: '#63b0ff',
        statusbarStyle: 'light'
      },
      component: () => import( /* webpackChunkName: "views" */ '@/views/self/index')
	}]
  }]
