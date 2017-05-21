<template>
  <div class="content_container" id="courses_content">
    <div>
      <course-list></course-list>
    </div>
    <div>
      <student-management></student-management>
      <course-management></course-management>
      <substitute-teacher></substitute-teacher>
      <class-overview></class-overview>
    </div>
  </div>
</template>



<script>
import CourseList from "./course_list/course_list.vue"
import StudentManagement from "./student_management/student_management.vue"
import CourseManagement from "./course_management/course_management.vue"
import SubstituteTeacher from "./substitute_teacher/substitute_teacher.vue"
import ClassOverview from "./class_overview/class_overview.vue"

export default {
  
  components: 
    { "course-list": CourseList,
      "student-management": StudentManagement,
      "course-management": CourseManagement,
      "substitute-teacher": SubstituteTeacher,
      "class-overview": ClassOverview
     },

  data: function () {
    return {
     courses: "Courses"
    }
  },

  created(){
    this.$http.get('./normalclasses')
    .then(function(data){
      console.log(data)
    })
  }
}


</script>

<style>
  #courses_content{
    flex-direction: row;
    justify-content: space-between;
  }
</style>