import Vue from 'vue'

export default {

  saveTeacherAdminSchools(context, data) {
        return new Promise((resolve, reject) => {
            // Do something here... lets say, a http call using vue-resource
            Vue.prototype.$http.get('./teacheradminschools').then(function(response){
                // http success, call the mutator and change something in state

                var receivedData = [response.data]
                console.log(response.data)
                var schools = receivedData[0]
                console.log(schools)
                var schoolsLength = schools.length
                var schoolStudent = []
                var counter = 0
                studentfunction()

                function studentfunction(){
                  if (counter<schoolsLength){
                    var school_id = schools[counter].id
                    asyncfunction(school_id)
                    }
                  else{
                    asyncfunction()
                    }
                  }


                function asyncfunction(id){
                  if (counter<schoolsLength){
                    Vue.prototype.$http.get('./schoolstudents/'+id).then(function(response){
                      var data = [response.data]
                      Array.prototype.push.apply(schoolStudent,data)
                      counter+=1
                      studentfunction()

                      resolve(response); // Let the calling function know that http is done. You may send some data back
                    }, error => {
                      reject(error);
                    })}
                  else{
                    var schoolStudents = []
                    schoolStudents.push(schools)
                    schoolStudents.push(schoolStudent)

                    context.commit('saveTeacherAdminSchools',schoolStudents )
                  }
                }


                resolve(response);  // Let the calling function know that http is done. You may send some data back
            }, error => {
                // http failed, let the calling function know that action did not work out
                reject(error);
            })
        })
    }
  }
