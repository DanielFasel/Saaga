import Vue from 'vue'

export default {
  // mobile drawer menu action

  toggleMenuSideMobile(context){
    return context.commit('toggleMenuSideMobile')
  },
  menuSide(context, data){
    return context.commit('menuSide', data)
  },
  currentPage(context, data){
    return context.commit('currentPage', data)
  },

  testpage(context, data){
    // request for the languages that a translator has access to
    console.log(data)
    Vue.prototype.$http.get('/languages',{params:{ name: data}} )
      .then(function (response) {
      
        context.commit('testpage',response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}
