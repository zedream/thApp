<template>
<div class="container">
  <input type="file" accept="image/*" ref="file" @change="fileChange">
  <img :src="base64">
  <canvas class="img" id="canvas"></canvas>
</div>
</template>

<script>
const THImages = require('@/util/images')
export default {
  data () {
    return {
      thImages: '',
      base64: '',
      binaryString: '',
      dataURL: ''
    }
  },
  created () {

  },
  mounted () {
    const w = document.querySelector('.container').clientWidth
    const h = document.querySelector('.container').clientHeight
    console.log(w, h)
    this.thImages = new THImages(w, h, 560, 560)
  },
  methods: {
    fileChange () {
      console.log(this.$refs.file.files[0])
      let that = this
      let file = this.$refs.file.files[0]
      let reader = new FileReader()
      let container = document.querySelector('.container')
      // reader.readAsBinaryString(file)
      // reader.onload = function () {
      //   that.binaryString = this.result
      // }
      console.log(container.contains(document.querySelector('.container .oriImg')))
      container.contains(document.querySelector('.container .oriImg')) && container.removeChild(document.querySelector('.container .oriImg'))
      reader.readAsDataURL(file)
      reader.onload = function () {
        that.dataURL = this.result
        let imgDom = document.createElement('img')
        imgDom.setAttribute('src', that.dataURL)
        imgDom.classList = 'oriImg'
        imgDom.style.maxWidth = '100%'
        container.append(imgDom)
        that.canvas()
      }
    },
    canvas () {
      let canvas = document.querySelector('#canvas')
      // let context = canvas.getContext('2d')
      // console.log(thImages.compression(canvas, this.dataURL))
      this.thImages.compression(canvas, this.dataURL).then(res => {
        this.base64 = res
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
