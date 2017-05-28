<template>

  <div class="content_container" id="assignments_content">

    <div>Filter By + Help</div>
    <assignement-category-card-list></assignement-category-card-list>

    <div id="bottom_half">
      <teacher-vertical-category-list></teacher-vertical-category-list>
      <div id="bottom_right_half">
        <div id="bottom_right_top">
          <teacher-search-bar></teacher-search-bar>
          <div>Help link</div>
        </div>
        <teacher-lesson-assignement-list></teacher-lesson-assignement-list>
      </div>
    </div>  

  </div>

</template>



<script>

  import AssignementCategoryCardList from "./assignement_category_card_list/assignement_category_card_list.vue" 
  import TeacherVerticalCategoryList from "../teacher_helpers/teacher_vertical_category_list/teacher_vertical_category_list.vue"
  import TeacherSearchBar from "../teacher_helpers/teacher_search_bar/teacher_search_bar.vue"
  import TeacherLessonAssignementList from "../teacher_helpers/teacher_lesson_assignement_list/teacher_lesson_assignement_list.vue"

  export default {

    components: {
      "assignement-category-card-list": AssignementCategoryCardList,
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

<style>

  #assignments_content{
    display: flex;
    flex-direction: column;
  }

</style>

<style scoped>

  #bottom_half{
    display: flex;
    flex-direction: row;
  }

   #bottom_right_half{
    display: flex;
    flex-direction: column;
  }

  #bottom_right_top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

</style>
