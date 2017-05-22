<template>

 	<div class="content_container" id="student_courses_content">
 		<div id="student_courses_lists">
 			<student-official-course-list></student-official-course-list>
 			<student-unofficial-course-list></student-unofficial-course-list>
 		</div>
 		<div>Add new course</div>
 	</div>

</template>



<script>

	import StudentOfficialCourseList from "./student_official_course_list/student_official_course_list.vue"
	import StudentUnofficialCourseList from "./student_unofficial_course_list/student_unofficial_course_list.vue"

	export default {

		components: {
			"student-official-course-list": StudentOfficialCourseList,
			"student-unofficial-course-list": StudentUnofficialCourseList
		},

  		data: function () {
    		return {
      			message: "Hello Daniel!"
    		}
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
