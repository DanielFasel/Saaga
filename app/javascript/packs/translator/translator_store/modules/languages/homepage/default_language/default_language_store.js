import getters from './default_language_getters.js'
import mutations from './default_language_mutations.js'
import actions from './default_language_actions.js'


export const defaultLanguage = {
  // This makes your getters, mutations, and actions accessed by, eg: 'myModule/myModularizedNumber' instead of mounting getters, mutations, and actions to the root namespace.
	namespaced:true,
	state: {

	},
	getters,
	mutations,
	actions
}
