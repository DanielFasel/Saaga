export default {

  saveTeacherAdminSchools(state, data){

    var data=data
    var schools=data[0]
    var students = data[1]
    var schoolsLength = schools.length

    var SchoolsStudents = []

    for (var i=0; i<schoolsLength;i++){
      var SchoolStudent = []
      SchoolStudent.push(schools[i])
      SchoolStudent.push(students[i])
      SchoolsStudents.push(SchoolStudent)
    }



    state.teacherAdminSchools=SchoolsStudents
    }

}
