<template>
  <div class="background" id="testelement">

    <div id="homepage_menu_background"></div>
    <router-view id="router_content"></router-view>
    <homepage-menu></homepage-menu>
    <homepage-menu-side></homepage-menu-side>
    <homepage-drawer></homepage-drawer>
    <homepage-footer></homepage-footer>

    <!-- Dark Background for modals and drawer all modals and other component trigering the background need to be listed here -->
    <transition name="mask">
      <div id="background_mask" v-show="showMenuDrawer" ></div>
    </transition>

  </div>
</template>

<script>

import {mapGetters} from 'vuex'


export default {


  computed:{
    ...mapGetters('layout/modalDrawer',[
      'showMenuDrawer',
    ])
  }
}
</script>

<style scoped>


#homepage_menu_background{
  height: 56px;
  background:rgb(255, 237, 135) ;
  filter: blur(5px);
}

#background_mask{
  position: fixed;
  z-index: 2;
  background-color: rgba(0, 0, 0, .5);
  top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.mask-enter-active, .mask-leave-active {
transition: opacity .5s
}
.mask-enter, .mask-leave-to {
opacity: 0
}

</style>
