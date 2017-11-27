import Vue from 'vue'

export default {

  //Mobile menu drawer mutation
  toggleMenuDrawer(state){
    if (state.showMenuDrawer==false)
      state.showMenuDrawer=true
    else
      state.showMenuDrawer=false
  },
  toggleMenuSideMobile(state){
    if (state.showMenuSideMobile==false)
      state.showMenuSideMobile=true
    else
      state.showMenuSideMobile=false
  },
  menuSide(state, data){
    state.menuSide=data
  },
  currentPage(state,data){
    state.currentPage=data
  }

}
