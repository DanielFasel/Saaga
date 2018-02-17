export default {
  languages(state){
		return state.languages
	},

  user(state){
    return state.user
  },

  selected(state){
  return state.selected
},

  showTreeNavigation(state){
    if(state.selected["language"]==""){
      return false
    }
    else {
      return true
    }
  },

  showLanguageSelection(state){
    if(state.selected["language"]==""){
      return true
    }
    else{
      return false
    }
  },

  showSiteSelection(state){
    if(state.selected["language"]==""){
      return false
    }
    else{
      return true
    }
  },

  showPageSelection(state){
    if(state.selected["site"]==""){
      return false
    }
    else{
      return true
    }
  },

  showSitePageSelection(state){
    if(state.selected["page"]==""){
      return true
    }
    else {
      return false
    }
  }
}
