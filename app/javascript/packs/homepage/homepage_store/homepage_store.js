import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getters from"./homepage_getters.js"
import mutations from "./homepage_mutations.js"
import actions from"./homepage_actions.js"

//Importing all the modules
import {layout} from "./modules/layout/layout_store.js"

export const store = new Vuex.Store({


	modules: {
		layout
    },

	state: {
		menuSide:"",
		showMenuSideMobile:false,
		currentPage:""

	},

	getters,
	mutations,
	actions

})
