<template>
  <div id="layout">
    <div class="statusbar" :style="{height: `${sysStatusbar.height}px`, background: $route.meta.statusbarBackground}"></div>
    <nav-bar v-if="!$route.meta.isTab"></nav-bar>
		<div id="body">
      <transition :name="transitionName">
        <keep-alive v-if="$route.meta.keepAlive">
          <router-view />
        </keep-alive>
        <router-view v-else />
      </transition>
		</div>
		<tab-bar v-if="$route.meta.isTab"></tab-bar>
	</div>
</template>

<script>
import tabBar from './tabbar.vue'
import navBar from './navbar.vue'
import { mapState } from 'vuex'
export default {
	components: { navBar, tabBar },
  name: 'layout',
  data() {
    return {
      statusbarHeight: 0,
      transitionName: 'slide-left'
    }
  },
  computed: {
	  ...mapState({
      sysStatusbar: state => state.bar.sysStatusbar
    })
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.meta.depth
      const fromDepth = from.meta.depth
      console.log(to.path, from.path, toDepth, fromDepth)
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  created() {},
  mounted() {
	  console.log(this.sysStatusbar.height)
  },
  methods: {

  }
}
</script>
<style lang="scss">
#layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
	#body {
    flex: 1;
		background: #F7F8FA;
    display: flex;
    overflow: hidden;
    position: relative;
    .container {
      width: 100%;
      position: absolute;
      height: 100%;
    }
	}
}
.slide-left-enter {
  transform: translate(100%, 0);
}
.slide-left-enter-active{
  transition: all .3s linear;
}
.slide-left-leave-to{
  transform: translate(-100%, 0);
}
.slide-left-leave-active {
  transition: all .3s linear;
}
.slide-right-enter {
  transform: translate(-100%, 0);
}
.slide-right-enter-active{
  transition: all .3s linear;
}
.slide-right-leave-to{
  transform: translate(100%, 0);
}
.slide-right-leave-active {
  transition: all .3s linear;
}
</style>
