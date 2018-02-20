import Vue from 'vue'
export default{

  languageTranslated(context, data){
    var language=data
    Vue.prototype.$http.get('/languages',{params:{language: data}} )
      .then(function (response) {
        // Create hash to combine the language with the returned language
        var hash={}
        hash[language]=response.data
        // commit the hash
        context.commit('languageTranslated',hash)
      })
      .catch(function (error) {
        console.log(error);
      })
    }

}
