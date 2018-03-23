export default{

  defaultLanguageTranslated(state){
    //returns the default language (english)
    return state.defaultLanguageTranslated
  },

  defaultTranslations: (state) => (selected,index) => {
    // returns the translation (of the default language, english) of the corresponding 'word' given by the 'index'.
    return state.defaultLanguageTranslated[0]['sites'][selected['site']['index']]['pages'][selected['page']['index']]['words'][index]
  },

  selectedTranslations: (state) => (selected,index) => {
    //returns the translation of the corresponding 'word' given by the 'index'.
    return state.languageTranslated[selected['language']['index']]['sites'][selected['site']['index']]['pages'][selected['page']['index']]['words'][index]
  },

  words: (state) => (selected) => {
    //returns the 'words' of the selected 'site' and 'page'.
    return state.defaultLanguageTranslated[0]['sites'][selected['site']['index']]['pages'][selected['page']['index']]['words']
  },

  languageTotalCompleted: (state, getters, rootState) => (languageIndex) =>{
    // returns the total and completed translations of the language given by the 'languageIndex'
    var hash = {total:0, completed:0}
    // if statement makes sure that all the languages are fetched before doing anything
    if(typeof state.languageTranslated !== 'undefined' && state.languageTranslated.length == rootState.assigned_languages.length){
      // sets the total according to the total received by the server
      hash['total']=state.languageTranslated[languageIndex]['total']
      // list of sites of the demanded language
      var sites =state.languageTranslated[languageIndex]['sites']
      // Looping through the sites then pages then words and incrimenting if the translation is validated
      for(var j=0;j<sites.length;j++){
        var pages = sites[j]['pages']
        // Checks if there are pages
        if(pages.length>0){
        for(var k = 0; k<pages.length;k++){
          var words = pages[k]['words']
          // checks if there are words
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
      if(hash['total']===0){
        return false
      }
      else if(hash['completed']===0){
          return 0
      }
      else{
        var percentage = hash['completed']/(hash['total']/100)
        return percentage
      }
    }
    // return false in case the languages are not yet fetched
    else{
      return false
    }
  },

  siteTotalCompleted: (state, getters, rootState, rootGetters) => (siteIndex) =>{
    // returns the total and completed translations of the site given by the 'siteIndex'
    var hash = {total:0, completed:0}
    // sets the total according to the total received by the server
    hash['total']=state.languageTranslated[rootGetters.selected['language']['index']]['sites'][siteIndex]['total']
    // list of pages of the demanded site
    var pages=state.languageTranslated[rootGetters.selected['language']['index']]['sites'][siteIndex]['pages']
    // Makes sure that there are pages
    if(pages.length>0){
      // Looping through the pages then words and incrimenting if the translation is validated
        for( var k = 0; k<pages.length; k++){
          var words = pages[k]['words']
          //checks if there are words
          if(words.length>0){
            for(var i =0; i<words.length; i++){
              if(words[i]['translation']['validated']==true){
                hash['completed']++
              }
            }
          }
        }
    }
    if(hash['total']===0){
      return ""
    }
    else if(hash['completed']===0){
        return 0
    }
    else{
      var percentage = hash['completed']/(hash['total']/100)
      percentage=+percentage.toFixed(1)
      return percentage
    }
  },

  pageTotalCompleted: (state, getters, rootState, rootGetters) => (pageIndex) => {
    // returns the total and completed translations of the page given by the 'pageIndex'
    var hash = {total:0, completed:0}
    // sets the total according to the total received by the server
    hash['total']=state.languageTranslated[rootGetters.selected['language']['index']]['sites'][rootGetters.selected['site']['index']]['pages'][pageIndex]['total']
    // list of words of the demanded page
    var words = state.languageTranslated[rootGetters.selected['language']['index']]['sites'][rootGetters.selected['site']['index']]['pages'][pageIndex]['words']
    // make sure if the page has words
    if(words.length>0){
      // Looping through the words and incrimenting if the translation is validated
      for (var i = 0; i < words.length; i++) {
        if(words[i]['translation']['validated']==true){
            hash['completed']++
        }
      }
    }
    if(hash['total']===0){
      return ""
    }
    else if(hash['completed']===0){
        return 0
    }
    else{
      var percentage = hash['completed']/(hash['total']/100)
      percentage=+percentage.toFixed(1)
      return percentage
    }
  }

}
