export default {

  teacherAdminSchools(state, data){
    state.schools=[]
    var array = data
    var arrayLength = array.length;
    for (var i = 0; i < arrayLength; i++) {
        //Do something
        state.teacherAdminSchools.push(array[i])
    }
  }

}
