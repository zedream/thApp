<template>
  <button class="th-button"
          :class="[`th-btn-${type}`, `${type}-${active}`, isDisable]"
          @touchstart="simuActive"
          @touchend="activeNone">
    <slot></slot>
  </button>
</template>

<script>
export default {
  data () {
    return {
      active: '',
			isDisable: this.disable ? 'disable' : ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'default' // add, del, save
    },
		disable: {
			type: Boolean,
			default: false
		}
  },
  methods: {
    simuActive () {
      if (!this.disable) {
				this.active = 'active'
			}
    },
    activeNone () {
      this.active = ''
    }
  }
}
</script>

<style lang="scss">
.th-button {
  display: inline-block;
	text-align: center;
	line-height: 22px;
	font-size: 12px;
	border-radius: 4px;
  color: #fff;
  background: #00a2f0;
  cursor: pointer;
	outline: none;
  padding: 2px 12px;
}
.th-btn-default {
  color: #ffffff;
  background: #e5e5e5;
  color: #6d6d6d;
  border: 1px solid #d2d2d2!important;
  box-sizing: border-box;
}
.default-active {
  background: #d0d0d0;
}
.th-btn-save {
  color: #ffffff;
	border: 1px solid #b371cb;
  background: #b371cb;
}
.save-active {
  background: #ae5dcc;
}
.th-btn-del {
  color: #ffffff;
  border: 1px solid #ff2b3f;
  background: #ff2b3f;
}
.del-active {
  background: #ff2c2c;
}
.th-btn-add {
  color: #ffffff;
  border: 1px solid #12c917;
  background: #12c917;
}
.add-active {
  background: #0bba10;
}
.disable {
	opacity: 0.5;
	cursor: not-allowed;
}
</style>
