export default{
  languageTranslated(state){
    return state.languageTranslated
  },

  wordLength(state){
    return state.wordLength
  },

  defaultTranslations: (state) => (selected,index) => {
    return state.languageTranslated[0]['sites'][selected['site']['index']]['pages'][selected['page']['index']]['words'][index]
  },

  selectedTranslations: (state) => (selected,index) => {
    return state.languageTranslated[selected['language']['index']]['sites'][selected['site']['index']]['pages'][selected['page']['index']]['words'][index]
  },

  words: (state) => (selected) => {
    return     state.languageTranslated[0]['sites'][selected['site']['index']]['pages'][selected['page']['index']]['words']
  },

  languageTotalCompleted: (state, getters, rootState, rootGetters) => (languageIndex) =>{
    var hash = {total:0, completed:0}
    hash['total']=state.languageTranslated[languageIndex]['total']
    hash['completed']=state.languageTranslated[languageIndex]['completed']
    return hash
  },

  siteTotalCompleted: (state, getters, rootState, rootGetters) => (siteIndex) =>{
    var hash = {total:0, completed:0}
    hash['total']=state.languageTranslated[rootGetters.selected['language']['index']]['sites'][siteIndex]['total']
    hash['completed']=state.languageTranslated[rootGetters.selected['language']['index']]['sites'][siteIndex]['completed']
    return hash
  },

  pageTotalCompleted: (state, getters, rootState, rootGetters) => (pageIndex) => {
    var hash = {total:0, completed:0}
    hash['total']=state.languageTranslated[rootGetters.selected['language']['index']]['sites'][rootGetters.selected['site']['index']]['pages'][pageIndex]['total']
    hash['completed']=state.languageTranslated[rootGetters.selected['language']['index']]['sites'][rootGetters.selected['site']['index']]['pages'][pageIndex]['completed']
    return hash
  }


}
