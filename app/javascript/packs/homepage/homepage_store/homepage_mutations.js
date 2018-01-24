import Vue from 'vue'

export default {

  //Mobile menu drawer mutation

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
  },

  testpage(state, data){
    state.testpage=data
  }

}
