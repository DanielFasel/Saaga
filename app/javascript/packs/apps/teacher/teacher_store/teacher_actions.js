
import Vue from 'vue'

export default {

	 saveSchools(context, data) {
        return new Promise((resolve, reject) => {
            // Do something here... lets say, a http call using vue-resource
            Vue.prototype.$http.post('./schools',{name: data})
  				.then(function (response) {
    			   // http success, call the mutator and change something in state
                console.log(response.data)
                context.commit('saveSchools',response.data )
                resolve(response);  // Let the calling function know that http is done. You may send some data back
            }, error => {
                // http failed, let the calling function know that action did not work out
                reject(error);
            })
        })
    },

	schools(context, data) {
        return new Promise((resolve, reject) => {
            // Do something here... lets say, a http call using vue-resource
            Vue.prototype.$http.get('./schools').then(function(response){
                // http success, call the mutator and change something in state
								console.log(response.data)
                context.commit('schools',response.data )
                resolve(response);  // Let the calling function know that http is done. You may send some data back
            }, error => {
                // http failed, let the calling function know that action did not work out
                reject(error);
            })
        })
    },

    deleteSchools(context, data){

    	return new Promise((resolve, reject) => {
            // Do something here... lets say, a http call using vue-resource
            Vue.prototype.$http.delete('./schools/'+ data).then(function(response){
                // http success, call the mutator and change something in state
                context.commit('deleteSchools',data )
                resolve(response);  // Let the calling function know that http is done. You may send some data back
            }, error => {
                // http failed, let the calling function know that action did not work out
                reject(error);
            })
        })
    },

    showHelpModal(context){
        return context.commit('showHelpModal')
    }

}
