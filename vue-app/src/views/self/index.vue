<template>
  <div class="container">
    <div>
      <div class="userinfo-box" @click="toInfo">
        <van-image
          width="72px"
          height="72px"
          fit="contain"
          :src="userInfo.avatar || require('@/static/img/default_ava.png')" />
        <div class="userinfo">
          <div class="nickname" v-text="userInfo.nickname"></div>
          <div class="account" v-text="userInfo.account"></div>
        </div>
      </div>
    </div>
    <van-cell style="margin-top: 40px" is-link to="/setting">
      <template #title>
        <i class="iconfont setting"></i>
        <span class="custom-title">设置</span>
      </template>
    </van-cell>
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
  created() {
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
    .userinfo-box {
      background: linear-gradient(#63b0ff, #7abbfd);
      padding: 6px 12px 0 12px;
      display: flex;
      align-items: flex-end;
      height: 84px;
      box-sizing: border-box;
      position: relative;
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
          color: #ffffff;
        }
        .account {
          font-size: 14px;
          color: #f5f5f5;
        }
      }
      &:after {
        display: inline-block;
        position: absolute;
        width: 100%;
        height: 30px;
        content: '';
        top: 84px;
        left: 0;
        border-radius: 0 0 50% 50%;
        background: linear-gradient(#7abbfd, #90c7ff);
      }
    }
    .setting {
      margin-right: 12px;
    }
  }
</style>
