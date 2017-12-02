export default {

	//Mobile menu drawer mutation
	toggleMenuDrawer(state){
		// modal/drawer switch
		if (state.showMenuDrawer==false)
			state.showMenuDrawer=true
		else
			state.showMenuDrawer=false
	},

	// utility modal mutations
	toggleSettingsModal(state){
		// overflowHidden switch
		if (state.overflowHidden==false)
			state.overflowHidden=true
		else
			state.overflowHidden=false

		// modal/drawer switch
		if (state.showSettingsModal==false)
			state.showSettingsModal=true
		else
			state.showSettingsModal=false
	},
	toggleHelpModal(state){
		// overflowHidden switch
		if (state.overflowHidden==false)
			state.overflowHidden=true
		else
			state.overflowHidden=false

		// modal/drawer switch
		if (state.showHelpModal==false)
			state.showHelpModal=true
		else
			state.showHelpModal=false
	},

	// my courses modal mutations
	toggleStudentManagementModal(state){
		// overflowHidden switch
		if (state.overflowHidden==false)
			state.overflowHidden=true
		else
			state.overflowHidden=false

		// modal/drawer switch
		if (state.showStudentManagementModal==false)
			state.showStudentManagementModal=true
		else
			state.showStudentManagementModal=false
	},
	toggleCourseManagementModal(state){
		// overflowHidden switch
		if (state.overflowHidden==false)
			state.overflowHidden=true
		else
			state.overflowHidden=false

		// modal/drawer switch
		if (state.showCourseManagementModal==false)
			state.showCourseManagementModal=true
		else
			state.showCourseManagementModal=false
	},
	toggleSubstituteTeacherModal(state){
		// overflowHidden switch
		if (state.overflowHidden==false)
			state.overflowHidden=true
		else
			state.overflowHidden=false

		// modal/drawer switch
		if (state.showSubstituteTeacherModal==false)
			state.showSubstituteTeacherModal=true
		else
			state.showSubstituteTeacherModal=false
	}

}
