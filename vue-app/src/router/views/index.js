import Nav from '@/page/index/navbar'

export default [{
  path: '/chat',
  component: Nav,
  children: [{
    path: '/chat',
    name: '消息',
    meta: {
			isTab: false
		},
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/message/chat')
  }]
}, {
  path: '/more',
  component: Nav,
  children: [{
    path: '/more',
    name: '更多信息',
    meta: {
			isTab: false
		},
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/self/more/index')
  }]
}, {
  path: '/updateNickName',
  component: Nav,
  children: [{
    path: '/updateNickName',
    name: '修改昵称',
    meta: {
			isTab: false,
			isSave: true
		},
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/self/updateNickName')
  }]
}, {
  path: '/updatePhone',
  component: Nav,
  children: [{
    path: '/updatePhone',
    name: '修改手机号',
    meta: {
			isTab: false,
			isSave: true
		},
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/self/updatePhone')
  }]
}, {
  path: '/updateAddress',
  component: Nav,
  children: [{
    path: '/updateAddress',
    name: '修改地址',
    meta: {
			isTab: false,
			isSave: true
		},
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/self/updateAddress')
  }]
}, {
  path: '/updateSex',
  component: Nav,
  children: [{
    path: '/updateSex',
    name: '修改性别',
    meta: {
			isTab: false,
			isSave: true
		},
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/self/more/updateSex')
  }]
}, {
  path: '/updateMotto',
  component: Nav,
  children: [{
    path: '/updateMotto',
    name: '修改个性签名',
    meta: {
			isTab: false,
			isSave: true
		},
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/self/more/updateMotto')
  }]
}]
