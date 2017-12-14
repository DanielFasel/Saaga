export default {

	//overflowPadding mutation
	overflowPadding(state, data){
		state.overflowPadding=data
	},
	//The overflowPadding value at all time (when modal closed or opened) mutation
	overflowPaddingLive(state, data){
		state.overflowPaddingLive=data
	}

}
