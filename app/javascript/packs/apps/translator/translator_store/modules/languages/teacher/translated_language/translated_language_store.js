import getters from './translated_language_getters.js'
import mutations from './translated_language_mutations.js'
import actions from './translated_language_actions.js'


export const translatedLanguage = {
  // This makes your getters, mutations, and actions accessed by, eg: 'myModule/myModularizedNumber' instead of mounting getters, mutations, and actions to the root namespace.
	namespaced:true,
	state: {

	},
	getters,
	mutations,
	actions
}
