import Vue from 'vue'

export default {

  teacherAdminSchools(context, data) {
        return new Promise((resolve, reject) => {
            // Do something here... lets say, a http call using vue-resource
            Vue.prototype.$http.get('./teacheradminschools').then(function(response){
                // http success, call the mutator and change something in state
                context.commit('teacherAdminSchools',response.data )
                resolve(response);  // Let the calling function know that http is done. You may send some data back
            }, error => {
                // http failed, let the calling function know that action did not work out
                reject(error);
            })
        })
    }

}
