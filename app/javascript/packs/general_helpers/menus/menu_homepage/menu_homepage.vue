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
    // function that hides the menu on scroll
    handleScroll: function(event) {
      // setting actual scrollposition
      var topScroll=window.scrollY

      // If user scrolls down after 70, hides menu
      if (this.scrollHeight <= topScroll && this.scrollHeight > 70) {
        this.menuHide = false
        this.delayHeight = topScroll
      }
      // shows menu if user scrolls up for more than 30
      else if (this.scrollHeight > topScroll) {
        var travDist = (this.delayHeight - topScroll)
        if (travDist > 30) {
          this.menuHide = true
          this.delayHeight = 0
        }
      }
      // sets previous scrollposition
      this.scrollHeight = topScroll
    }
  },

  // creation and destruction of event listener to know to scroll position
  created: function() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}

</script>

<style scoped>

/* Menu Styling */
#menu {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
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
