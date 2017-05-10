<template>
  <div id="modal">


   <v-dialog v-model="modal" persistent>
  <v-btn primary dark slot="activator">Help</v-btn>
  <v-card>
    <v-card-row>
      <v-card-title>Use Google's location service?</v-card-title>
    </v-card-row>
    <v-card-row>
      <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
    </v-card-row>
    <v-card-row actions>
      <v-btn class="green--text darken-1" flat="flat" @click.native="modal = false">Disagree</v-btn>
      <v-btn class="green--text darken-1" flat="flat" @click.native="modal = false">Agree</v-btn>
    </v-card-row>
  </v-card>
</v-dialog>

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
