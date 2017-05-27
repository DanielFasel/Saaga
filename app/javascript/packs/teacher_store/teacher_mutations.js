export default {

	saveClass(state, className){
		state.normalClasses.push(className)
	},

	normalClasses(state, data){
		state.normalClasses=[]
		var array = data
		var arrayLength = array.length;
		for (var i = 0; i < arrayLength; i++) {
    		//Do something
    		state.normalClasses.push(array[i])
		}
	}
}