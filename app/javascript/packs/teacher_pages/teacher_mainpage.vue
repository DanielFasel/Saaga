<template>

  <div id="page_container">
  	<teacher-menu></teacher-menu>
    <router-view></router-view>
    <teacher_test></teacher_test>
  </div>

</template>



<script>

import TeacherTest from "./teacher_helpers/teacher_test.vue"

export default {

  data: function () {
    return {
      message: "Hello Daniel!"
    }
  },
  components: {"teacher_test": TeacherTest}
}
</script>



<style scoped>

</style>

<style>
  
  #page_container{
    background: rgb(51,41,135);
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom:1em; 

    
  }
  .content_container{
    display: flex;
    background: white;
    width: 95%;
    padding: 1em;
   
    border-top-width: thick;
    border-top-color: rgb(51,41,135);
  }
</style>