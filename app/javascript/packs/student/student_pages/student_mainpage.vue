<template>

  <div id="page_container">
    <router-view id="router"></router-view>
    <student-menu></student-menu>
    <student-drawer></student-drawer>
    <student-settings></student-settings>
    <student-help></student-help>

    <!-- Dark Background for modals and drawer all modals and other component trigering the background need to be listed here -->
    <transition name="mask">
      <div id="background_mask" v-show="showMenuDrawer || showSettingsModal || showHelpModal || showAddCoursesModal" ></div>
    </transition>
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
      'showMenuDrawer',
      'showSettingsModal',
      'showHelpModal',
      'showAddCoursesModal'
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

  #background_mask{
    position: fixed;
    z-index: 2;
    background-color: rgba(0, 0, 0, .5);
    top: 0;
      left: 0;
      width: 100%;
      height: 100%;
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

  .mask-enter-active, .mask-leave-active {
  transition: opacity .5s
  }
  .mask-enter, .mask-leave-to {
  opacity: 0
  }

</style>
