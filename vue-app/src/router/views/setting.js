import Layout from '@/page/index'

export default [{
    path: '/setting',
    component: Layout,
    children: [{
        path: '/setting',
        name: '设置',
        meta: {
            isTab: false,
            statusbarBackground: '#63b0ff',
            statusbarStyle: 'light',
            depth: 2
        },
        component: () =>
            import( /* webpackChunkName: "views" */ '@/views/setting/index')
    }]
}]
