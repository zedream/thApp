<template>
<div class="wrap">
  <div class="outside_box" v-for="(item, index) in images" :key="index">
    <div class="inside_box">
      <img :src="item" @click="preview(index)">
    </div>
  </div>
</div>
</template>

<script>
import { ImagePreview } from 'vant'
export default {
  data () {
    return {

    }
  },
  props: {
    images: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    preview (index) {
      ImagePreview({
        images: this.images,
        startPosition: index
      })
    }
  }
}
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .outside_box {
    width: calc((100% - 24px) / 3);
    overflow: hidden;
    border-radius: 4px;
    &:nth-child(n + 4) {
      margin-top: 8px;
    }
    .inside_box {
      width: 100%;
      padding-bottom: 100%;
      height: 0;
      background: #323233;
      position: relative;
      img {
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
