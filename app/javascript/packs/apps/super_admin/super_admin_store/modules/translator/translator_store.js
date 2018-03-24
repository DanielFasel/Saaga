import getters from './translator_getters.js'
import mutations from './translator_mutations.js'
import actions from './translator_actions.js'


export const translator = {
  // This makes your getters, mutations, and actions accessed by, eg: 'myModule/myModularizedNumber' instead of mounting getters, mutations, and actions to the root namespace.
	namespaced:true,
	state : {
    //languages the translator has access to
		languages:[]
	},
	getters,
	mutations,
	actions
}
