export default {

	//Mobile menu drawer mutation
	showMenuDrawer(state){
		if (state.showMenuDrawer==false)
			state.showMenuDrawer=true
		else
			state.showMenuDrawer=false
	},

	// utility modal mutations
	showSettingsModal(state){
		if (state.showSettingsModal==false)
			state.showSettingsModal=true
		else
			state.showSettingsModal=false
	},
	showHelpModal(state){
		if (state.showHelpModal==false)
			state.showHelpModal=true
		else
			state.showHelpModal=false
	},

	// my courses modal mutations
	showStudentManagementModal(state){
		if (state.showStudentManagementModal==false)
			state.showStudentManagementModal=true
		else
			state.showStudentManagementModal=false
	},
	showCourseManagementModal(state){
		if (state.showCourseManagementModal==false)
			state.showCourseManagementModal=true
		else
			state.showCourseManagementModal=false
	},
	showSubstituteTeacherModal(state){
		if (state.showSubstituteTeacherModal==false)
			state.showSubstituteTeacherModal=true
		else
			state.showSubstituteTeacherModal=false
	}

}