<template>
  <div>
		<input type="text" v-model="account" />
		<input type="password" v-model="password" />
		<button @click="login">登 录</button>
  </div>
</template>

<script>
export default {
  name: "login",
  data () {
    return {
			account: '1314520',
			password: '111111'
		}
  },
  watch: {},
  created () {},
  methods: {
		login () {
			this.$toast.loading({
				message: '登陆中...',
				duration: 0,
				forbidClick: true,
				loadingType: 'spinner',
			})
			this.$store.dispatch('loginByAccount', {
				account: this.account,
				password: this.password
			}).then(() => {
				this.$toast.clear()
				// this.$router.push(this.$route.query.redirect || '/')
				this.$router.push({
					path: '/'
				})
			}).catch(err => {
				console.log(err)
			})
		}
	}
}
</script>
<style scope lang="scss">

</style>
