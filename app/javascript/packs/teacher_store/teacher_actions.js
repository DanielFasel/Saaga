import Vue from 'vue'
// Axios and default settings
import axios from 'axios'
let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['X-CSRF-Token'] = token
axios.defaults.headers.common['Accept'] = 'application/json'
Vue.prototype.$http = axios


export default {

	 saveNormalClasses(context, data) {
        return new Promise((resolve, reject) => {
            // Do something here... lets say, a http call using vue-resource
            Vue.prototype.$http.post('./normalclasses',{name: data})
  				.then(function (response) {
    			   // http success, call the mutator and change something in state
                console.log(response.data)
                context.commit('saveNormalClass',response.data )
                resolve(response);  // Let the calling function know that http is done. You may send some data back
            }, error => {
                // http failed, let the calling function know that action did not work out
                reject(error);
            })
        })
    },
	   normalClasses(context, data) {
        return new Promise((resolve, reject) => {
            // Do something here... lets say, a http call using vue-resource
            Vue.prototype.$http.get('./normalclasses').then(function(response){
                // http success, call the mutator and change something in state
                
                context.commit('normalClasses',response.data )
                resolve(response);  // Let the calling function know that http is done. You may send some data back
            }, error => {
                // http failed, let the calling function know that action did not work out
                reject(error);
            })
        })
    },

    deleteNormalClasses(context, data){

    	return new Promise((resolve, reject) => {
            // Do something here... lets say, a http call using vue-resource
            Vue.prototype.$http.delete('./normalclasses/'+ data).then(function(response){
                // http success, call the mutator and change something in state

            
                context.commit('deleteNormalClass',data )

                resolve(response);  // Let the calling function know that http is done. You may send some data back
            }, error => {
                // http failed, let the calling function know that action did not work out
                reject(error);
            })
        })
    }
	
}