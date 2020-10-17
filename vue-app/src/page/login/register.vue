<template>
  <div class="register-container">
    <div class="register-box">
      <input class="register-input" type="text" placeholder="account" v-model="account" />
      <input class="register-input" type="password" placeholder="password" v-model="password" />
      <input class="register-input" type="password" placeholder="confirm password" v-model="passwordC" />
      <button class="register-button" @click="register">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data () {
    return {
      account: '',
      password: '',
      passwordC: ''
    }
  },
  watch: {},
  created () {
    console.log(this.$route.meta.isTab)
  },
  methods: {
    register () {
      if (!this.account) {
        this.$toast('请输入账号')
      } else if (!this.password) {
        this.$toast('请输入密码')
      } else if (this.password !== this.passwordC) {
        this.$toast('两次密码不一致')
      } else {
        this.$store.dispatch('register', {
          account: this.account,
          password: this.password
        }).then(() => {
          this.$toast.success('注册成功')
          this.$router.push({
            path: '/login'
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
.register-container {
  background: #ffffff;
  height: 100%;
  .register-box {
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
    .register-input {
      border: none;
      padding: 6px 2px;
      border-bottom: 1px solid #63b0ff;
      background: none;
      color: #63b0ff;
      font-size: 16px;
      margin-top: 12px;
      width: 100%;
      &::placeholder {
        color: #d8d8d8;
      }
    }
    .register-button {
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
