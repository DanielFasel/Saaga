import Vue from 'vue'

export default {

  //Mobile menu drawer mutation
  toggleMenuDrawer(state){
    if (state.showMenuDrawer==false)
      state.showMenuDrawer=true
    else
      state.showMenuDrawer=false
  },

  //Menu Side drawer mutation
  toggleMenuSide(state){
    if (state.showMenuSide==false)
      state.showMenuSide=true
    else
      state.showMenuSide=false
  }
}
