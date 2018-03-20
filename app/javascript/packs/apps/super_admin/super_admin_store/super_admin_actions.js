import Vue from 'vue'

export default {
  languages(context, data) {
    // goes get the languages available to the translator
    return new Promise((resolve, reject) => {
      Vue.prototype.$http.get('/super_admin/translator/language_validations').then(function (response) {
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
}
