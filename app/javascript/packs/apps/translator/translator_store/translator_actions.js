import Vue from 'vue'

export default {

  languages(context, data) {
    // goes get the languages available to the translator
    return new Promise((resolve, reject) => {
      Vue.prototype.$http.get('/translator/assigned_languages').then(function (response) {
        // commit if success
        context.commit('assigned_languages',response.data)
        // Is resolve necessary? Needs to be checked!!
        resolve(response);
      }, error => {
        // http failed, let the calling function know that action did not work out
        reject(error);
      })
    })
  },

  user(context, data){
    // Get user data and commit it
    Vue.prototype.$http.get('/user_infos')
      .then(function (response) {
        context.commit('user',response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  },
}
