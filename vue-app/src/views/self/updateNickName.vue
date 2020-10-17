<template>
  <div class="container">
		<div class="form-item" :class="formItemClass">
			<input class="form-input" type="text" @focus="formItemClass = 'form-item-focus'" @blur="formItemClass = ''" v-model="nickName" />
		</div>
    <div class="btn-box">
      <van-button @click="save" class="save-btn" size="small" round color="linear-gradient(to right, #9cc6f1, #63b0ff)">保 存</van-button>
    </div>
	</div>
</template>

<script>
export default {
  name: 'self',
	data () {
		return {
      formItemClass: '',
      nickName: ''
		}
	},
  created() {
    this.nickName = this.userInfo.nickname
  },
  watch: {},
	computed: {
		userInfo: {
			get () {
				return this.$store.state.user.userInfo
			},
			set () {}
		}
	},
  methods: {
    save () {
      this.$store.dispatch('updateUserInfo', {
        ...this.userInfo,
        nickname: this.nickName
      })
      .then(() => {
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="scss">
	@import "../../styles/common.scss";
  .btn-box {
    width: 100%;
    position: absolute;
    bottom: 36px;
    text-align: center;
    .save-btn {
      width: 240px;
      height: 36px;
    }
  }
  .form-item {
    width: 100%;
    padding: 8px 12px;
    box-sizing: border-box;
    position: relative;
    .form-input {
      border: none;
      width: 100%;
      font-size: 16px;
      background: #F7F8FA;
    }
    &:after {
      content: '';
      display: inline-block;
      width: calc(100% - 24px);
      bottom: 0;
      position: absolute;
      left: 12px;
      height: 1px;
      transform: scaleY(0.5);
      background: #DCDEE0;
    }
  }
  .form-item-focus {
    &:after {
      content: '';
      display: inline-block;
      width: calc(100% - 24px);
      bottom: 0;
      position: absolute;
      left: 12px;
      height: 1px;
      transform: scaleY(0.5);
      background: #63b0ff;
    }
  }
</style>
