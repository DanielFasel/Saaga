<template>

<div id="page_container">

  <!-- Content of the pages when changing route -->
  <router-view  id="router" :style="modalMenuPadding"></router-view>
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
import {mapActions} from 'vuex'

import TeacherSettings from "./teacher_helpers/teacher_settings/teacher_settings.vue"
import TeacherHelp from "./teacher_helpers/teacher_help/teacher_help.vue"

export default {

  data: function (){
    return{
      dataModalDrawer : false,
      paddingRight : 0
    }
  },
  components: {
    "teacher-settings": TeacherSettings,
    "teacher-help": TeacherHelp
  },

  methods:{
    ...mapActions('layout/generalLayout',{
      overflowPaddingAction:'overflowPadding',
      overflowPaddingLiveAction:'overflowPaddingLive'
    })
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
    ]),
    ...mapGetters('layout/generalLayout',[
      'overflowPadding',
      'overflowPaddingLive'
    ]),

    modalMenuPadding: function(){
      if (this.showSettingsModal || this.showHelpModal || this.showStudentManagementModal || this.showCourseManagementModal || this.showSubstituteTeacherModal)
        {
        this.overflowPaddingLiveAction(this.overflowPadding)

        }
      else{
        this.overflowPaddingLiveAction(0)
      }
      return{ paddingRight : this.overflowPaddingLive + 'px'}
    }
  },

  created: function(){

    // calculates the width of the scroll bar
      var inner = document.createElement('p');
      inner.style.width = "100%";
      inner.style.height = "200px";

      var outer = document.createElement('div');
      outer.style.position = "absolute";
      outer.style.top = "0px";
      outer.style.left = "0px";
      outer.style.visibility = "hidden";
      outer.style.width = "200px";
      outer.style.height = "150px";
      outer.style.overflow = "hidden";
      outer.appendChild (inner);

      document.body.appendChild (outer);
      var w1 = inner.offsetWidth;
      outer.style.overflow = 'scroll';
      var w2 = inner.offsetWidth;
      if (w1 == w2) w2 = outer.clientWidth;

      document.body.removeChild (outer);
      // sends the width to vuex
      this.overflowPaddingAction(w1-w2)
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
  padding-top: 70px;

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
