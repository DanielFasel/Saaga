<template>
  <div id="hei">
  <div>Loading</div>
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
      languageTranslated: 'languageTranslated'
    }),
    fakeFetch: function(){
        this.$router.push({ name: 'homepage' })
    }
  },

  computed:{
    ...mapGetters([
      'languages'
    ])
  },

    created: function(){

      // Have to rethink because it doesn+t get fetched when translator reloads homepage.
      // fetches authorized languages and then fetches hte strings of them, needs cleaning
      this.fetchlanguages().then(response => {
                console.log("Got the translators authorized languages now fetching them")
                this.languageTranslated(this.languages[0]['language'])
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
