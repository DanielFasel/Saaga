import Vue from 'vue'

export default {

  languages(context, data) {

    // request for the languages that a translator has access to
    Vue.prototype.$http.get('/translatorlanguages')
      .then(function (response) {
        context.commit('languages',response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });

   }

}
