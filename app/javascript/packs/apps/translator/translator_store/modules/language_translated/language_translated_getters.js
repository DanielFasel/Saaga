export default{
  languageTranslated(state){

    state.languageTranslated.sort(function (x, y) {
    var a = x.name.toUpperCase()
    var b = y.name.toUpperCase()
    if (a > b) {
        return 1
    }
    if (a < b) {
        return -1
    }
    return 0;
    })
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

  languageTotalCompleted: (state, getters, rootState) => (languageIndex) =>{
    var hash = {total:0, completed:0}

    if(typeof state.languageTranslated !== 'undefined' && state.languageTranslated.length == rootState.languages.length){
      hash['total']=state.languageTranslated[languageIndex]['total']
      var sites =state.languageTranslated[languageIndex]['sites']

      for(var j=0;j<sites.length;j++){

        var pages = sites[j]['pages']

        if(pages.length>0){
        for(var k = 0; k<pages.length;k++){
          var words = pages[k]['words']
          if(words.length>0){
            for(var i =0; i<words.length; i++){
              if(words[i]['translation']['validated']==true){
                hash['completed']++
              }
            }
          }
        }
      }

      }



      return hash


    }
    else{
      return hash
    }
  },

  siteTotalCompleted: (state, getters, rootState, rootGetters) => (siteIndex) =>{
    var hash = {total:0, completed:0}
    hash['total']=state.languageTranslated[rootGetters.selected['language']['index']]['sites'][siteIndex]['total']

    var pages=state.languageTranslated[rootGetters.selected['language']['index']]['sites'][siteIndex]['pages']

    if(pages.length>0){
        for( var k = 0; k<pages.length; k++){
          var words = pages[k]['words']
          if(words.length>0){
            for(var i =0; i<words.length; i++){
              if(words[i]['translation']['validated']==true){
                hash['completed']++
              }
            }
          }
        }
    }

    return hash
  },

  pageTotalCompleted: (state, getters, rootState, rootGetters) => (pageIndex) => {
    var hash = {total:0, completed:0}
    hash['total']=state.languageTranslated[rootGetters.selected['language']['index']]['sites'][rootGetters.selected['site']['index']]['pages'][pageIndex]['total']
    // hash['completed']=state.languageTranslated[rootGetters.selected['language']['index']]['sites'][rootGetters.selected['site']['index']]['pages'][pageIndex]['completed']
    var words = state.languageTranslated[rootGetters.selected['language']['index']]['sites'][rootGetters.selected['site']['index']]['pages'][pageIndex]['words']
    if(words.length>0){
      for (var i = 0; i < words.length; i++) {
        if(words[i]['translation']['validated']==true){
            hash['completed']++
        }
      }
    }
    return hash
  }


}
