<template>
  <main id="homepage-content">

    <!-- Available Languages and their stats -->
    <section id="available-languages">
      <h2>Languages</h2>
      <!-- Languages the translator has access to -->
      <div v-for="language, index in languages">
        <button @click="navigateSiteSelection(language, index)">{{ language["name"]}} / {{languagePercentage(index)}}</button>
        <button v-if="languagePercentage(index)===100" @click="validateLanguageButton(language)">Validate {{ language["name"]}} </button>
      </div>
    </section>

    <!-- Information Table -->
    <section id="information">

    <h2>User Info</h2>
      <!-- Personal info -->
      <div id="user-info">
        {{user["givenname"]}}
        {{user["familyname"]}}
        {{user["email"]}}
      </div>
      <!-- General Stats of Translations -->
      <div id="translation-statistics">
        Completed Translations
      </div>
    </section>

    <!-- Tips about savings and link to download the languages straight as json file -->
    <section id="tips-download">
      <h2>Tips</h2>
      <p>When editing a translation the website will save after 500ms. This way there is no need to worry about saving your work.</p>
    </section>

  </main>
</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default{

  computed:{
    ...mapGetters([
      'languages',
      'user'
    ])
  },

  methods:{
    ...mapActions('languageTranslated',{
      validateLanguage: 'validateLanguage'
    }),
    navigateSiteSelection: function(language, languageIndex){
      // Navigates to the Language Page and commits the selected language to 'selected' in the store
      this.$router.push({ name: 'languages' })
      this.$store.commit('selected', {type:0, data:{name: language["name"], index: languageIndex}})
    },

    languagePercentage(languageIndex){
      // Calculates the percentage done of the language.
      var hash = this.$store.getters['languageTranslated/languageTotalCompleted'](languageIndex)
      var percentage = hash['completed']/(hash['total']/100)
      percentage=+percentage.toFixed(1)
      // Returns empty percentage incase the total is 0 (Happens because the authorized languages get loaded before the language files themselves)
      if(hash['total']==0){
        return ""
      }
      else{
        return percentage
      }
    },
    validateLanguageButton(languageName){
      this.validateLanguage(languageName['name'])
    }
  }
}
</script>

<style scoped>
#homepage-content{
    display: grid;
    height: calc(100vh - 70px);
    align-content: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "languages information"
      "tips tips"
}
#available-languages{
  grid-area: languages;
  background-color: red;
}

#information{
  grid-area: information;
  background-color: yellow;
}

#tips-download{
  grid-area: tips;
  justify-self: center;
  background-color: silver;
}


@media (max-width: 600px) {
  #homepage-content{
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto;
      grid-template-areas:
        "languages"
        "information"
        "tips"
  }
}
</style>
