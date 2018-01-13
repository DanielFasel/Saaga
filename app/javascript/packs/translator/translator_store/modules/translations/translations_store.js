import {homepage} from './homepage/homepage_store.js'
import {student} from './student/student_store.js'
import {teacher} from './teacher/teacher_store.js'

export const translations = {
  // This makes your getters, mutations, and actions accessed by, eg: 'myModule/myModularizedNumber' instead of mounting getters, mutations, and actions to the root namespace.

	namespaced:true,

	modules: {
		homepage,
    student,
    teacher
	}
  }
