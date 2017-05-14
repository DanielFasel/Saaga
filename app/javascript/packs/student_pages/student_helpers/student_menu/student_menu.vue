<template>
  <div>
    <router-link to='/'>Homeworks</router-link>
    <router-link to='/courses'>Courses</router-link>
    <router-link to='/global'>Global</router-link>
    <button v-on="created">logout</button>


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



<style scoped>

</style>
