<template>
  <div id="app">
      <v-text-field
          name="input-1"
          label="Class"
          v-model="message"
      ></v-text-field>
      <p>{{ message }}</p>
      <router-link to='/'>Home</router-link>
      <router-link to='/courses'>courses</router-link>
      <router-link to='/assignments'>Assignments</router-link>
      <v-btn light default v-on:click="saveclass">Save the class</v-btn>
      <router-view></router-view>

  </div>
</template>



<script>
module.exports = {
  data: function () {
    return {
     modal:false
    }
  },

  methods: {
    saveclass: function (event) {
        console.log(event.target.value)
    }
  }
}
</script>



<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
