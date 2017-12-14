import getters from './general_layout_getters.js'
import mutations from './general_layout_mutations.js'
import actions from './general_layout_actions.js'


export const generalLayout = {
  // This makes your getters, mutations, and actions accessed by, eg: 'myModule/myModularizedNumber' instead of mounting getters, mutations, and actions to the root namespace.
	namespaced:true,
	state: {
		// Padding for a smooth transition when opening modals and removinf scroll bar (avoids it to "jump")
		overflowPadding: 0
	},
	getters,
	mutations,
	actions
}
