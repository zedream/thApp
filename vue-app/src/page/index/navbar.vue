<template>
  <div>
		<div id="navbar">
			<div class="nav-left">
				<div v-if="!$route.meta.isTab" class="back" @click="back">
					<van-icon name="arrow-left" />
				</div>
			</div>
			<div class="nav-title" v-text="title"></div>
			<div class="nav-right">
				<div v-if="$route.meta.isSave"  class="save">
					<th-button @click.native="save" type="save" :disable="disable">保 存</th-button>
				</div>
			</div>
		</div>
		<keep-alive>
			<router-view v-if="!$route.meta.isTab" />
		</keep-alive>
		<!-- <router-view v-if="!$route.meta.isTab"/> -->
	</div>
</template>

<script>
import ThButton from '@/components/common/th-button'
export default {
	components: { ThButton },
  name: 'navbar',
  data () {
    return {
			
		}
  },
	props: {
		disable: {
			type: Boolean,
			default: false
		}
	},
  watch: {},
	computed: {
		title () {
			return this.$store.state.bar.title
		}
	},
  mounted() {},
  methods: {
		save (ee) {
			if (!this.disable) {
				console.log(ee)
			}
		},
		back () {
			window.history.go(-1)
		}
	}
}
</script>
<style lang="scss">
	#navbar {
		width: 100%;
		height: 40px;
		display: flex;
		align-items: center;
		color: #b371cb;
		background: #f7f7f7;
		border-bottom: 1px solid #e4e1e1;
		box-sizing: border-box;
		.nav-left {
			flex: 1;
			height: 100%;
			.back {
				height: 100%;
				font-size: 20px;
				display: flex;
				align-items: center;
				padding-left: 8px;
			}
		}
		.nav-title {
			height: 40px;
			line-height: 40px;
			text-align: center;
			width: 120px;
			font-size: 16px;
			font-weight: 700;
		}
		.nav-right {
			flex: 1;
			height: 100%;
			.save {
				justify-content: flex-end;
				height: 100%;
				display: flex;
				align-items: center;
				padding-right: 8px;
			}
		}
	}
</style>
