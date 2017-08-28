import Vue from 'vue'

export default {

  //Mobile menu drawer mutation
  toggleMenuDrawer(state){
    if (state.showMenuDrawer==false)
      state.showMenuDrawer=true
    else
      state.showMenuDrawer=false
  }
}
