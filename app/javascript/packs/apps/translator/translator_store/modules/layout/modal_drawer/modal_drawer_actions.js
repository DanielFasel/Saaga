export default {

	// mobile drawer menu action
	toggleMenuDrawer(context){
        return context.commit('toggleMenuDrawer')
    },

    // utility modal actions
	toggleSettingsModal(context){
        return context.commit('toggleSettingsModal')
    },
    toggleHelpModal(context){
        return context.commit('toggleHelpModal')
    },

		toggleValidationAlert(context){
			return context.commit('toggleValidationAlert')
		}
}
