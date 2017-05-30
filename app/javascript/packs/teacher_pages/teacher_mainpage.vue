<template>

  <div id="page_container">
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
</style>

<style>
  
#page_container{
  background: rgb(51,41,135);

  height:100vh;
  width: 100vw;
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