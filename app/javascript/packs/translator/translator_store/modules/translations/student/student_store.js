import {defaultLanguage} from './default_language/default_language_store.js'
import {translatedLanguage} from './translated_language/translated_language_store.js'

export const student = {
  // This makes your getters, mutations, and actions accessed by, eg: 'myModule/myModularizedNumber' instead of mounting getters, mutations, and actions to the root namespace.

	namespaced:true,

	modules: {
		defaultLanguage,
    translatedLanguage
	}
  }
