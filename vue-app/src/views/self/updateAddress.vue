<template>
  <div class="container">
    <van-button type="primary" text="显示遮罩层" @click="show = true" />
    <th-mask :show="show" @click.native="show = false">
      <div>3</div>
    </th-mask>
	</div>
</template>

<script>
import thMask from '@/components/mask/index'
export default {
  components: { thMask },
	data () {
		return {
      show: false
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
