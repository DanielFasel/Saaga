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
	}

}
