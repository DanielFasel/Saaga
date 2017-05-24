<template>
 
<header>
    <div id="logo">SAAGA</div>
    <nav>

      <ul id="navigation_links">
        <li>
          <router-link class="routerlink navigation_tab" to='/courses' exact>Courses <img src="" alt="Courses"></router-link>
        </li>
        <li>
          <router-link class="routerlink navigation_tab" to='/lessons' exact>Lessons <img src="" alt="Lessons"></router-link>
        </li>
        <li>
          <router-link class="routerlink navigation_tab" to='/assignments' exact>Assignments <img src="" alt="Assignments"></router-link>
        </li>
        <li>
          <router-link class="routerlink navigation_tab" to='/global' exact>Global <img src="" alt="Global"></router-link>
        </li>
      </ul>

      <ul id="utility_links">
        <li><teacher-notifications></teacher-notifications></li>
        <li><teacher-settings></teacher-settings></li>
        <li><teacher-help></teacher-help></li>
        <li><button v-on:click="logout">Logout</button></li>
      </ul>

    </nav>
  </header>

</template>



<script>

import TeacherNotifications from "../teacher_notifications/teacher_notifications.vue"
import TeacherSettings from "../teacher_settings/teacher_settings.vue"
import TeacherHelp from "../teacher_help/teacher_help.vue"

export default {

  components: {
    "teacher-notifications": TeacherNotifications,
    "teacher-settings": TeacherSettings,
    "teacher-help": TeacherHelp
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
  .router-link-active{
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

 

</style>
