<template>

<menu-homepage>
  <header>
    <!-- Logo -->
    <div id="logo">
      <router-link to='/' exact><span id="big_logo">Saaga</span><span id="small_logo">S</span></router-link>
    </div>

    <!-- Reactive middle bar -->
    <ul id="menu_side_mobile" :class="{whitebar: currentPage!='Homepage'}" >
      <li v-if="currentPage!='Homepage'" @click="toggleMenuSide">{{currentPage}}</li>
      <li v-if="notTop"><a href="#" v-scroll-to="'#page_container'">Scroll to Top</a></li>
    </ul>

    <!-- Navigation links for routes and utility modals -->
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

    <!-- Menu symbole that activates the drawer on small screens -->
    <div class="center_div" id="mobile_center_div" @click="toggleDrawer">
      <i class="menu_icon fa fa-bars fa-lg"></i>
      <span id="menu_text">Menu</span>
    </div>
  </header>
</menu-homepage>

</template>

<script>

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

import MenuHomepage from "../../../../general_helpers/menus/menu_homepage/menu_homepage.vue"

export default {

  data: function(){
    return {
      notTop:false,
    }
  },

  components: {
    "menu-homepage": MenuHomepage
  },

  methods: {

    ...mapActions('layout/modalDrawer',{
        toggleMenuDrawer: 'toggleMenuDrawer',
        toggleMenuSide: 'toggleMenuSide'
      }),
      // Hides Sidemenu if the drawer is opened
      toggleDrawer: function(){
        if(this.showMenuSide){
          this.toggleMenuSide()
          this.toggleMenuDrawer()
        }
        else{
          this.toggleMenuDrawer()
        }
      },

      // Function that hides or shows the Press to Top Button
      pressTop: function(){
        if (this.showMenuSide=true && window.scrollY>140) {
          this.notTop=true
        }
        else {
          this.notTop=false
        }
      }
  },

  computed: {
    ...mapGetters([
      'currentPage'
    ]),
    ...mapGetters('layout/modalDrawer',[
      'showMenuSide'
    ])
  },

  // Creation and Destruction of listener to know when to hide and show the scroll button
  created: function() {
    window.addEventListener('scroll', this.pressTop);
  },
  destroyed: function() {
    window.removeEventListener('scroll', this.pressTop);
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
  width: 100%;
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
