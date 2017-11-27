import Vue from 'vue'

export default {
  // mobile drawer menu action
  toggleMenuDrawer(context){
        return context.commit('toggleMenuDrawer')
    },
  toggleMenuSideMobile(context){
    return context.commit('toggleMenuSideMobile')
  },
  menuSide(context, data){
    return context.commit('menuSide', data)
  },
  currentPage(context, data){
    return context.commit('currentPage', data)
  }

}
