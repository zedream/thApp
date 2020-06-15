<template>
  <div class="container">
		<van-cell title="昵称" is-link :value="userInfo.nick_name" to="/updateNickName" />
		<van-cell title="账号" is-link :value="userInfo.account" to="updateAccount" />
		<van-cell title="手机" is-link :value="userInfo.phone" to="updatePhone" />
		<van-cell title="更多" is-link to="/more" />
		<van-cell class="mg-top-8" title="我的地址" is-link value="内容" to="updateAddress" />
	</div>
</template>

<script>

export default {
  name: 'self',
	data () {
		return {
			
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
