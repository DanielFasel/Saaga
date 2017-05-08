<template>
  <div id="app">
  
    
      <v-text-field
            name="input-1"
            label="Class"
            v-model="message"
          ></v-text-field>
          <p>{{ message }}</p>
          <v-btn light default v-on:click="saveclass">Save the class</v-btn>





  </div>
</template>



<script>
module.exports = {
  data: function () {
    return {
      message: ""
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
