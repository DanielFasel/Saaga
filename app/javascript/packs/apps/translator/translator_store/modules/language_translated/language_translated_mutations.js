export default{

  languageTranslated(state, data){
    //add an authorized language
    // checks if language is the last. if yes it just pushes it to the end otherwise it splices it to the appropriated index
    if(data['index']=="last"){
      state.languageTranslated.push(data['language'])
    }
    else{
      state.languageTranslated.splice(data['index'],0,data['language'])
    }
  },

  defaultLanguageTranslated(state,language){
    // set the default language
    state.defaultLanguageTranslated.push(language)
  },

  saveTemporary(state, data){
    // Replace temporary with updated one
    state.languageTranslated[data['selected']['language']['index']]['sites'][data['selected']['site']['index']]['pages'][data['selected']['page']['index']]['words'][data['selected']['word']['index']]['translation']['validated']=data['data']
  },

  saveTranslation(state, data){
    // Goes replace temporary translation with new one. data['selected'] is used to access the right translation then data['translation'] replaces the temporary translation
    state.languageTranslated[data['selected']['language']['index']]['sites'][data['selected']['site']['index']]['pages'][data['selected']['page']['index']]['words'][data['selected']['word']['index']]['translation']['translation']=data['translation']
    state.languageTranslated[data['selected']['language']['index']]['sites'][data['selected']['site']['index']]['pages'][data['selected']['page']['index']]['words'][data['selected']['word']['index']]['translation']['temporary']=data['temporary']
    state.languageTranslated[data['selected']['language']['index']]['sites'][data['selected']['site']['index']]['pages'][data['selected']['page']['index']]['words'][data['selected']['word']['index']]['translation']['validated']=data['validated']
  }
}
