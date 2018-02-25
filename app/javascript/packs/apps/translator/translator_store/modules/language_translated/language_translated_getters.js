export default{
  languageTranslated(state){
    return state.languageTranslated
  },

  wordLength(state){
    return state.wordLength
  },

  defaultTranslations: (state) => (selected,index) => {
    return state.languageTranslated['english'][selected['site']['index']]['pages'][selected['page']['index']]['words'][index]
  },

  selectedTranslations: (state) => (selected,index) => {
    return state.languageTranslated[selected['language']['name']][selected['site']['index']]['pages'][selected['page']['index']]['words'][index]
  },

  words: (state) => (selected) => {
    return     state.languageTranslated['english'][selected['site']['index']]['pages'][selected['page']['index']]['words']
  }

}
