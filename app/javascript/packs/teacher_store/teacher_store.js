import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getters from"./teacher_getters.js"
import mutations from "./teacher_mutations.js"
import actions from"./teacher_actions.js"


export const store = new Vuex.Store({

	state: {
		normalClasses: [],
		showMenuDrawer: false,
		rightMenuDrawer: true,
		backgroundBlur: false
	},

	getters,
	mutations,
	actions

})