<template>
  <div class="container">
    <van-pull-refresh
      v-model="pullRefresh"
      success-text="刷新成功"
      @refresh="refresh">
      <van-swipe-cell v-for="(item, index) in data" :key="index">
        <div class="msg-wrap" @click="toChat">
          <div class="ava-box">
            <img :src="item.avatar">
          </div>
          <div class="content-box">
            <div class="content-top">
              <div class="name" v-text="item.name"></div>
              <div class="time" v-text="item.time"></div>
            </div>
            <div class="content-bottom">
              <div class="message" v-text="item.message"></div>
              <div v-if="item.count > 0" class="count" v-text="item.count"></div>
            </div>
          </div>
        </div>
        <template #right>
          <van-button square text="删除" type="danger" @click.native="dele" class="delete-button" />
        </template>
      </van-swipe-cell>
    </van-pull-refresh>
	</div>
</template>

<script>
export default {
  name: 'message',
	data () {
		return {
      pullRefresh: false,
			data: [{
				name: '罗丹晨',
				avatar: require('../../../public/favicon.png'),
				message: '你好呀~',
				time: '下午2:17',
				count: '1'
			}]
		}
	},
  watch: {
    pullRefresh (newVal) {
      if (newVal) {
        console.log('watch......刷新列表...',newVal)
      }
      setTimeout(() => {
        this.pullRefresh = false
      }, 2000)
    }
  },
  methods: {
		toChat () {
			this.$router.push({
				path: '/chat',
				query: {}
			})
		},
		dele (e) {},
    refresh (e) {
		  console.log(e)
    }
	}
}
</script>

<style scoped lang="scss">
	@import "../../styles/common.scss";
	.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    .van-pull-refresh {
      flex: 1;
    }
		.msg-wrap {
			background: #ffffff;
			height: 49px;
			padding: 8px 16px;
			width: calc(100% - 32px);
			display: flex;
			border-bottom: 1px solid #e6e6e6;
			.ava-box {
				width: 45px;
				height: 45px;
				padding: 2px 0;
				margin-right: 12px;
				img {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
			.content-box {
				flex: 1;
				display: flex;
				flex-direction: column;
				overflow: hidden;
				.content-top {
					display: flex;
					align-items: center;
					flex: 1;
					justify-content: space-between;
					.name {
						font-size: 16px;
						color: #333333;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.time {
						font-size: 13px;
						color: #999999;
					}
				}
				.content-bottom {
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.message {
						font-size: 13px;
						color: #999999;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.count {
						font-size: 12px;
						color: #ffffff;
						background: red;
						text-align: center;
						padding: 0 5px;
						line-height: 18px;
						height: 18px;
						min-width: 8px;
						border-radius: 9px;
						margin-left: 24px;
					}
				}
			}
		}
	}
</style>
