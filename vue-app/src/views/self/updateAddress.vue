<template>
  <div class="container">
		<van-cell title="性别" is-link :value="userInfo.nick_name" to="/" />
		<van-cell title="个性签名" is-link :value="userInfo.account" />
	</div>
</template>

<script>

export default {
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
