<template>

  <transition name="homepagemenu">
    <header id="menu" v-show="menuHide">

      <slot></slot>

      <!-- Dark Background for the HomepageMenu, all component trigering the background need to be listed here -->
      <!-- <transition name="mask">
        <div id="homepage_menu_mask" v-show="showMenuDrawer" ></div>
      </transition> -->

    </header>
  </transition>

</template>


<script>

import {mapGetters} from 'vuex'

export default {

  data() {
    return {
      menuHide: true,
      scrollHeight: 0,
      delayHeight: 0
    }
  },

  computed: {
    ...mapGetters('layout/modalDrawer',[
      'showMenuSide',
      'showMenuDrawer'
    ])
  },

  methods: {
    // function that hides the menu on scroll
    handleScroll: function(event) {
      // Renders the menu fixed when the screen is really big
      if(window.innerWidth>1500 && window.innerHeight>500){
        this.menuShow = true
      }
      // fixed menu if drop down menu is activated (needs to be done on main menu and sligthly rethought after menuside name and concept is set)
      else if(this.showMenuSide) {
        this.menuShow = true
      }
      // Handles smalles screens
      else{
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
  z-index: 4;
  width: 100%;
  display: flex;
  flex-direction: row;
}

#homepage_menu_mask{
  position: fixed;
  z-index: 2;
  background-color: rgba(0, 0, 0, .5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Animation for the hide/show effect */
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

/*Animation for the "main_homepage_mask" */
.mask-enter-active, .mask-leave-active {
transition: opacity .5s
}
.mask-enter, .mask-leave-to {
opacity: 0
}
</style>
