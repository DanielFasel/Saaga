export default {

	saveNormalClass(state, className){
		state.normalClasses.push(className)
	},

	deleteNormalClass(state,classid){
		var index = state.normalClasses.findIndex(x => x.id==classid);
		if (index > -1) {
    		state.normalClasses.splice(index, 1);
		}
	},

	normalClasses(state, data){
		state.normalClasses=[]
		var array = data
		var arrayLength = array.length;
		for (var i = 0; i < arrayLength; i++) {
    		//Do something
    		state.normalClasses.push(array[i])
		}
	},

	showHelpModal(state){
		if (state.showHelpModal==false)
			state.showHelpModal=true
		else
			state.showHelpModal=false
	}
}