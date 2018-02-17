import Vue from 'vue'
export default{

  languageTranslated(context, data){
    Vue.prototype.$http.get('/languages',{params:{language: data}} )
      .then(function (response) {
        console.log("fetched")
        context.commit('languageTranslated',response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
    }

}
