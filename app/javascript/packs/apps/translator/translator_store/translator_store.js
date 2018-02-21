import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getters from"./translator_getters.js"
import mutations from "./translator_mutations.js"
import actions from"./translator_actions.js"



//Importing all the modules

import {layout} from "./modules/layout/layout_store.js"
import {languageTranslated} from "./modules/language_translated/language_translated_store.js"

export const store = new Vuex.Store({


	modules: {
        layout,
				languageTranslated
    },

	state: {
			//languages the translator has access to
			languages:[],
			// Info about the translator
			user:{},
			// object telling which language/site/page got selected
			selected: {language:"", site:{name:"", index:""}, page:{name:"",index:""}}
	},

	getters,
	mutations,
	actions

})
