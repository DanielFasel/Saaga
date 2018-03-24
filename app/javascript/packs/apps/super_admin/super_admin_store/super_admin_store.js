import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getters from"./super_admin_getters.js"
import mutations from "./super_admin_mutations.js"
import actions from"./super_admin_actions.js"

// importing all the modules
import {layout} from "./modules/layout/layout_store.js"
import {translator} from "./modules/translator/translator_store.js"


export const store = new Vuex.Store({

	modules: {
		layout,
		translator
	},
	state: {

	},

	getters,
	mutations,
	actions

})
