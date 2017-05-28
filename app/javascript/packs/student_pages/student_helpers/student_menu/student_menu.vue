<template>
 
  <header>
    <div id="logo">SAAGA</div>
    <nav>

      <ul id="navigation_links">
        <li>
          <router-link class="routerlink current_navigation_tab" to='/homeworks'>Homeworks <img src="" alt="Hoemworks"></router-link>
        </li>
        <li>
          <router-link class="routerlink navigation_tab" to='/courses'>Courses <img src="" alt="Courses"></router-link>
        </li>
        <li>
          <router-link class="routerlink navigation_tab" to='/global'>Global <img src="" alt="Global"></router-link>
        </li>
      </ul>

      <ul id="utility_links">
        <li><student-notifications></student-notifications></li>
        <li><student-game></student-game></li>
        <li><student-settings></student-settings></li>
        <li><student-help></student-help></li>
        <li><button class="utility_buttons" v-on:click="post">Logout</button></li>
      </ul>

    </nav>
  </header>

</template>



<script>

import StudentNotifications from "../student_notifications/student_notifications.vue"
import StudentGame from "../student_game/student_game.vue"
import StudentSettings from "../student_settings/student_settings.vue"
import StudentHelp from "../student_help/student_help.vue"

export default {

  components: {
    "student-notifications": StudentNotifications,
    "student-game": StudentGame,
    "student-settings": StudentSettings,
    "student-help": StudentHelp
  },

  data: function () {
    return {
     message: "My Courses!"
    }
  },

  methods:{
    post:function(){
      this.$http.delete('./logout').then(function(){
        window.location.href = "/login"
      })
    }
  }

}

</script>



<style>

/* Header styling */
header{
  display: flex;
  flex-direction: row;
  height:3.5em;
  width: 95%;
}

/* Logo styling */
#logo{
  display: flex;
  align-items: flex-end;
  color:white;
  padding-bottom: 0.5em;
  padding-right: 1.5vw;
}


/* Navigation styling */
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
}

ul {
  list-style-type: none;
}
  

/* Nav links styling */
#navigation_links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}

/*---*/
.current_navigation_tab{
  display: flex;
  align-items: center;
  margin-right:0.5vw;
  background: white; 
  padding:0.65em 1.3em 0.65em 1.3em;
  border-radius: 0.15em 0.15em 0 0;
}
  
.navigation_tab{
  display: flex;
  align-items: center;
  margin-right:0.5vw;
  background: rgb(215,213,230); 
  padding:0.5em 1.25em 0.5em 1.25em;
  border-radius: 0.15em 0.15em 0 0;
}

.navigation_tab:active{
  background: white;
}

.routerlink{
  text-decoration: none;
  color:rgb(51,41,135);
}
  
.routerlink:hover{
  }


/* Nav Utility styling */
#utility_links {
  display: flex;
  flex-direction: row;
  align-self: center;
}

/*--*/
.utility_buttons{
  color:white;
  padding-left: 1.5em;
}
 
</style>
