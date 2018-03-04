import getters from './language_translated_getters.js'
import mutations from './language_translated_mutations.js'
import actions from './language_translated_actions.js'


export const languageTranslated = {
  // This makes your getters, mutations, and actions accessed by, eg: 'myModule/myModularizedNumber' instead of mounting getters, mutations, and actions to the root namespace.
	namespaced:true,
	state: {
			//Language that needs to be translated
			languageTranslated: [],
			// default language (english)
			defaultLanguageTranslated:[]
	},
	getters,
	mutations,
	actions
}
