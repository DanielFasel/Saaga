import Vue from 'vue'

export default {
  languages(state, languages){
    // Sets the languages available to the translator
    state.languages=languages
  },

  updateLanguage(state, language){
    // Loops through the languages and updates the matching one
    let languages = state.languages
    for (let i=0; i < languages.length; i++){
      if(languages[i].id === language.id){
        Vue.set(state.languages, i, language)
        break
      }
    }
  }
}
