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
	showAddCoursesModal(state){
		if (state.showAddCoursesModal==false)
			state.showAddCoursesModal=true
		else
			state.showAddCoursesModal=false
	}

}
