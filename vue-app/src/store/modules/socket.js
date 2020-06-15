import io from 'socket.io-client'

const socket = {
	state: {
		socket: ''
	},
	mutations: {
		CONNECT: (state, value) => {
			state.socket = io(value)
		},
		SET_TABBAR: (state, value) => {
			state.tabbar = value
		}
	}
}

export default socket