<template>
<div v-show="show" class="th-mask" :class="fade">
  <slot></slot>
</div>
</template>

<script>
import statusbar from '@/util/native'
export default {
  data () {
    return {
      fade: ''
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show (newVal) {
      let statusbarStyle = plus.navigator.getStatusBarStyle()
      if (newVal) {
        this.fade = 'fade-in'
        statusbar.setStatusBar('light')
      } else {
        this.fade = 'fade-out fade-out-active'
        statusbar.setStatusBar(statusbarStyle)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.th-mask {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .6);
}
.fade-in, .fade-out {
  transition: opacity .5s;
}
.fade-out-active {
  opacity: 0;
}
</style>
