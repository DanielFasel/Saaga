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
    console.log("reached Actions")
    return  new Promise((resolve,reject) => {

    // request for the languages that a translator has access to
    Vue.prototype.$http.get('/languages',{params:{ name: data}} )
      .then(function (response) {
        console.log("fetched")

        context.commit('testpage',response.data)
        context.commit('readyToRender')
        resolve()
      })
      .catch(function (error) {
        console.log(error);
      })

    }, error => {
      reject(error)
    })
  }

}
