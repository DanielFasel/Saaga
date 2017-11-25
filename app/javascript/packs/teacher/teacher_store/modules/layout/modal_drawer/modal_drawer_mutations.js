export default {

	//Mobile menu drawer mutation
	toggleMenuDrawer(state){
		if (state.showMenuDrawer==false)
			state.showMenuDrawer=true
		else
			state.showMenuDrawer=false
	},

	// utility modal mutations
	toggleSettingsModal(state){
		if (state.showSettingsModal==false)
			state.showSettingsModal=true
		else
			state.showSettingsModal=false
	},
	toggleHelpModal(state){
		if (state.showHelpModal==false)
			state.showHelpModal=true
		else
			state.showHelpModal=false
	},

	// my courses modal mutations
	toggleStudentManagementModal(state){
		if (state.showStudentManagementModal==false)
			state.showStudentManagementModal=true
		else
			state.showStudentManagementModal=false
	},
	toggleCourseManagementModal(state){
		if (state.showCourseManagementModal==false)
			state.showCourseManagementModal=true
		else
			state.showCourseManagementModal=false
	},
	toggleSubstituteTeacherModal(state){
		if (state.showSubstituteTeacherModal==false)
			state.showSubstituteTeacherModal=true
		else
			state.showSubstituteTeacherModal=false
	}

}
