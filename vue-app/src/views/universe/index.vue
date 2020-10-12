<template>
<div class="container">
  <div class="head"></div>
  <div class="content">
    <van-tabs v-model="active" swipeable>
      <van-tab title="1">
大赛科技公司
      </van-tab>
      <van-tab title="2">
鬼地方个地方官地方
      </van-tab>
      <van-tab title="3">
核对很规范
      </van-tab>
      <van-tab title="4">
和规范化股份
      </van-tab>
    </van-tabs>
  </div>
</div>
</template>

<script>
import scroll from '@/components/scroll/scroll-box'
export default {
  components: { scroll },
  data () {
    return {
      index: 0,
      active: 0
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.container {
  height: calc(100vh - 50px);
  .content {
    height: 100%;
    div>div {
      height: 190px;
      &:nth-child(2n) {
        background: #ff2c2c;
      }
      &:nth-child(2n + 1) {
        background: darkgoldenrod;
      }
    }
  }
}
</style>
