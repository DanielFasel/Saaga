import Vue from 'vue'
import Vuex from 'vuex'

import getters from"./student_getters.js"
import mutations from "./student_mutations.js"
import actions from"./student_actions.js"


Vue.use(Vuex)

export const store = new Vuex.Store({

	state: {

	},

	getters,
	mutations,
	actions

})