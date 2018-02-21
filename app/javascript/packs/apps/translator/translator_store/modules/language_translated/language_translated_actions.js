import Vue from 'vue'
export default{

  languageTranslated(context, data){
    // What is this ? Needs to be checked and annotated for better understanding.
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
    },

    postTranslation(context, data){

      // Post promise needs to come here
      console.log("Almost saved! Maybe Tomorrow :) ")
    }

}
