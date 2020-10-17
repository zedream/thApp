<template>
  <div id="layout">
    <div class="statusbar" :style="{height: `${sysStatusbar.height}px`, background: $route.meta.statusbarBackground}"></div>
		<nav-bar v-if="!$route.meta.isTab"></nav-bar>
		<div id="body">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view />
      </keep-alive>
      <router-view v-else />
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
      statusbarHeight: 0
    }
  },
  computed: {
	  ...mapState({
      sysStatusbar: state => state.bar.sysStatusbar
    })
  },
  watch: {},
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
	}
}
</style>
