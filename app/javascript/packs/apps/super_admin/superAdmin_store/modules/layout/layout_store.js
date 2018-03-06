import {modalDrawer} from './modal_drawer/modal_drawer_store.js'
import {generalLayout} from './general_layout/general_layout_store'
export const layout = {
  // This makes your getters, mutations, and actions accessed by, eg: 'myModule/myModularizedNumber' instead of mounting getters, mutations, and actions to the root namespace.

	namespaced:true,

	modules: {
		modalDrawer,
		generalLayout
	}
  }
