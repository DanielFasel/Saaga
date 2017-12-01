<template>
<!-- the external div is used to create a mask over the background when a modal is activated or drawer menu -->
<div id="page_container" v-bind:class="{overflowHidden: overflowHidden}">

  <!-- Content of the pages when changing route -->
  <router-view  id="router"></router-view>
  <teacher-menu></teacher-menu>
  <teacher-drawer></teacher-drawer>
  <teacher-settings></teacher-settings>
  <teacher-help></teacher-help>

  <div id="background_mask" v-show="overflowHidden || showMenuDrawer || showSettingsModal || showHelpModal || showStudentManagementModal || showCourseManagementModal || showSubstituteTeacherModal" >
  </div>

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
  width: 100%;
  padding-top: 70px;
}

.overflowHidden {
  overflow: hidden;
}

#background_mask{
  position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, .5);
  top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

</style>
