const bar = {
	state: {
		title: '',
		tabbar: ''
	},
	mutations: {
		SET_TITLE: (state, value) => {
			state.title = value
		},
		SET_TABBAR: (state, value) => {
			state.tabbar = value
		}

	}
}

export default bar
