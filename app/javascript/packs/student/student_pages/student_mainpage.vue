<template>

  <div id="page_container">
    <router-view id="router"></router-view>
    <student-menu></student-menu>
    <student-drawer></student-drawer>
    <student-settings></student-settings>
    <student-help></student-help>
  </div>

</template>



<script>

import {mapGetters} from 'vuex'

import StudentSettings from "./student_helpers/student_settings/student_settings.vue"
import StudentHelp from "./student_helpers/student_help/student_help.vue"

export default {

  components: {
    "student-settings": StudentSettings,
    "student-help": StudentHelp
  },
  computed:{
    ...mapGetters('layout/modalDrawer',[
      'overflowHidden',
      'showMenuDrawer',
      'showSettingsModal',
      'showHelpModal'
    ])
  }
}

</script>



<style>

 #page_container{
    background: rgb(51,41,135);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height:100%;


  }

  .content_container{
    display: flex;
    background: white;
    width: 95%;
    padding: 1em;
    margin-bottom: 1em;
    height: 100%;
  }
  #router{
    margin-top: 70px;
  }

</style>
