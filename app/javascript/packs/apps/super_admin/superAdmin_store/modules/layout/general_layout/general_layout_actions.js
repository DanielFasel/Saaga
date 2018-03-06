export default {

	// overflowPadding Action
	overflowPadding(context, data){
			return context.commit('overflowPadding', data)
	},

	//The overflowPadding value at all time (when modal closed or opened)
	overflowPaddingLive(context, data){
		return context.commit('overflowPaddingLive',data)
	}
}
