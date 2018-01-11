<template>

  <div id="page_container">

    <router-view id="router_content"></router-view>
    <homepage-menu-side></homepage-menu-side>
    <homepage-menu></homepage-menu>
    <homepage-drawer></homepage-drawer>
    <homepage-footer></homepage-footer>

    <!-- Dark Background for router content, all component trigering the background need to be listed here -->
    <transition name="mask">
      <div id="router_mask" v-show="showMenuDrawer || showMenuSide" ></div>
    </transition>

  </div>

</template>

<script>

import {mapGetters} from 'vuex'

export default {

  computed:{
    ...mapGetters('layout/modalDrawer',[
      'showMenuDrawer',
      'showMenuSide'
    ])
  }
}

</script>

<style scoped>

#page_container {
  display: flex;
  flex-direction: column;
}

#router_content{
  display: flex;
  flex-direction: column;
  background: white;
  padding-top: 70px;
  min-height: calc(100vh - 150px);
}

#router_mask{
  position: fixed;
  z-index: 2;
  background-color: rgba(0, 0, 0, .5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/*Animation for the "router_mask" */
.mask-enter-active, .mask-leave-active {
transition: opacity .5s
}
.mask-enter, .mask-leave-to {
opacity: 0
}

</style>
