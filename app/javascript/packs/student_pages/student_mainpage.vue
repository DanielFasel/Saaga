<template>
  
  <div id="page_container">
   
   <student-menu></student-menu>
   <router-view></router-view>
    
  </div>
  
</template>



<script>

module.exports = {

  data: function () {
    return {
      message: "Hello Daniel!"
    }
  }
}
</script>



<style>
 #page_container{
    background: rgb(51,41,135);
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height:100%;

    
  }
  .content_container{
    display: flex;
    background: white;
    width: 95%;
    padding: 1em;
    margin-bottom: 1em;
    height: 100%;
  }
</style>
