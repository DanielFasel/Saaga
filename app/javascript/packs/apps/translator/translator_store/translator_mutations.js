export default {

  languages(state, languages){
    state.languages=languages
  },

  user(state, user){
    state.user=user
  },

  selected(state, selection){
    if(selection['type']==0){
      state.selected['language']=selection['data']
    }
    else if(selection['type']==1){
      state.selected['site']=selection['data']
    }
    else if (selection['type']==2){
      state.selected['page']=selection['data']
    }

  }
}
