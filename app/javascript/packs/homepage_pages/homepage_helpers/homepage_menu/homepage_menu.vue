<template>
<menu-top>
  <header>
    <div id="logo">
      <router-link to='/' exact>Saaga</router-link>
    </div>

    <div id="current_page">Current Page</div>

    <nav>
      <ul id="navigation_links">
        <li>
          <router-link to='/what' exact>What is it ?</router-link>
        </li>
        <li>
          <router-link to='/as_student' exact>As a Student</router-link>
        </li>
        <li>
          <router-link to='/as_teacher' exact>As a Teacher</router-link>
        </li>
        <li>
          <router-link to='/as_school' exact>As a School</router-link>
        </li>
      </ul>

      <ul id="utility_links">
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>Languages</li>
      </ul>
    </nav>

    <div class="center_div" id="mobile_center_div" @click="toggleMenuDrawer">
      <i class="menu_icon fa fa-bars"></i>
      <span id="menutext">Menu</span>
    </div>



    <menu-drawer v-show="showMenuDrawer" @toggleDrawer='toggleMenuDrawer'>
      <ul id="mobile_navigation_links">
        <li>
          <router-link to='/what' exact>What is it ?</router-link>
        </li>
        <li>
          <router-link to='/as_student' exact>As a Student</router-link>
        </li>
        <li>
          <router-link to='/as_teacher' exact>As a Teacher</router-link>
        </li>
        <li>
          <router-link to='/as_school' exact>As a School</router-link>
        </li>
      </ul>

      <ul id="mobile_utility_links">
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>Languages</li>
      </ul>
    </menu-drawer>

  </header>
</menu-top>
</template>

<script>
import MenuDrawer from "../../../general_helpers/menu_drawer/menu_drawer.vue"
import MenuTop from "../../../general_helpers/menu_top/menu_top.vue"
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {

  components: {
    "menu-drawer": MenuDrawer,
    "menu-top": MenuTop
  },

  methods: {

    ...mapActions([
      'toggleMenuDrawer'
    ]),

    // hide the drawer when going from medium to big screen
    hideDrawerMenu: function() {
      if (this.showMenuDrawer && this.$mq.above(1000)) {
        this.toggleMenuDrawer()
      }
    }
  },
  computed: {

    ...mapGetters([
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

header {
  background-color: rgb(51, 41, 135);
  color: white;
  padding: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
nav {
  display: none;
}
#mobile_center_div {
  display: flex;
  flex-direction: column;
  align-items: center;
}






/*medium size */

@media only screen and (min-width: 650px) {

  #current_page {
    display: none;
  }
  #utility_links {
    display: none;
  }
  nav {
    display: flex;
  }
  #navigation_links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  #mobile_navigation_links {
    display: none;
  }
}



/* big size */

@media only screen and (min-width: 1000px) {

  nav {
    flex-grow: 1;
    justify-content: space-between;
  }
  #mobile_center_div {
    display: none;
  }
  #utility_links {
    display: flex;
    flex-direction: row;
  }
}
</style>
