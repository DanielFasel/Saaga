export default {

	//overflowPadding getter
	overflowPadding(state){
		return state.overflowPadding
	},

	//The overflowPadding value at all time (when modal closed or opened)
	overflowPaddingLive(state){
		return state.overflowPaddingLive
	}

}
