<template>
<div>
  <div>
    <van-button plain @click="canvas">canvas</van-button>
  </div>
  <img class="img" src="http://th.vaiwan.com/files/mmexport1595585735313.jpg">
  <img class="img" :src="base64">
  <canvas class="img" id="canvas" width="500" height="500"></canvas>
</div>
</template>

<script>
const THImages = require('@/util/images')
let thImages = new THImages()
export default {
  data () {
    return {
      base64: ''
    }
  },
  created() {

  },
  methods: {
    canvas () {
      let canvas = document.querySelector('#canvas')
      let context = canvas.getContext('2d')
      console.log(thImages.compression(canvas, require('../../assets/logo.png')))
      this.base64 = thImages.compression(canvas, require('../../assets/logo.png'))
    }
  }
}
</script>

<style scoped lang="scss">
.img {
  width: 500px;
  height: 500px;
}
</style>
