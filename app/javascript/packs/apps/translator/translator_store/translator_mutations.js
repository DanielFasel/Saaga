export default {

  languages(state, languages){
    // Sets the languages available to the translator
    state.languages=languages
  },

  user(state, user){
    // Sets user data
    state.user=user
  },

  selected(state, selection){
    // Takes care of setting the selected object and empties the fields to deselect
    if(selection['type']==0){
      // Type 0 = Language selection
      state.selected['language']['name']=selection['data']['name']
      state.selected['language']['index']=selection['data']['index']
      // empties the other fields
      state.selected['site']['name']=""
      state.selected['site']['index']=0
      state.selected['page']['name']=""
      state.selected['page']['index']=0
      state.selected['word']['name']=""
      state.selected['word']['index']=0
    }
    else if(selection['type']==1){
      // Type 1 = Site selection
      state.selected['site']['name']=selection['data']['name']
      state.selected['site']['index']=selection['data']['index']
      // empties the other fields
      state.selected['page']['name']=""
      state.selected['page']['index']=0
      state.selected['word']['name']=""
      state.selected['word']['index']=0
    }
    else if (selection['type']==2){
      // Type 2 = Page selection
      state.selected['page']['name']=selection['data']['name']
      state.selected['page']['index']=selection['data']['index']
      // empties the other fields
      state.selected['word']['name']=""
      state.selected['word']['index']=0
    }
    else if(selection['type']==3){
      // Type 3 = Word selection
      state.selected['word']['name']=selection['data']['name']
      state.selected['word']['index']=selection['data']['index']
    }
  }

}
