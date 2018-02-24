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
      state.selected['site']['name']=selection['data']['name']
      state.selected['site']['index']=selection['data']['index']
    }
    else if (selection['type']==2){
      state.selected['page']['name']=selection['data']['name']
      state.selected['page']['index']=selection['data']['index']
    }
    else if(selection['type']==3){
      state.selected['word']['name']=selection['data']['name']
      state.selected['word']['index']=selection['data']['index']
    }

  }
}
