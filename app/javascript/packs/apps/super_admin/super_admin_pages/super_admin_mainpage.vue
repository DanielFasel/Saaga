<template>

  <!--"page_container" is needed because vuejs can only have one outer element and it's also used to scroll to the top-->
  <div id="page_container">

    <!-- Content of the pages when changing route -->
    <router-view id="router_content" :style="modalMenuPadding"></router-view>


    <super-admin-menu></super-admin-menu>
    <super-admin-drawer></super-admin-drawer>


    <!-- Dark Background for router content, all component trigering the background need to be listed here -->
    <transition name="mask">
      <div id="router_mask" v-show="showMenuDrawer || showSettingsModal || showHelpModal" ></div>
    </transition>
  </div>

</template>



<script>

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
import SuperAdminSettings from "./super_admin_helpers/super_admin_settings/super_admin_settings.vue"
import SuperAdminHelp from "./super_admin_helpers/super_admin_help/super_admin_help.vue"

export default {

  components: {
    "super-admin-settings": SuperAdminSettings,
    "super-admin-help": SuperAdminHelp
  },

  methods:{
    ...mapActions({
      languages: 'languages'
    }),
    ...mapActions('layout/generalLayout',{
      overflowPaddingAction: 'overflowPadding',
      overflowPaddingLiveAction: 'overflowPaddingLive'
    })
  },

  computed:{
    ...mapGetters('layout/modalDrawer',[
      'showMenuDrawer',
      'showSettingsModal',
      'showHelpModal'
    ]),
    ...mapGetters('layout/generalLayout',[
      'overflowPadding',
      'overflowPaddingLive'
    ]),

  // function that adds padding to compensate for the scroll bar disappearing when modals are shown. It avoids the page to "jump".
  modalMenuPadding: function(){
    if (this.showSettingsModal || this.showHelpModal){
      this.overflowPaddingLiveAction(this.overflowPadding)
      }
    else{
      this.overflowPaddingLiveAction(0)
    }
    return{ paddingRight : this.overflowPaddingLive + 'px'}
  }
},

created: function(){
    this.languages()
    // calculates the width of the scroll bar of any browser
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild (inner);

    document.body.appendChild (outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild (outer);
    // sends the width to vuex
    this.overflowPaddingAction(w1-w2)
}
}

</script>



<style>

 #page_container{
   background: rgb(51, 41, 135);
   display: flex;
   flex-direction: column;
  }

  #router_content{
    display: flex;
    background: white;
    margin-top: 70px;
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
