<template>

  <!-- Loading screen. Fetches data while schowing a koading screen if needed then goes to the mainpage -->
  <div id="loadingScreen">
    <!-- Potential Loading screen -->
    <div>Loading</div>
    <!-- Manuel button to be replaced by progrmic push for production -->
    <button @click="fakeFetch">Click after loading is completed</button>
  </div>

</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default{
  methods:{
    ...mapActions({
      user: 'user',
      fetchlanguages: 'languages'
    }),
    ...mapActions('languageTranslated',{
      languageTranslated: 'languageTranslated',
      defaultLanguageTranslated: 'defaultLanguageTranslated'
    }),

    fakeFetch: function(){
        // Navigates to next route. Will have to be programmed so that it navigates after all the data is fetched
        this.$router.push({ name: 'homepage' })
    }
  },

  computed:{
    ...mapGetters([
      'languages'
    ])
  },

  created: function(){
    // Fetches the default language
    this.defaultLanguageTranslated("english")

    // fetches authorized languages
    this.fetchlanguages().then(response => {
      // Loop through the languages and calls an action to fetch it
      for (var i = 0; i < this.languages.length; i++) {
        this.languageTranslated(this.languages[i]['name'])
      }
    }, error => {
      console.error("Got nothing from server. Prompt user to check internet connection and try again")
    })

    // fetches user info
    this.user()
  }

}
</script>

<style scoped>

</style>
