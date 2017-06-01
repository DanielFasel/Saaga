<template>
 
<header>
    <div id="logo">SAAGA</div>
    <div id="current_page">My courses</div>
    <div class="center_div" id="mobile_center_div">
      <i  class="menu_icon fa fa-ellipsis-v fa-lg" @click="toggleMenuDrawer" ></i>
    </div>

    <nav>

      <ul id="navigation_links">
        <li>
          <router-link class="navigation_tab" to='/courses' exact>Courses <i class="fa fa-link" aria-hidden="true"></i></router-link>
        </li>
        <li>
          <router-link class="navigation_tab" to='/lessons' exact>Lessons <i class="fa fa-book" aria-hidden="true"></i></router-link>
        </li>
        <li>
          <router-link class="navigation_tab" to='/assignments' exact>Assignments <i class="fa fa-tasks" aria-hidden="true"></i></router-link>
        </li>
        <li>
          <router-link class="navigation_tab" to='/global' exact>Global <i class="fa fa-globe" aria-hidden="true"></i></router-link>
        </li>
      </ul>

      <div class="center_div">
      <i  class="menu_icon fa fa-ellipsis-v fa-lg" @click="toggleMenuDrawer"></i>
      </div>

      <ul id="utility_links">
        <li><teacher-notifications></teacher-notifications></li>
        <li><teacher-settings></teacher-settings></li>
        <li><teacher-help></teacher-help></li>
        <li><button v-on:click="logout">Logout</button></li>
      </ul>

 
    </nav>



    <menu-drawer v-show="showMenuDrawer">
      <ul id="mobile_navigation_links">
        <li @click="toggleMenuDrawer">
          <router-link class="navigation_tab" to='/courses' exact>Courses <i class="fa fa-link" aria-hidden="true"></i></router-link>
        </li>
        <li @click="toggleMenuDrawer">
          <router-link class="navigation_tab" to='/lessons' exact >Lessons <i class="fa fa-book" aria-hidden="true"></i></router-link>
        </li>
        <li @click="toggleMenuDrawer">
          <router-link class="navigation_tab" to='/assignments' exact>Assignments <i class="fa fa-tasks" aria-hidden="true"></i></router-link>
        </li>
        <li @click="toggleMenuDrawer">
          <router-link class="navigation_tab" to='/global' exact>Global <i class="fa fa-globe" aria-hidden="true"></i></router-link>
        </li>
      </ul>

    <ul id="mobile_utility_links">
        <li><teacher-notifications></teacher-notifications></li>
        <li><teacher-settings></teacher-settings></li>
        <li><teacher-help></teacher-help></li>
        <li><button v-on:click="logout">Logout</button></li>
      </ul>

    </menu-drawer>



  </header>

</template>



<script>

import TeacherNotifications from "../teacher_notifications/teacher_notifications.vue"
import TeacherSettings from "../teacher_settings/teacher_settings.vue"
import TeacherHelp from "../teacher_help/teacher_help.vue"
import MenuDrawer from "../../../general_helpers/menu_drawer/menu_drawer.vue"

export default {

  components: {
    "teacher-notifications": TeacherNotifications,
    "teacher-settings": TeacherSettings,
    "teacher-help": TeacherHelp,
    "menu-drawer": MenuDrawer
  },

  data: function () {
    return {
    
    }
  },

  methods:{
    logout:function(){
      this.$http.delete('./logout')
        .then(function(){
          window.location.href = "/login"
        })
    },

    toggleMenuDrawer: function(){
      this.$store.dispatch('showMenuDrawer')
    }
  },

  computed: {

    showMenuDrawer(){
      return this.$store.getters.showMenuDrawer
    }
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
  justify-content: flex-end;
  padding-right: 3vw;
  width:10vw;
}

#current_page{
  color: white;
  font-size: small;
}

.menu_icon{
  color: white;
  margin-left: 1em;
  margin-right: 0.5em;
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
  #mobile_center_div{
    display: none;
  }

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
