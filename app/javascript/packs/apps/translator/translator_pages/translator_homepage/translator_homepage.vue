<template>

  <div class="content-container">

    <!-- Available Languages and their stats -->
    <div id="available-languages">
      <!-- Languages the translator has access to -->
      <li v-for="language, index in languages">
      <button @click="navigateSiteSelection(language, index)">{{ language["name"]}} / {{languagePercentage(index)}}</button>
      <button v-if="languagePercentage(index)===100" @click="validateLanguageButton(language)">Validate {{ language["name"]}} </button>
      </li>
    </div>

    <!-- Information Table -->
    <div id="information">
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
    </div>

    <!-- Tips about savings and link to download the languages straight as json file -->
    <div id="tips-download">
      <p>When editing a translation the website will save after 500ms. This way there is no need to worry about saving your work.</p>
    </div>

  </div>

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
.content-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "languages information"
      "tips tips"
}
#available-languages{
  grid-area: languages;
}

#information{
  grid-area: information;
}

#tips-download{
  grid-area: tips;
  justify-self: center;
}
<style>
