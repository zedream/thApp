<template>
<div class="container">
  <div class="head">
    这是一个首页header
    <search></search>
  </div>
  <div class="content">
    <scroll>
      <van-skeleton title avatar :row="3" :loading="loading">
        <div class="slot-box">
          <div class="wrapping">
            <div class="info">
              <img class="ava" src="http://th.vaiwan.com/files/1592554916276.jpeg">
              <div class="nick-time">
                <div class="nickname">thao</div>
                <div class="time">12:45</div>
              </div>
            </div>
            <div class="text">
              股份或者发
              广东发货今天又
              回复下功夫
              规范
            </div>
            <div class="images">
              <sudoku :images="images"></sudoku>
            </div>
          </div>
        </div>
        <div class="slot-box">
          <div class="wrapping">
            <div class="info">
              <img class="ava" src="http://th.vaiwan.com/files/1592554916276.jpeg">
              <div class="nick-time">
                <div class="nickname">梵蒂冈</div>
                <div class="time">17:34</div>
              </div>
            </div>
            <div class="text">
            </div>
            <div class="images">
              <sudoku :images="images"></sudoku>
            </div>
          </div>
        </div>
        <div class="slot-box">
          <div class="wrapping">
            <div class="info">
              <img class="ava" src="http://th.vaiwan.com/files/1592554916276.jpeg">
              <div class="nick-time">
                <div class="nickname">清热</div>
                <div class="time">02:15</div>
              </div>
            </div>
            <div class="text">
              法式蛋糕
              给对方韩国规范化个
            </div>
            <div class="images">
              <sudoku :images="images"></sudoku>
            </div>
          </div>
        </div>
        <div class="slot-box">
          <div class="wrapping">
            <div class="info">
              <img class="ava" src="http://th.vaiwan.com/files/1592554916276.jpeg">
              <div class="nick-time">
                <div class="nickname">刚刚放假太阳</div>
                <div class="time">23:03</div>
              </div>
            </div>
            <div class="text">
              广东省广泛的个梵蒂冈
              刚发的刚发的
              大锅饭
            </div>
            <div class="images">
              <sudoku :images="images"></sudoku>
            </div>
          </div>
        </div>
      </van-skeleton>
      <van-skeleton title avatar :row="3" :loading="loading"></van-skeleton>
      <van-skeleton title avatar :row="3" :loading="loading"></van-skeleton>
      <van-skeleton title avatar :row="3" :loading="loading"></van-skeleton>
      <van-skeleton title avatar :row="3" :loading="loading"></van-skeleton>
      <van-skeleton title avatar :row="3" :loading="loading"></van-skeleton>
    </scroll>
  </div>
</div>
</template>

<script>
import search from '@/components/search/search-box'
import scroll from '@/components/scroll/scroll-box'
import sudoku from '@/components/sudoku/index'
export default {
  components: { search, scroll, sudoku },
  data() {
    return {
      pullRefresh: false,
      loading: true,
      images: ['http://th.vaiwan.com/files/1592554916276.jpeg',
        'http://th.vaiwan.com/files/img-14a109983e7523905437a4e50972ee56.jpg',
        'http://th.vaiwan.com/files/img-df1a35f0e2c6f5a57fbac81eace39fa4.jpg',
        'http://th.vaiwan.com/files/love.png',
        'http://th.vaiwan.com/files/login_bg.jpg',
        'http://th.vaiwan.com/files/img-df1a35f0e2c6f5a57fbac81eace39fa4.jpg',
        'http://th.vaiwan.com/files/img-df1a35f0e2c6f5a57fbac81eace39fa4.jpg']
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    },3000)
  },
  methods: {
    refresh (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  .head {
    height: 40px;
    background: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 12px;
    justify-content: space-between;
  }
  .content {
    height: calc(100vh - 90px);
    .van-skeleton {
      padding: 8px 16px;
    }
    .slot-box {
      padding: 8px 16px;
      background: #ffffff;
      .wrapping {
        .info {
          height: 40px;
          display: flex;
          align-items: center;
          .ava {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 16px;
          }
          .nick-time {
            flex: 1;
            .nickname {
              height: 28px;
              font-size: 15px;
              color: #333333;
            }
            .time {
              height: 12px;
              font-size: 12px;
              color: #969799;
            }
          }
        }
        .text {
          margin-top: 8px;
        }
        .images {
          margin-top: 8px;
        }
      }
    }
  }
}
</style>
