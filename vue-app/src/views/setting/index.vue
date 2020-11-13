<template>
<div class="container">
  <div class="row-center mg-top-8" @click="logout">注销登录</div>
  <div class="row-center mg-top-8" @click="quit">退出</div>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    logout () {
      this.$toast.loading({
        message: '注销中...',
        duration: 0,
        forbidClick: true,
        loadingType: 'spinner',
      })
      this.$store.dispatch('logout').then(() => {
        this.$toast.clear()
        this.$router.push({
          path: '/login'
        })
      }).catch(err => {
        console.log(err)
      })
    },
    quit () {
      plus.runtime.quit()
      plus.nativeUI.toast('bye world')
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/common";
</style>
