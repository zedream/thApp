<template>
  <div class="login-container" :style="{backgroundImage: `url(${require('@/static/img/login/login_bg.png')})`}">
    <div class="logo">THao</div>
		<div class="login-box">
      <input class="login-input" type="text" placeholder="account" v-model="account" />
      <input class="login-input" type="password" placeholder="password" v-model="password" />
      <div class="login-tip">
        <div @click="forget">忘记密码 ？</div>
        <div @click="noAccount">没有账号 ？</div>
      </div>
      <button class="login-button" @click="login">Sign In</button>
    </div>
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
  watch: {
    account () {
      this.password = ''
    }
  },
  created () {},
  methods: {
		login () {
			if (!this.account) {
			  this.$toast('请输入账号')
      } else if (!this.password) {
        this.$toast('请输入密码')
      } else {
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
          this.$router.push({
            path: '/'
          })
        }).catch(err => {
          console.log(err)
        })
      }
		},
    forget () {
		  this.$router.push({
        path: '/forget'
      })
    },
    noAccount () {
      this.$router.push({
        path: '/register'
      })
    }
	}
}
</script>
<style scope lang="scss">
.login-container {
  background-repeat: no-repeat;
  height: 100vh;
  background-size: 100% 100%;
  padding: 80px 0;
  box-sizing: border-box;
  .logo {
    color: white;
    font-size: 40px;
    font-weight: 900;
    font-family: fantasy;
    letter-spacing: 6px;
    text-align: center;
    margin-top: 40px;
  }
  .login-box {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 200px;
    margin-top: -100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 72px;
    .login-input {
      border: none;
      padding: 6px 2px;
      border-bottom: 1px solid #63b0ff;
      background: none;
      color: white;
      font-size: 16px;
      margin-top: 12px;
      width: 100%;
      &::placeholder {
        color: #d8d8d8;
      }
    }
    .login-tip {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      color: #dadada;
      width: 100%;
      margin-top: 8px;
      font-family: fangsong;
      &>div {
        padding: 4px 8px;
      }
    }
    .login-button {
      width: 100%;
      height: 42px;
      border: none;
      border-radius: 42px;
      background: #63b0ffbf;
      box-shadow: 0 1px 2px #75b9ff;
      color: white;
      margin-top: 32px;
      font-size: 18px;
      &:active {
        background: #63b0ffeb;
      }
    }
  }
}
</style>
