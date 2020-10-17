<template>
  <div class="container">
    <van-cell title="头像" is-link center @click="$refs.file.click()">
      <input class="file_input" type="file" @change="fileChange" ref="file">
      <template #right-icon>
        <van-image
          width="60px"
          height="60px"
          fit="contain"
          :src="userInfo.avatar || require('@/static/img/default_ava.png')" />
        <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
      </template>
    </van-cell>
    <van-cell title="昵称" is-link :value="userInfo.nickname" to="updateNickName" />
    <van-cell title="账号" is-link :value="userInfo.account" to="test" />
    <van-cell title="手机" is-link :value="userInfo.phone" to="updatePhone" />
    <van-cell title="更多" is-link to="/more" />
    <van-cell class="mg-top-8" title="我的地址" is-link value="内容" to="updateAddress" />
	</div>
</template>

<script>
export default {
	data () {
		return {
		  domain: 'http://th.vaiwan.com/thapp-files/',
      fd: new FormData()
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
    fileChange() {
      for (let key in this.$refs.file.files) {
        this.fd.append('files', this.$refs.file.files[key])
      }
      this.updateAva()
      this.$refs.file.value = ''
      this.fd = new FormData()
    },
    updateAva() {
      this.$store.dispatch('upload', this.fd).then((res) => {
        console.log(res)
        this.userInfo.avatar = res.data[0].url
        this.$store.dispatch('updateUserInfo', {
          ...this.userInfo,
          avatar: this.userInfo.avatar.split(this.domain)[1]
        })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
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
  .container {
    .file_input {
      display: none;
    }
  }
</style>
