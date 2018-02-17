import getters from './language_default_getters.js'
import mutations from './language_default_mutations.js'
import actions from './language_default_actions.js'


export const languageDefault = {
  // This makes your getters, mutations, and actions accessed by, eg: 'myModule/myModularizedNumber' instead of mounting getters, mutations, and actions to the root namespace.
	namespaced:true,
	state: {

	},
	getters,
	mutations,
	actions
}
