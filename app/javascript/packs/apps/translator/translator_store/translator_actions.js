import Vue from 'vue'

export default {

  languages(context, data) {
    return new Promise((resolve, reject) => {
                // Do something here... lets say, a http call using vue-resource
                Vue.prototype.$http.get('/translatorlanguages').then(function (response) {
                    // http success, call the mutator and change something in state
                    context.commit('languages',response.data)
                    resolve(response);  // Let the calling function know that http is done. You may send some data back
                }, error => {
                    // http failed, let the calling function know that action did not work out
                    reject(error);
                })
            })
        },

     user(context, data){
       Vue.prototype.$http.get('/userinfo')
         .then(function (response) {

           context.commit('user',response.data)
         })
         .catch(function (error) {
           console.log(error);
         })

       },



}
