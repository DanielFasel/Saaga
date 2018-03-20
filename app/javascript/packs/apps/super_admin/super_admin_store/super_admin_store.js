import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getters from"./super_admin_getters.js"
import mutations from "./super_admin_mutations.js"
import actions from"./super_admin_actions.js"

// importing all the modules
import {layout} from "./modules/layout/layout_store.js"


export const store = new Vuex.Store({

	modules: {
		layout
	},
	state: {
		//languages the translator has access to
		languages:[]
	},

	getters,
	mutations,
	actions

})
