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
    showStudentManagementModal(context){
        return context.commit('showStudentManagementModal')
    },
    showCourseManagementModal(context){
        return context.commit('showCourseManagementModal')
    },
    showSubstituteTeacherModal(context){
        return context.commit('showSubstituteTeacherModal')
    }
}