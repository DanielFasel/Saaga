<template>

  <div class="content_container">

    <!-- Available Languages and their stats -->
    <div>
      <!-- Languages the translator has access to -->
      <li v-for="language in languages[0]">
        <button>{{ language.language }}</button>
      </li>
    </div>

    <!-- Information Table -->
    <div>
      <!-- Personal info -->
      <div>
        Name and Email
      </div>
      <!-- General Stats of Translations -->
      <div>
        Completed Translations
      </div>
    </div>

  </div>

</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default{


  computed:{
    ...mapGetters([
      'languages'
    ]),
  },

  created: function() {
    // Goes fetch the languages of the translator
    this.$store.dispatch("languages").then(response => {
        console.log("Got some data, now lets show something in this component")
    }, error => {
        console.error("Got nothing from server. Prompt user to check internet connection and try again")
    })
  }

}
</script>

<style scoped>
.content_container{
  display: flex;
  flex-direction: column;
  color: black;
}
<style>
