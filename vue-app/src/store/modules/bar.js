const bar = {
	/**
	 * @param { String } title navBar标题
	 * @param { Object } sysStatusbar 系统默认导航栏背景、字体颜色
	 */
	state: {
		title: '',
		tabBar: '',
		sysStatusbar: {
			color: window.plus ?  plus.navigator.getStatusBarStyle() : '',
			height: window.plus ? plus.navigator.getStatusBarHeight() : 0
		}
	},
	mutations: {
		SET_TITLE: (state, value) => {
			state.title = value
		},
		SET_TABBAR: (state, value) => {
			state.tabBar = value
		},
		INIT_STATUSBAR: (state) => {
			plus.navigator.setStatusBarStyle('dark')
			state.sysStatusbar = {
				color: plus.navigator.getStatusBarStyle(),
				height: plus.navigator.getStatusbarHeight()
			}
		}
	}
}

export default bar
