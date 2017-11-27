<template>
<menu-homepage>
  <header>
    <div id="logo">
      <router-link to='/' exact><span id="big_logo">Saaga</span><span id="small_logo">S</span></router-link>
    </div>

    <menu-side-mobile id="menu_side_mobile"></menu-side-mobile>

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
      <i class="menu_icon fa fa-bars fa-lg"></i>
      <span id="menu_text">Menu</span>
    </div>



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


  </header>
</menu-homepage>
</template>

<script>
import MenuDrawer from "../../../../general_helpers/menus/menu_drawer/menu_drawer.vue"
import MenuHomepage from "../../../../general_helpers/menus/menu_homepage/menu_homepage.vue"
import MenuSideMobile from "../../../../general_helpers/menus/menu_side_mobile/menu_side_mobile.vue"

import {
  mapGetters
} from 'vuex'
import {
  mapActions
} from 'vuex'

export default {

  components: {
    "menu-drawer": MenuDrawer,
    "menu-homepage": MenuHomepage,
    "menu-side-mobile": MenuSideMobile
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

/* Not displayed on small */
nav {
  display: none;
}
#menu_text{
  display: none;
}
#big_logo{
  display: none;
}
/*--------------------------*/



header {
  background-color: rgb(51, 41, 135);
  color: white;
  padding-left: 2em;
  padding-right:2em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#mobile_center_div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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


/* Not displayed on medium */
  #menu_side_mobile {
    display: none;
  }
  #utility_links {
    display: none;
  }
  #mobile_navigation_links {
    display: none;
  }
/*---------------------*/



  #menu_text{
    display: block;
  }

  nav {
    display: flex;
  }
  #navigation_links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

  }
  #navigation_links{
    color: white;
  }

}










/* big size */

@media only screen and (min-width: 1000px) {

/* Not displayed on big */
  #mobile_center_div {
    display: none;
  }
  #small_logo{
    display: none;
  }
/*---------------*/

#big_logo{
  display: block;
}
  nav {
    flex-grow: 1;
    justify-content: space-between;
  }

  #utility_links {
    display: flex;
    flex-direction: row;
  }
}

</style>
