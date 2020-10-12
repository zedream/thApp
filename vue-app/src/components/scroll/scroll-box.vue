<template>
<div class="wrap">
  <van-pull-refresh
    v-model="pullRefresh"
    success-text="刷新成功"
    @refresh="refresh"
    :disabled="refreshDisabled">
    <div class="scroll_box" ref="scrollBox" @scroll="scrollEvent">
      <slot></slot>
    </div>
  </van-pull-refresh>
  <i v-if="toTopShow" class="iconfont to-top to_top" @click="toTop"></i>
</div>
</template>

<script>
export default {
  data () {
    /**
     * @param { Number } toTopTime 回到顶部时间
     * @param { Boolean } toTopShow 是否展示回到顶部按钮
     * @param { Number } scrollTop 滚动高度
     * @param { Boolean } recordScroll 是否需要记录滚动高度
     * @param { Number } scrollBoxHeight 滚动盒子高度
     */
    return {
      toTopTime: 100,
      toTopShow: false,
      scrollTop: 0,
      recordScroll: false,
      scrollBoxHeight: 0,
      pullRefresh: false,
      refreshDisabled: false
    }
  },
  created() {
    this.recordScroll = true
  },
  mounted() {
    this.scrollBoxHeight = this.$refs.scrollBox.clientHeight
  },
  activated() {
    let step = this.scrollTop / this.toTopTime
    let toTopInterval = setInterval(() => {
      if (this.$refs.scrollBox.scrollTop < this.scrollTop) {
        this.$refs.scrollBox.scrollTop += step
      } else {
        clearInterval(toTopInterval)
        this.recordScroll = true
      }
    }, 1)
  },
  deactivated() {
    this.recordScroll = false
  },
  methods: {
    refresh (e) {
      console.log(e)
    },
    scrollEvent (e) {
      if (this.recordScroll) {
        this.scrollTop = e.target.scrollTop
      }
      if (e.target.scrollTop === 0) {
        this.refreshDisabled = false
      } else {
        this.refreshDisabled = true
      }
      if (e.target.scrollTop > this.scrollBoxHeight) {
        this.toTopShow = true
      } else {
        this.toTopShow = false
      }
    },
    toTop () {
      let step = this.$refs.scrollBox.scrollTop / this.toTopTime
      let toTopInterval = setInterval(() => {
        if (this.$refs.scrollBox.scrollTop > 0) {
          this.$refs.scrollBox.scrollTop -= step
        } else {
          clearInterval(toTopInterval)
        }
      }, 1)
    }
  }
}
</script>

<style scoped lang="scss">
.wrap {
  height: 100%;
  width: 100%;
  .van-pull-refresh {
    height: 100%;
    .scroll_box {
      height: 100%;
      overflow-y: auto;
    }
  }
}
/deep/ .to-top {
  font-size: 40px!important;
  color: #63b0ff;
  position: fixed;
  bottom: 66px;
  right: 12px;
  z-index: 20201009;
}
</style>
