<template>
  <div id="tabbar">
		<div class="tab" :class="{'active': item.path === active}" v-for="(item, index) in tabbar" @click="pathTo(item.path)" :key="index">
			<img :src="active === item.path ? item.activeIconPath : item.iconPath" :alt="item.name">
			<div v-text="item.name"></div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  data () {
    return {
			tabbar: [{
				name: '消息',
				path: '/message',
				iconPath: require('@/assets/tabbar/message.svg'),
				activeIconPath: require('@/assets/tabbar/message_act.svg')
			}, {
				name: '朋友',
				path: '/friend',
				iconPath: require('@/assets/tabbar/friend.svg'),
				activeIconPath: require('@/assets/tabbar/friend_act.svg')
			}, {
				name: '圈子',
				path: '/circles',
				iconPath: require('@/assets/tabbar/circle.svg'),
				activeIconPath: require('@/assets/tabbar/circle_act.svg')
			}, {
				name: '我',
				path: '/self',
				iconPath: require('@/assets/tabbar/self.svg'),
				activeIconPath: require('@/assets/tabbar/self_act.svg')
			}],
			a: ''
		}
  },
	computed: {
		active: {
			get () {
				return this.$store.state.bar.tabbar
			},
			set () {
				
			}
		}
	},
  watch: {},
  created () {},
  methods: {
		pathTo (path) {
			if (path !== this.active) {
				this.active = path
				this.$router.push({
					path: path,
					query: {
						
					}
				})
			}
		}
	}
}
</script>
<style lang="scss">
	// b371cb
	// 8a8a8a
	#tabbar {
		position: fixed;
		bottom: 0;
		height: 50px;
		width: 100%;
		background: #f7f7f7;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		color: #8a8a8a;
		border-top: 1px solid #e4e1e1;
		box-sizing: border-box;
		.tab {
			flex: 1;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			img {
				width: 24px;
				height: 24px;
				margin-top: 4px;
			}
			div {
				height: 18px;
				line-height: 18px;
			}
		}
		.active {
			color: #b371cb;
		}
	}
</style>
