export default {

	// overflow hidden
	overflowHidden(state){
		return state.overflowHidden
	},

	// mobile menu getter
	showMenuDrawer(state){
		return state.showMenuDrawer
	},

	// utility modal getters
	showSettingsModal(state){
		return state.showSettingsModal
	},

	showHelpModal (state)	{
		return state.showHelpModal
	},

	// my courses getters
	showStudentManagementModal (state)	{
		return state.showStudentManagementModal
	},
	showCourseManagementModal (state)	{
		return state.showCourseManagementModal
	},
	showSubstituteTeacherModal (state)	{
		return state.showSubstituteTeacherModal
	}

}
