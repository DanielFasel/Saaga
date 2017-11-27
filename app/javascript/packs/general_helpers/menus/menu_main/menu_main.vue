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
      var topScroll=window.scrollY


      if (this.scrollHeight <= topScroll && this.scrollHeight > 70) {
        this.menuHide = true
        this.delayHeight = topScroll
      } else if (this.scrollHeight > topScroll) {
        if (this.delayHeight == 0) {
          this.delayHeight = topScroll
        }
        var travDist = (this.delayHeight - topScroll)
        if (travDist > 30) {
          this.menuHide = false
          this.delayHeight = 0
        }
      }
      this.scrollHeight = topScroll
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
  width: 100%;
}

.hide {
  margin-top: -100px;
}
</style>
