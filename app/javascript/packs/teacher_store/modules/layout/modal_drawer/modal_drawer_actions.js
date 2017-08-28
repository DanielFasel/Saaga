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

    // my courses modal actions
    toggleStudentManagementModal(context){
        return context.commit('toggleStudentManagementModal')
    },
    toggleCourseManagementModal(context){
        return context.commit('toggleCourseManagementModal')
    },
    toggleSubstituteTeacherModal(context){
        return context.commit('toggleSubstituteTeacherModal')
    }
}
