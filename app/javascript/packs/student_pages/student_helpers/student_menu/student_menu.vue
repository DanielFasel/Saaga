<template>

  <header>
    <div id="logo">SAAGA</div>
    <div id="current_page">My courses</div>

    <nav>

      <ul id="navigation_links">
        <li>
          <router-link class="navigation_tab" to='/homeworks'>Homeworks</router-link>
        </li>
        <li>
          <router-link class="navigation_tab" to='/courses'>Courses</router-link>
        </li>
        <li>
          <router-link class="navigation_tab" to='/global'>Global <i class="fa fa-globe" aria-hidden="true"></i></router-link>
        </li>
      </ul>

      <ul id="utility_links">
        <li><student-notifications></student-notifications></li>
        <li><student-game></student-game></li>
        <li><button @click="settingsclick">Settings</button></li>
        <li><button @click="helpclick">Help</button></li>
        <li><button  v-on:click="logout">Logout</button></li>
      </ul>

    </nav>

    <div class="center_div" id="mobile_center_div" @click="toggleMenuDrawer">
      <i  class="menu_icon fa fa-bars"></i>
      <span id="menutext">Menu</span>
    </div>

    <menu-drawer v-show="showMenuDrawer" @toggleDrawer='toggleMenuDrawer'>
      <ul id="mobile_navigation_links">
        <li @click="toggleMenuDrawer">
          <router-link class="navigation_tab" to='/homeworks' exact>Homeworks <i class="fa fa-link" aria-hidden="true"></i></router-link>
        </li>
        <li @click="toggleMenuDrawer">
          <router-link class="navigation_tab" to='/courses' exact >Courses <i class="fa fa-book" aria-hidden="true"></i></router-link>
        </li>
        <li @click="toggleMenuDrawer">
          <router-link class="navigation_tab" to='/global' exact>Global <i class="fa fa-globe" aria-hidden="true"></i></router-link>
        </li>
      </ul>

      <ul id="mobile_utility_links">
        <li><student-notifications></student-notifications></li>
        <li><student-game></student-game></li>
        <li><button @click="settingsclicksmall">Settings</button></li>
        <li><button @click="helpclicksmall">Help</button</li>
        <li><button v-on:click="logout">Logout</button></li>
      </ul>
    </menu-drawer>




    <student-settings></student-settings>
    <student-help></student-help>

  </header>

</template>



<script>

import StudentNotifications from "../student_notifications/student_notifications.vue"
import StudentGame from "../student_game/student_game.vue"
import StudentSettings from "../student_settings/student_settings.vue"
import StudentHelp from "../student_help/student_help.vue"
import MenuDrawer from "../../../general_helpers/menu_drawer/menu_drawer.vue"

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {

  components: {
    "student-notifications": StudentNotifications,
    "student-game": StudentGame,
    "student-settings": StudentSettings,
    "student-help": StudentHelp,
    "menu-drawer": MenuDrawer
  },

  data: function () {
    return {
     message: "My Courses!"
    }
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
    settingsclick:function(){
      this.toggleSettingsModal()
    },

    helpclicksmall:function(){
      this.toggleMenuDrawer(),
      this.toggleHelpModal()
    },
    helpclick: function(){
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



<style>

/* nav only displayed on medium and large screen */
nav{
  display: none;
}


/* Header styling */
header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
}

/* Logo styling */
#logo{
  color:white;
  padding-left: 3vw;
  width: 10vw;
}
/* Display non nav for mobile */
.center_div{
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-right: 3vw;
  width:10vw;
}

.menu_icon{
  color: white;
  margin-bottom: 0.1em;
}

#menutext{
  font-size: small;
  color: white;
}

#current_page{
  color: white;
  font-size: small;
}





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

  /* elements not displayed for small screens */

  #current_page{
    display: none;
  }

  #utility_links{
    display: none;
  }

  #mobile_navigation_links{
  display: none;
}

  /* Styling for medium configuration */
  nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    width: 100%;
    margin-left: 2vw;
  }

  #navigation_links{
    display: flex;
    flex-direction: row;
    align-self:flex-end;
  }

  #navigation_links li{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;
    margin-left: 0.8vw;
    background-color: rgb(216,214,230);
    border-radius: 2px 2px 0px 0px;
  }

  .navigation_tab{
    color:rgb(51,41,135);
    text-decoration: none;
  }

}






@media only screen and (min-width: 1000px){


  .center_div{
    display: none;
  }

  #utility_links{
    display: flex;
    flex-direction: row;
    padding-right: 3vw;
  }

  #utility_links li {
    margin-left: 1vw;
  }

}

</style>
