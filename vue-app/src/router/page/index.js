import Layout from '@/page/index/'

export default [{
	path: '/message',
	component: Layout,
	children: [{
		path: '/message',
		name: '消息',
		meta: {
			keepAlive: true,
			isTab: true,
			isAuth: true
		},
		component: () =>
			import( /* webpackChunkName: "views" */ '@/views/message/index')
	}]
  }, {
	path: '/friend',
	component: Layout,
	children: [{
		path: '/friend',
		name: '朋友',
		meta: {
			keepAlive: true,
			isTab: true,
			isAuth: true
		},
		component: () =>
			import( /* webpackChunkName: "views" */ '@/views/friend/index')
	}]
  }, {
	path: '/circles',
	component: Layout,
	children: [{
		path: '/circles',
		name: '圈子',
		meta: {
			keepAlive: true,
			isTab: true,
			isAuth: true
		},
		component: () =>
			import( /* webpackChunkName: "views" */ '@/views/circles/index')
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
			isAuth: true
		},
		component: () =>
			import( /* webpackChunkName: "views" */ '@/views/self/index')
	}]
  }, {
    path: '/login',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/page/login/index'),
    name: '登录',
    meta: {
      keepAlive: false,
      isTab: false,
      isAuth: false
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
    name: '消息',
		redirect: '/message'
  }, {
    path: '*',
    redirect: '/404'
  }
]
