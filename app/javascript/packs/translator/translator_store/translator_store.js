import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getters from"./translator_getters.js"
import mutations from "./translator_mutations.js"
import actions from"./translator_actions.js"



//Importing all the modules

import {layout} from "./modules/layout/layout_store.js"
import {translations} from "./modules/translations/translations_store.js"

export const store = new Vuex.Store({


	modules: {
        layout,
				translations
    },

	state: {
			//languages the translator can translate and has access to
			languages:[],
	},

	getters,
	mutations,
	actions

})
