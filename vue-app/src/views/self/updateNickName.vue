<template>
  <div class="container">
		<div>
			<input type="text" v-model="userInfo.nick_name" />
		</div>
	</div>
</template>

<script>

export default {
  name: 'self',
	data () {
		return {
			
		}
	},
	watch: {
		userInfo: {
			handler () {
				this.$store.commit('SET_DISABLE', false)
			},
			// immediate: true,  //刷新加载 立马触发一次handler
			deep: true
		}
	},
	computed: {
		userInfo: {
			get () {
				return this.$store.state.user.userInfo
			},
			set () {}
		}
	}
}
</script>

<style scoped lang="scss">
	@import "../../styles/common.scss";
</style>
