import Layout from '@/page/index'

export default [{
  path: '/chat',
  component: Layout,
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
  component: Layout,
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
  path: '/userInfo',
  component: Layout,
  children: [{
    path: '/userInfo',
    name: '个人信息',
    meta: {
      isTab: false
    },
    component: () =>
        import( /* webpackChunkName: "views" */ '@/views/self/userInfo')
  }]
}, {
  path: '/updateNickName',
  component: Layout,
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
  component: Layout,
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
  component: Layout,
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
  component: Layout,
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
  component: Layout,
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
