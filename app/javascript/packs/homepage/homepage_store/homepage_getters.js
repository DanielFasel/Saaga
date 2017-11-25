import Vue from 'vue'

export default {

  // mobile menu getter
	showMenuDrawer(state){
		return state.showMenuDrawer
	},
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
