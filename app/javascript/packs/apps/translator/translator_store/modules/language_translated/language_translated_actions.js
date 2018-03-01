import Vue from 'vue'
export default{

  languageTranslated({commit, state, rootState}, data){
    // What is this ? Needs to be checked and annotated for better understanding.
    var language=data
    Vue.prototype.$http.get('/languages',{params:{language: data}} )
      .then(function (response) {
    
        if(state.languageTranslated.length < rootState.languages.length){
        commit('languageTranslated',response.data)
      }
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
