<template>
  <transition name="menumain">
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

  width: 100%;
  padding-right: calc(100vw - 100%);

}

/* Transition effects */

.menumain-enter{
  transform: translateY(-70px);
}

.menumain-enter-active,
.menumain-leave-active {
	transition: all 0.4s ease;
}


.menumain-leave-to{
	transform: translateY(-70px);
}
</style>
