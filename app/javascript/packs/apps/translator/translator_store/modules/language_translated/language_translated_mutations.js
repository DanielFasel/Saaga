import Vue from 'vue'

export default{
    languageTranslated(state, language){
      // Extracting key of language amd making it a string
      var key=Object.keys(language)
      var keyString = key[0]
      //setting state of the appropriated language with it's corresponding array
      Vue.set(state.languageTranslated, keyString, language[keyString])
        // state.languageTranslated.splice([keyString], 1, language[keyString])
    },

    saveTemporary(state, data){
      console.log("also Here")
      state.languageTranslated[data['selected']['language']['name']][data['selected']['site']['index']]['pages'][data['selected']['page']['index']]['words'][data['selected']['word']['index']]['translation']['validated']=data['data']
    },

    saveTranslation(state, data){
      // Goes replace temporary translation with new one. data['selected'] is used to access the right translation then data['translation'] replaces the temporary translation
    state.languageTranslated[data['selected']['language']['name']][data['selected']['site']['index']]['pages'][data['selected']['page']['index']]['words'][data['selected']['word']['index']]['translation']['translation']=data['translation']
    state.languageTranslated[data['selected']['language']['name']][data['selected']['site']['index']]['pages'][data['selected']['page']['index']]['words'][data['selected']['word']['index']]['translation']['temporary']=data['temporary']

    state.languageTranslated[data['selected']['language']['name']][data['selected']['site']['index']]['pages'][data['selected']['page']['index']]['words'][data['selected']['word']['index']]['translation']['validated']=data['validated']
    },

    wordLength(state,data){
      state.wordLength=data
    }
}
