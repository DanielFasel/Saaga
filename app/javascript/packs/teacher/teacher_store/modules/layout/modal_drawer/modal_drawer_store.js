import getters from './modal_drawer_getters.js'
import mutations from './modal_drawer_mutations.js'
import actions from './modal_drawer_actions.js'


export const modalDrawer = {
  // This makes your getters, mutations, and actions accessed by, eg: 'myModule/myModularizedNumber' instead of mounting getters, mutations, and actions to the root namespace.
	namespaced:true,
	state: {
		// overflow hidden
		overflowHidden: false,
		// mobile drawer menu
		showMenuDrawer: false,

		//utility modals
		showSettingsModal: false,
		showHelpModal: false,

		//my courses modals
		showStudentManagementModal: false,
		showCourseManagementModal: false,
		showSubstituteTeacherModal: false
	},
	getters,
	mutations,
	actions
}
