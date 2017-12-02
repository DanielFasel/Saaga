<template>
    <menu-drawer v-show="showMenuDrawer" @toggleDrawer='toggleMenuDrawer'>
      <ul id="mobile_navigation_links">
        <li @click="toggleMenuDrawer">
          <router-link class="navigation_tab" to='/homeworks' exact>Homeworks <i class="fa fa-link" aria-hidden="true"></i></router-link>
        </li>
        <li @click="toggleMenuDrawer">
          <router-link class="navigation_tab" to='/courses' exact >Courses <i class="fa fa-book" aria-hidden="true"></i></router-link>
        </li>
      </ul>

      <ul id="mobile_utility_links">
        <li>8</li>
        <li>Game</li>
        <li><button @click="settingsclicksmall">Settings</button></li>
        <li><button @click="helpclicksmall">Help</button</li>
        <li><button v-on:click="logout">Logout</button></li>
      </ul>
    </menu-drawer>
</template>



<script>

import MenuDrawer from "../../../../general_helpers/menus/menu_drawer/menu_drawer.vue"

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {

  components: {
    "menu-drawer": MenuDrawer
  },

  methods:{

    ...mapActions('layout/modalDrawer',{
        toggleMenuDrawer: 'toggleMenuDrawer',
        toggleSettingsModal: 'toggleSettingsModal',
        toggleHelpModal: 'toggleHelpModal'
      }),

    logout:function(){
      this.$http.delete('./logout').then(function(){
        window.location.href = "/login"
      })
    },

    // toggle for utility modals
    settingsclicksmall:function(){
      this.toggleMenuDrawer(),
      this.toggleSettingsModal()
    },

    helpclicksmall:function(){
      this.toggleMenuDrawer(),
      this.toggleHelpModal()
    },

    // hide the drawer when going from medium to big screen
    hideDrawerMenu: function(){
      if (this.showMenuDrawer && this.$mq.above(1000)) {
         this.toggleMenuDrawer()
          }
    }
  },
  computed: {

    ...mapGetters('layout/modalDrawer',[
        'showMenuDrawer'
      ])
  },

  //watcher that checks screen size to hide drawer
  watch: {
    '$mq.resize': 'hideDrawerMenu'
  }

}

</script>



<style scoped>


/* menu drawer styling */
.menu-drawer{
  display: flex;
  flex-direction: column;
}

#mobile_navigation_links{
  display: flex;
  flex-direction: column;
}
#mobile_utility_links{
  display: flex;
  flex-direction: column;
}


@media only screen and (min-width: 650px){

  /* Styling for medium configuration */
  #mobile_navigation_links{
  display: none;
  }
}

</style>
