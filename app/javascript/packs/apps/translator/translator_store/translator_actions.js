import Vue from 'vue'

export default {

  languages(context, data) {

    // request for the languages that a translator has access to
    Vue.prototype.$http.get('/translatorlanguages')
      .then(function (response) {
        context.commit('languages',response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

   },
   translations(context, data){
     Vue.prototype.$http.get('/languages',{params:{language: data}} )
       .then(function (response) {
         console.log("fetched")
         context.commit('translations',response.data)

       })
       .catch(function (error) {
         console.log(error);
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
