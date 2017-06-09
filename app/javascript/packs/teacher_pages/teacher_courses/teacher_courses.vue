<template>

  <div class="content_container" id="courses_content">
    <div>
      <course-list></course-list>
    </div>
    <div id="sidelinks">
      <button @click="toggleStudentManagementModal">StudentManagement</button>
      <button @click="toggleCourseManagementModal">CourseManagement</button>
      <button @click="toggleSubstituteTeacherModal">SubstituteTeacher</button>
      <class-overview></class-overview>
    </div>
    <student-management></student-management>
    <substitute-teacher></substitute-teacher>
    <course-management></course-management>
  </div>

</template>



<script>

import CourseList from "./course_list/course_list.vue"
import StudentManagement from "./student_management/student_management.vue"
import CourseManagement from "./course_management/course_management.vue"
import SubstituteTeacher from "./substitute_teacher/substitute_teacher.vue"
import ClassOverview from "./class_overview/class_overview.vue"

import {mapActions} from 'vuex'


export default {

  components:
    { "course-list": CourseList,
      "student-management": StudentManagement,
      "course-management": CourseManagement,
      "substitute-teacher": SubstituteTeacher,
      "class-overview": ClassOverview
     },

     methods:{
       ...mapActions('layout/modalDrawer',{
         toggleStudentManagementModal: 'showStudentManagementModal',
         toggleSubstituteTeacherModal: 'showSubstituteTeacherModal',
         toggleCourseManagementModal: 'showCourseManagementModal'
       })
     },

  created: function() {
    // This component just got created. Lets fetch some data here using an action
    this.$store.dispatch("normalClasses").then(response => {
        console.log("Got some data, now lets show something in this component")
    }, error => {
        console.error("Got nothing from server. Prompt user to check internet connection and try again")
    })
  }

}

</script>

<style scoped>

  #courses_content{
    flex-direction: row;
    justify-content: space-between;
  }

  #sidelinks{
  display: flex;
  flex-direction: column;
}

</style>
