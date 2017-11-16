<template>
<menu-top>
<header>

  <div id="logo">SAAGA</div>
  <menu-side-mobile id="menu_side_mobile"></menu-side-mobile>

  <nav>
    <ul id="navigation_links">
      <li>
        <router-link class="navigation_tab" to='/courses' exact>Courses <i class="fa fa-link" aria-hidden="true"></i></router-link>
      </li>
      <li>
        <router-link class="navigation_tab" to='/lessons' exact>Lessons <i class="fa fa-book" aria-hidden="true"></i></router-link>
      </li>
    </ul>

     <ul id="utility_links">
      <li>8</li>
      <li><button @click="settingsclick">Settings</button></li>
      <li><button @click="helpclick">Help</button></li>
      <li><button v-on:click="logout">Logout</button></li>
    </ul>
  </nav>

  <div class="center_div" id="mobile_center_div" @click="toggleMenuDrawer">
    <i  class="menu_icon fa fa-bars"></i>
    <span id="menutext">Menu</span>
  </div>

  <menu-drawer v-show="showMenuDrawer" @toggleDrawer='toggleMenuDrawer'>
    <ul id="mobile_navigation_links">
      <li @click="toggleMenuDrawer">
        <router-link class="navigation_tab" to='/courses' exact>Courses <i class="fa fa-link" aria-hidden="true"></i></router-link>
      </li>
      <li @click="toggleMenuDrawer">
        <router-link class="navigation_tab" to='/lessons' exact >Lessons <i class="fa fa-book" aria-hidden="true"></i></router-link>
      </li>
    </ul>

    <ul id="mobile_utility_links">
      <li>8</li>
      <li><button @click="settingsclicksmall">Settings</button></li>
      <li><button @click="helpclicksmall">Help</button</li>
      <li><button v-on:click="logout">Logout</button></li>
    </ul>
  </menu-drawer>

  <teacher-settings></teacher-settings>
  <teacher-help></teacher-help>

</header>
</menu-top>
</template>



<script>

import TeacherSettings from "../teacher_settings/teacher_settings.vue"
import TeacherHelp from "../teacher_help/teacher_help.vue"
import MenuDrawer from "../../../general_helpers/menu_drawer/menu_drawer.vue"
import MenuTop from "../../../general_helpers/menu_top/menu_top.vue"
import MenuSideMobile from "../../../general_helpers/menu_side_mobile/menu_side_mobile.vue"

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {

  components: {
    "teacher-settings": TeacherSettings,
    "teacher-help": TeacherHelp,
    "menu-drawer": MenuDrawer,
    "menu-top": MenuTop,
    "menu-side-mobile": MenuSideMobile
  },

  data: function(){
    return{
      bigtimer:0,
      oncetimer:0
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



<style scoped>

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

  #menu_side_mobile{
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
