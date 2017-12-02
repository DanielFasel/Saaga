<template>


    <menu-drawer v-show="showMenuDrawer" @toggleDrawer='toggleMenuDrawer'>
      <ul id="mobile_navigation_links">


          <router-link @click.native="toggleMenuDrawer" tag="li" to='/what' exact>
          <a @click="toggleMenuDrawer">What is it ?</a>
          </router-link>


          <router-link @click.native="toggleMenuDrawer" tag="li" to='/as_student' exact>
            <a>As a Student</a>
          </router-link>

          <router-link @click.native="toggleMenuDrawer" tag="li" to='/as_teacher' exact>
            <a>As a Teacher</a>
          </router-link>

          <router-link @click.native="toggleMenuDrawer" tag="li" to='/as_school' exact>
            <a>As a School</a>
          </router-link>

      </ul>

      <ul id="mobile_utility_links">
        <li>
          <a href="/login">Login</a>
        </li>

        <li>
          <a href="/register">Register</a>
        </li>

        <li  @click="toggleMenuDrawer" >Languages</li>
      </ul>
    </menu-drawer>


</template>

<script>
import MenuDrawer from "../../../../general_helpers/menus/menu_drawer/menu_drawer.vue"
import MenuSideMobile from "../../../../general_helpers/menus/menu_side_mobile/menu_side_mobile.vue"

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {

  components: {
    "menu-drawer": MenuDrawer,
    "menu-side-mobile": MenuSideMobile
  },

  methods: {

    ...mapActions('layout/modalDrawer',{
        toggleMenuDrawer: 'toggleMenuDrawer'

      }),

    // hide the drawer when going from medium to big screen
    hideDrawerMenu: function() {
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

/*mobile size */


/*--------------------------*/




#mobile_navigation_links{
  margin-top: 4em;

}

#mobile_navigation_links li{
  margin-bottom: 0.2em;
  background-color: rgb(212, 209, 228);
}


#mobile_navigation_links li a{
  color:rgb(51, 41, 135);
  display: inline-block;
  width: 100%;
  padding: 1em;
}
#mobile_utility_links{
  margin-top: 0.5em;

}
#mobile_utility_links li{
  padding-bottom: 1em;
  padding-left: 1em;
  padding-top: 1em;
}

#mobile_utility_links li+li{
  border-top: 1px solid white

}







/*medium size */

@media only screen and (min-width: 650px) {


  #mobile_navigation_links {
    display: none;
  }

}


</style>
