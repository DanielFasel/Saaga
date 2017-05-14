<template>
  <div>
      <router-link class="routerlink" to='/classes'>Classes</router-link>
      <router-link class="routerlink" to='/courses'>Courses</router-link>
      <router-link class="routerlink" to='/assignments'>Assignments</router-link>
      <router-link class="routerlink" to='/global'>Global</router-link>
  </div>
</template>



<script>


module.exports = {

  data: function () {
    return {
     message: "My Courses!"
    }
  }


}
</script>



<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }

  .routerlink{
    color:white;
  }
  .routerlink:hover{
    color:black;
  }
</style>
