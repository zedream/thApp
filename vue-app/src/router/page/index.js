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
  }, {
    path: '/login',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/login/index'),
    name: '登录',
    meta: {
      keepAlive: false,
      isTab: false,
      isAuth: false,
      statusbarBackground: '#ffffff',
      statusbarStyle: 'dark'
    }
  }, {
    path: '/404',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/components/error-page/404'),
    name: '404',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  }, {
    path: '/401',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/components/error-page/401'),
    name: '401',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  }, {
    path: '/403',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/components/error-page/403'),
    name: '403',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  }, {
    path: '/500',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/components/error-page/500'),
    name: '500',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  }, {
    path: '/',
    name: '首页',
		redirect: '/home'
  }, {
    path: '*',
    redirect: '/404'
  }
]
