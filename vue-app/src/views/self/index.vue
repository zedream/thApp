<template>
  <div class="container">
    <div class="userinfo_box" @click="toInfo">
      <van-image
        width="80px"
        height="80px"
        fit="contain"
        :src="userInfo.avatar" />
      <div class="userinfo">
        <div class="nickname" v-text="userInfo.nickname"></div>
        <div class="account" v-text="userInfo.account"></div>
      </div>
    </div>
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
	},
  methods: {
    toInfo () {
      this.$router.push({
        path: '/userInfo'
      })
    }
  }
}
</script>

<style scoped lang="scss">
	@import "../../styles/common.scss";
  .container {
    .userinfo_box {
      background: #FFFFFF;
      padding: 12px;
      display: flex;
      align-items: center;
      height: 110px;
      box-sizing: border-box;
      /deep/ .van-image {
        border-radius: 8px;
        img {
          border-radius: 8px;
        }
      }
      .userinfo {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-left: 18px;
        .nickname {
          font-size: 20px;
          font-weight: 500;
          color: #323233;
        }
        .account {
          font-size: 14px;
          color: #C8C9CC;
        }
      }
    }
  }
</style>
