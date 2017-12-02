import Vue from 'vue'

export default {

  // mobile menu getter

	menuSide(state){
		return state.menuSide
	},
	showMenuSideMobile(state){
		return state.showMenuSideMobile
	},
	currentPage(state){
		return state.currentPage
	}
}
