<template>

<menu-main>
  <!-- "padding right" is there to avoid jumps when opening a modal because the scroll bar disappears-->
  <header :style="{paddingRight: this.overflowPaddingLive + 'px'}">

    <!-- Logo -->
    <div id="logo">SAAGA</div>

    <!-- Middle bar-->
    <div id="current_page">My courses</div>

    <!-- Navigation for routes and utility modals -->
    <nav>
      <ul id="navigation_links">
        <li>
          <router-link class="navigation_tab" to='/homeworks'>Homeworks</router-link>
        </li>
        <li>
          <router-link class="navigation_tab" to='/courses'>Courses</router-link>
        </li>
      </ul>

      <ul id="utility_links">
        <li>8</li>
        <li>Game</li>
        <li><button @click="toggleSettingsModal">Settings</button></li>
        <li><button @click="toggleHelpModal">Help</button></li>
        <li><button v-on:click="logout">Logout</button></li>
      </ul>
    </nav>

    <!-- Menu Icon that triggers drawer on click for medium and small screens -->
    <div class="center_div" id="mobile_center_div" @click="toggleMenuDrawer">
      <i class="menu_icon fa fa-bars"></i>
      <span id="menutext">Menu</span>
    </div>

  </header>
</menu-main>

</template>


<script>

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

import MenuMain from "../../../../general_helpers/menus/menu_main/menu_main.vue"

export default {

  components: {
    "menu-main": MenuMain
  },

  methods: {
    ...mapActions('layout/modalDrawer', {
      toggleMenuDrawer: 'toggleMenuDrawer',
      toggleSettingsModal: 'toggleSettingsModal',
      toggleHelpModal: 'toggleHelpModal'
    }),

    // function to logout from user session
    logout: function() {
      this.$http.delete('./logout').then(function() {
        window.location.href = "/login"
      })
    }
  },

  computed: {
    ...mapGetters('layout/generalLayout', [
      'overflowPaddingLive'
    ])
  }
}

</script>


<style scoped>

/* Styling for small screens */
/* nav only displayed on medium and large screen and therefore not displayed for small screens*/
nav {
  display: none;
}


/* Header styling */
header {
  box-sizing: border-box;
  background-color: rgb(51, 41, 135);
  color: white;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}


/* Logo styling */
#logo {
  color: white;
  padding-left: 3vw;
  width: 10vw;
}


/* Display non nav for mobile */
.center_div {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-right: 3vw;
  width: 10vw;
}

.menu_icon {
  color: white;
}

#menutext {
  font-size: small;
  color: white;
}

#current_page {
  color: white;
  font-size: small;
}


/* Styling for medium Screens */
@media only screen and (min-width: 650px) {

  /* elements not displayed for medium screens */
  #current_page {
    display: none;
  }

  #utility_links {
    display: none;
  }

  /* Styling for medium configuration */
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    width: 100%;
    margin-left: 2vw;
  }

  #navigation_links {
    display: flex;
    flex-direction: row;
    align-self: flex-end;
  }

  #navigation_links li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;
    margin-left: 0.8vw;
    background-color: rgb(216, 214, 230);
    border-radius: 2px 2px 0px 0px;
  }

  .navigation_tab {
    color: rgb(51, 41, 135);
    text-decoration: none;
  }
}



/* Styling for big screens */
@media only screen and (min-width: 1000px) {

  .center_div {
    display: none;
  }

  #utility_links {
    display: flex;
    flex-direction: row;
    padding-right: 3vw;
  }

  #utility_links li {
    margin-left: 1vw;
  }
}

</style>
