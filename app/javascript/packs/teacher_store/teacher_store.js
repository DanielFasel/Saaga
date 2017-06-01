import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getters from"./teacher_getters.js"
import mutations from "./teacher_mutations.js"
import actions from"./teacher_actions.js"

//Importing all the modules

import {layout} from "./modules/layout/layout_store.js"

export const store = new Vuex.Store({


	modules: {
        layout
    },

	state: {
		normalClasses: [],
		rightMenuDrawer: true,
		backgroundBlur: false,
		showHelpModal: false
	},

	getters,
	mutations,
	actions

})