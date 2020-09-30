<template>
  <div id="layout">
		<nav-bar v-if="!$route.meta.isTab"></nav-bar>
		<div id="body">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"/>
		</div>
		<tab-bar v-if="$route.meta.isTab"></tab-bar>
	</div>
</template>

<script>
import tabBar from './tabbar.vue'
import navBar from './navbar.vue'
export default {
	components: { navBar, tabBar },
  name: 'layout',
  data() {
    return {
    }
  },
  watch: {},
  created() {},
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
  overflow: hidden;
	#body {
    flex: 1;
		background: #F7F8FA;
	}
}
</style>
