<template>
  <div class="content_container">

      <input v-model="course_name" placeholder="Course name">'
      <button v-on:click="post">Save Name</button>
      <p>{{ courses }}</p>
  </div>
</template>



<script>
export default {
  data: function () {
    return {
     courses: "",
     course_name: ""
    }
  },
  created(){
    this.$http.get('./normalclasses')
    .then(function(data){
      console.log(data)
    })
  }
}


</script>



<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
