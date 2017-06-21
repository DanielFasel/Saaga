<template>

 	<div class="content_container" id="student_courses_content">
 		<div id="student_courses_lists">
 			<student-official-course-list></student-official-course-list>
 			<student-unofficial-course-list></student-unofficial-course-list>
 		</div>
    <button @click="toggleAddCourses">Add Courses</button>
 		<student-add-courses></student-add-courses>
 	</div>

</template>



<script>

	import StudentOfficialCourseList from "./student_official_course_list/student_official_course_list.vue"
	import StudentUnofficialCourseList from "./student_unofficial_course_list/student_unofficial_course_list.vue"
	import StudentAddCourses from "./student_add_courses/student_add_courses.vue"
  import {mapActions} from 'vuex'

	export default {

		components: {
			"student-official-course-list": StudentOfficialCourseList,
			"student-unofficial-course-list": StudentUnofficialCourseList,
			"student-add-courses": StudentAddCourses
		},

    methods:{
      ...mapActions('layout/modalDrawer',{
        toggleAddCourses: 'showAddCoursesModal',

      })
    }
	}

</script>



<style>

	#student_courses_content{
		display: flex;
		flex-direction: row;
	}

	#student_courses_lists{
		display: flex;
		flex-direction: column;
	}

</style>
