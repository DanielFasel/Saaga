<template>
  <transition name="homepagemenu">
    <div id="menu" v-show="menuHide">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      menuHide: true,
      scrollHeight: 0,
      delayHeight: 0

    }
  },
  methods: {

    handleScroll: function(event) {
      var topScroll=window.scrollY


      if (this.scrollHeight <= topScroll && this.scrollHeight > 70) {
        this.menuHide = false
        this.delayHeight = topScroll
      } else if (this.scrollHeight > topScroll) {
        if (this.delayHeight == 0) {
          this.delayHeight = topScroll
        }
        var travDist = (this.delayHeight - topScroll)
        if (travDist > 30) {
          this.menuHide = true
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
  
  z-index: 1;
  width: 100%;
    padding-right: calc(100vw - 100%);
}

/* Transition effects */

.homepagemenu-enter{
  transform: translateY(-100px);
}

.homepagemenu-enter-active,
.homepagemenu-leave-active {
	transition: all 0.4s ease;
}


.homepagemenu-leave-to{
	transform: translateY(-100px);
}
</style>
