import getters from './teacher_spec_getters.js'
import mutations from './teacher_spec_mutations.js'
import actions from './teacher_spec_actions.js'

export const teacherSpec = {
  // This makes your getters, mutations, and actions accessed by, eg: 'myModule/myModularizedNumber' instead of mounting getters, mutations, and actions to the root namespace.

	namespaced:true,
  state: {
		teacherAdminSchools: [],
		adminSchools: []
  },
  getters,
  mutations,
  actions
  }
