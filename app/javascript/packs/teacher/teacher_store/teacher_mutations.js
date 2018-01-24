export default {

	saveSchools(state, className){
		state.schools.push(className)
	},

	deleteSchools(state,classid){
		var index = state.schools.findIndex(x => x.id==classid);
		if (index > -1) {
    		state.schools.splice(index, 1);
		}
	},

	schools(state, data){

		state.schools=[]
		var array = data
		var arrayLength = array.length;
		for (var i = 0; i < arrayLength; i++) {
    		//Do something
    		state.schools.push(array[i])
				console.log(array[i])
		}
	},

	showHelpModal(state){
		if (state.showHelpModal==false)
			state.showHelpModal=true
		else
			state.showHelpModal=false
	}
}
