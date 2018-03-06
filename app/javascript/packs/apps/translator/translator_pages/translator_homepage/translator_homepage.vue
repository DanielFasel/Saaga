<template>

  <div class="content_container">

    <!-- Available Languages and their stats -->
    <div>
      <!-- Languages the translator has access to -->
      <li v-for="language, index in languages">
      <button @click="navigateSiteSelection(language, index)">{{ language["name"]}} / {{languagePercentage(index)}}</button>
      <button v-if="languagePercentage(index)===100" @click="validateLanguage(language["name"])">Validate {{language["name"]}}</button>
      </li>
    </div>

    <!-- Information Table -->
    <div>
      <!-- Personal info -->
      <div>
        {{user["givenname"]}}
        {{user["familyname"]}}
        {{user["email"]}}
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
      'languages',
      'user'
    ])
  },

  methods:{
    ...mapActions({
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
    validateLanguage(languageName){
      this.validateLanguage(languageName)
    }
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
