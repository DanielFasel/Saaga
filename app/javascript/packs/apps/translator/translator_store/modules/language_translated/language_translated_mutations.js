import Vue from 'vue'

export default{
    languageTranslated(state, language){
      state.languageTranslated.push(language)
    },

    saveTemporary(state, data){
      state.languageTranslated[data['selected']['language']['index']]['sites'][data['selected']['site']['index']]['pages'][data['selected']['page']['index']]['words'][data['selected']['word']['index']]['translation']['validated']=data['data']
    },

    saveTranslation(state, data){
      // Goes replace temporary translation with new one. data['selected'] is used to access the right translation then data['translation'] replaces the temporary translation
    state.languageTranslated[data['selected']['language']['index']]['sites'][data['selected']['site']['index']]['pages'][data['selected']['page']['index']]['words'][data['selected']['word']['index']]['translation']['translation']=data['translation']
    state.languageTranslated[data['selected']['language']['index']]['sites'][data['selected']['site']['index']]['pages'][data['selected']['page']['index']]['words'][data['selected']['word']['index']]['translation']['temporary']=data['temporary']
    state.languageTranslated[data['selected']['language']['index']]['sites'][data['selected']['site']['index']]['pages'][data['selected']['page']['index']]['words'][data['selected']['word']['index']]['translation']['validated']=data['validated']
    },

    wordLength(state,data){
      state.wordLength=data
    }
}
