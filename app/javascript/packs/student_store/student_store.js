import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getters from"./student_getters.js"
import mutations from "./student_mutations.js"
import actions from"./student_actions.js"

// importing all the modules
import {layout} from "./modules/layout/layout_store.js"


export const store = new Vuex.Store({

	modules: {
		layout
	},
	state: {

	},

	getters,
	mutations,
	actions

})
