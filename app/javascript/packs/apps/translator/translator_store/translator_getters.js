export default {

  languages(state){
    // gets list of languages available to the translator
		return state.assigned_languages
	},

  user(state){
    // gets user data
    return state.user
  },

  selected(state){
    // gets on object of the selected (language/site/page/word)
  return state.selected
  },

  showTreeNavigation(state){
    // boolean to display or not the Tree navigation (In case no language was selected it doesn't show it)
    if(state.selected["language"]['name']==""){
      return false
    }
    else {
      return true
    }
  },

  showLanguageSelection(state){
    // Boolean in case the language selection needs to be displayed (In case no language was selected)
    if(state.selected["language"]['name']==""){
      return true
    }
    else{
      return false
    }
  },

  showSiteSelection(state){
    // Boolean to display or not the site selection
    if(state.selected["language"]['name']==""){
      return false
    }
    else{
      return true
    }
  },

  showPageSelection(state){
    // Boolean to display or not the page selection
    if(state.selected["site"]["name"]==""){
      return false
    }
    else{
      return true
    }
  },

  showSitePageSelection(state){
    // Boolean to displauy or not the SitePage selection (in case a page was selected the selection is not displayed anymore)
    if(state.selected["page"]['name']==""){
      return true
    }
    else {
      return false
    }
  },

  showTranslations(state){
    // Boolean to display or not the translations (Might be able to combine this getter and the one above and just make a negative v-if)
    if(state.selected["page"]['name']==""){
      return false
    }
    else{
      return true
    }
  }
}
