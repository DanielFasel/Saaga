<template>
	<div class="content_container" id="lessons_content">
		<teacher-vertical-category-list></teacher-vertical-category-list>
		<div id="right_side">
			<div id="right_side_top">
				<teacher-search-bar></teacher-search-bar>
				<div>
					<router-link to='/global'>Browes existing lessons <img src="" alt="Existing Lessons / Global"></router-link>
					<router-link to='/global'>Create new lesson<img src="" alt="Create new lesson"></router-link>
				</div>
			</div>
			<teacher-lesson-assignement-list></teacher-lesson-assignement-list>

		</div>
	</div>
</template>

<script>

	import TeacherVerticalCategoryList from "../teacher_helpers/teacher_vertical_category_list/teacher_vertical_category_list.vue"
	import TeacherSearchBar from "../teacher_helpers/teacher_search_bar/teacher_search_bar.vue"
	import TeacherLessonAssignementList from "../teacher_helpers/teacher_lesson_assignement_list/teacher_lesson_assignement_list.vue"

	export default {

		components: {
			"teacher-vertical-category-list": TeacherVerticalCategoryList,
			"teacher-search-bar": TeacherSearchBar,
			"teacher-lesson-assignement-list": TeacherLessonAssignementList
		},

		data: function () {
    		return {
     			message: ""
    		}
  		}
	}

</script>

<style scoped>
	#right_side{
		display: flex;
		flex-direction: column;
	}

	#right_side_top{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>

<style>
	#lessons_content{
		display: flex;
		flex-direction: row;

	}

</style>