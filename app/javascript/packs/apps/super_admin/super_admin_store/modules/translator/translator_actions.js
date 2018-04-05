import Vue from 'vue'

export default {
  languages(context, data) {
    // goes get the languages available to the translator
    return new Promise((resolve, reject) => {
      Vue.prototype.$http.get('/super_admin/translator/translator_languages').then(function (response) {
        // commit if success
        context.commit('languages',response.data)
        // Is resolve necessary? Needs to be checked!!
        resolve(response);
      }, error => {
        // http failed, let the calling function know that action did not work out
        reject(error);
      })
    })
  },

  validateLanguage(context, data){
    // updates the validate field of the languages and mutatates the response.data to update the vuex state
    return new Promise((resolve, reject) => {
      Vue.prototype.$http.post('/super_admin/translator/json_languages', {languageId: data}).then(function (response) {
        context.commit('updateLanguage',response.data)
        resolve(response);
      }, error => {
        // http failed, let the calling function know that action did not work out
        reject(error);
      })
    })
  }
}
