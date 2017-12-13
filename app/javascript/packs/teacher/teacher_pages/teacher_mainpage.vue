<template>

<div id="page_container">

  <!-- Content of the pages when changing route -->
  <router-view  id="router"></router-view>
  <teacher-menu></teacher-menu>
  <teacher-drawer></teacher-drawer>
  <teacher-settings></teacher-settings>
  <teacher-help></teacher-help>

  <!-- Dark Background for modals and drawer all modals and other component trigering the background need to be listed here -->
  <transition name="mask">
    <div id="background_mask" v-show="showMenuDrawer || showSettingsModal || showHelpModal || showStudentManagementModal || showCourseManagementModal || showSubstituteTeacherModal" ></div>
  </transition>
</div>

</template>


<script>

import {mapGetters} from 'vuex'

import TeacherSettings from "./teacher_helpers/teacher_settings/teacher_settings.vue"
import TeacherHelp from "./teacher_helpers/teacher_help/teacher_help.vue"

export default {

  components: {
    "teacher-settings": TeacherSettings,
    "teacher-help": TeacherHelp
  },

  computed:{
    ...mapGetters('layout/modalDrawer',[
      'overflowHidden',
      'showMenuDrawer',
      'showSettingsModal',
      'showHelpModal',
      'showStudentManagementModal',
      'showCourseManagementModal',
      'showSubstituteTeacherModal'
    ])
  }
}
</script>


<style scoped>

#page_container {
  background: rgb(51, 41, 135);
  display: flex;
  flex-direction: column;

}
#teacher_menu_background {
height:70px;
}
#router{
  display: flex;
  background: white;
  width: calc(100% - (100vw - 100%));
  padding-top: 70px;
    padding-right: calc(100vw - 100%);
}

.overflowHidden {
  overflow: hidden;
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

.mask-enter-active, .mask-leave-active {
transition: opacity .5s
}
.mask-enter, .mask-leave-to {
opacity: 0
}

</style>
