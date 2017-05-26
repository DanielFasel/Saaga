import Vue from 'vue'
import Vuex from 'vuex'

import getters from"./teacher_getters.js"
import mutations from "./teacher_mutations.js"
import actions from"./teacher_actions.js"


Vue.use(Vuex)

export const store = new Vuex.Store({

	state: {
		showModal: false
	},

	getters,
	mutations,
	actions

})