import Vue from 'vue'

export default {
  // mobile drawer menu action
  toggleMenuDrawer(context){
        return context.commit('toggleMenuDrawer')
  },

  // Side menu action
  toggleMenuSide(context){
        return context.commit('toggleMenuSide')
    }
}
