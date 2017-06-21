export default {

	// mobile drawer menu action
	showMenuDrawer(context){
        return context.commit('showMenuDrawer')
    },

    // utility modal actions
	showSettingsModal(context){
        return context.commit('showSettingsModal')
    },
    showHelpModal(context){
        return context.commit('showHelpModal')
    },

    // my courses modal actions
    showAddCoursesModal(context){
        return context.commit('showAddCoursesModal')
    }
}
