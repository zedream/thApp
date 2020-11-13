<template>
  <div id="tabbar">
		<div :class="{'active': item.path === active, 'midTab' : index === 2, 'tab': index !== 2}" v-for="(item, index) in tabbar" @click="pathTo(item.path)" :key="index">
<!--			<img v-if="type === 'img'" :src="active === item.path ? item.activeIconPath : item.iconPath" :alt="item.name">-->
      <i :class="active === item.path ? item.activeIcon : item.icon"></i>
			<div v-text="item.name"></div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  data () {
    return {
      type: 'iconfont',
			tabbar: [{
        name: '首页',
        path: '/home',
        // iconPath: require('@/assets/tabbar/message.svg'),
        // activeIconPath: require('@/assets/tabbar/message_act.svg'),
        icon: 'iconfont home',
        activeIcon: 'iconfont home-act'
      }, {
				name: '消息',
				path: '/message',
        icon: 'iconfont msg',
        activeIcon: 'iconfont msg-act'
			}, {
				// name: '朋友',
				path: '/universe',
        // icon: 'iconfont msg',
        // activeIcon: 'iconfont msg-act'
			}, {
				name: '橱窗',
				path: '/shopWindow',
        icon: 'iconfont mall',
        activeIcon: 'iconfont mall-act'
			}, {
				name: '我',
				path: '/self',
        icon: 'iconfont my',
        activeIcon: 'iconfont my-act'
			}]
		}
  },
	computed: {
		active: {
			get () {
				return this.$store.state.bar.tabBar
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
				this.$router.replace({
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
	// #84a8de
  $width: calc(100vw / 5);
	#tabbar {
		position: fixed;
		bottom: 0;
		height: 50px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		color: #8a8a8a;
		.tab {
			flex: 1;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
      box-sizing: border-box;
      background: #F2F3F5;
			img {
				width: 24px;
				height: 24px;
				margin-top: 4px;
			}
			div {
				height: 18px;
				line-height: 18px;
			}
      &:nth-child(2) {
        border-radius: 0 20px 0 0;
      }

      &:nth-child(4) {
        border-radius: 20px 0 0 0;
      }
      &:active {
        background: #EBEDF0;
      }
		}
    .midTab {
      position: relative;
      width: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #F2F3F5;
      margin-top: 10px;
      height: 40px;
      &:after {
        content: '\e8c7';
        position: absolute;
        top: -25px;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: #F7F8FA;
        font-family: 'iconfont';
        color: #63b0ff;
        font-size: 40px;
        line-height: 48px;
        text-align: center;
      }
    }
		.active {
			color: #63b0ff;
		}
	}
</style>
