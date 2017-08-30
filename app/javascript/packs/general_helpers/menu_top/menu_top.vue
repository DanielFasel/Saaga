<template>
<div id="menu" v-bind:class="{hide: menuHide}">
  <slot></slot>
</div>
</template>

<script>
export default {
  data() {
    return {
      menuHide: false,
      scrollHeight: 0,
      delayHeight: 0

    }
  },
  methods: {
    handleScroll: function(event) {
      if (this.scrollHeight <= event.pageY && this.scrollHeight > 100) {
        this.menuHide = true
        this.delayHeight = event.pageY
      } else if (this.scrollHeight > event.pageY) {
        if (this.delayHeight == 0) {
          this.delayHeight = event.pageY
        }
        var travDist = (this.delayHeight - event.pageY)

        if (travDist > 30) {
          this.menuHide = false

          this.delayHeight = 0

        }
      }

      this.scrollHeight = event.pageY
    }


  },

  created: function() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
#menu {
  position: fixed;
  top: 0;
  transition: margin-top 0.2s ease-in-out;
  z-index: 1;
  width: 100vw;
}

.hide {
  margin-top: -100px;
}
</style>
