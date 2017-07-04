import Vue from 'vue'

export default {

  saveTeacherAdminSchools(context, data) {
        return new Promise((resolve, reject) => {
            // Do something here... lets say, a http call using vue-resource
            Vue.prototype.$http.get('./teacheradminschools').then(function(response){
                // http success, call the mutator and change something in state


                var receivedData = []
                receivedData.push(response.data)
                var schools = receivedData[0]
                var schoolsLength = schools.length

                var schoolStudents = []

                for (var i=0; i<schoolsLength; i++){
                  var schoolStudent =[]
                  schoolStudent.push(schools[i])

                  var id = schools[i].id

                  Vue.prototype.$http.get('./schoolstudents/'+ id).then(function(response){
                    schoolStudent.push(response.data)
                    resolve(response); // Let the calling function know that http is done. You may send some data back
                  }, error => {
                    reject(error);
                  })

                  schoolStudents.push(schoolStudent)
                }


                context.commit('saveTeacherAdminSchools',schoolStudents )
                resolve(response);  // Let the calling function know that http is done. You may send some data back
            }, error => {
                // http failed, let the calling function know that action did not work out
                reject(error);
            })
        })
    }
