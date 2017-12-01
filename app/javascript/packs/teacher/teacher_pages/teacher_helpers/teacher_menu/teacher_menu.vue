<template>
<menu-main>
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

</header>
</menu-main>
</template>



<script>


import MenuMain from "../../../../general_helpers/menus/menu_main/menu_main.vue"
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {

  components: {
    "menu-main": MenuMain,
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

    settingsclick:function(){
      this.toggleSettingsModal()
    },

    helpclick: function(){
      this.toggleHelpModal()
    }
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
  background-color: rgb(51, 41, 135);
  color: white;
  padding-left: 2em;
  padding-right:2em;
  height: 70px;

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

}

#menutext{
  font-size: small;
  color: white;
}



@media only screen and (min-width: 650px){

  /* elements not displayed for small screens */

  #menu_side_mobile{
    display: none;
  }

  #utility_links{
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
