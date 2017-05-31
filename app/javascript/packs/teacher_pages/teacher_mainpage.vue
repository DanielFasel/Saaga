<template>
  
   

  <div id="page_container" class="background-blur">
  	<teacher-menu></teacher-menu>
    <router-view></router-view>
  </div>
 

</template>


<script>

  export default {

    data: function () {
      return {
        message: "Hello Daniel!"
      }
    }
  }

</script>


<style scoped>
  
#page_container{
  background: rgb(51,41,135);
  height:100vh;
  width: 100vw;
  overflow-y: auto;
}

.content_container{
  display: flex;
  background: white;
  padding-left: 3vw;
  padding-right:3vw;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 100%;
 }

</style>