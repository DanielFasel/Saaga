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


    postTranslation({commit}, data){
        Vue.prototype.$http.post('/languages', data )
          .then(function (response) {

            if(data['type']=='translation'){
              data['userId']=response.data['user_id']
              data['translation']=response.data['translation']
              data['validated']=response.data['validated']
              data['temporary']=response.data['temporary']
              commit('saveTranslation', data)
            }
          })
          .catch(function (error) {
            console.log(error);
          })
    },

    wordLength(context,data){
      context.commit('wordLength',data)
    }
}
