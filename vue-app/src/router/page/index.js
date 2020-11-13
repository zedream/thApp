import Layout from '@/page/index'

export default [{
    path: '/login',
    component: () =>
        import( /* webpackChunkName: "tabBar" */ '@/page/login/index'),
    name: '登录',
    meta: {
        keepAlive: false,
        isAuth: false,
        statusbarStyle: 'light',
        depth: 0
    }
}, {
    path: '/register',
    component: Layout,
    children: [{
        path: '/register',
        component: () =>
            import( /* webpackChunkName: "tabBar" */ '@/page/login/register'),
        name: '注册',
        meta: {
            keepAlive: false,
            isAuth: false,
            statusbarBackground: '#ffffff',
            statusbarStyle: 'dark',
            depth: 0
        }
    }]
}, {
    path: '/forget',
    component: () =>
        import( /* webpackChunkName: "tabBar" */ '@/page/login/forget'),
    name: '账号找回',
    meta: {
        keepAlive: false,
        isAuth: false,
        statusbarBackground: '#ffffff',
        statusbarStyle: 'dark',
        depth: 0
    }
}, {
    path: '/404',
    component: () =>
        import( /* webpackChunkName: "tabBar" */ '@/components/error-page/404'),
    name: '404',
    meta: {
        keepAlive: true,
        isAuth: false,
        depth: 0
    }
}, {
    path: '/401',
    component: () =>
        import( /* webpackChunkName: "tabBar" */ '@/components/error-page/401'),
    name: '401',
    meta: {
        keepAlive: true,
        isAuth: false,
        depth: 0
    }
}, {
    path: '/403',
    component: () =>
        import( /* webpackChunkName: "tabBar" */ '@/components/error-page/403'),
    name: '403',
    meta: {
        keepAlive: true,
        isAuth: false,
        depth: 0
    }
}, {
    path: '/500',
    component: () =>
        import( /* webpackChunkName: "tabBar" */ '@/components/error-page/500'),
    name: '500',
    meta: {
        keepAlive: true,
        isAuth: false,
        depth: 0
    }
}, {
    path: '/',
    name: '首页',
    redirect: '/home'
}, {
    path: '*',
    redirect: '/404'
}]
