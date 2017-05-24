<template>
	<div class="content_container" id="global_container">
		<global-search-bar></global-search-bar>
		<div>Region selector + help</div>
		<global-horizontal-category-list></global-horizontal-category-list>


		<button id="show-modal" @click="showModal = true">Show Modal</button>
		<modal-window v-if="showModal" @close="onClose">
 		</modal-window>
	</div>
</template>



<script>
	
	import GlobalSearchBar from "./global_search_bar/global_search_bar.vue"
	import GlobalHorizontalCategoryList from "./global_horizontal_category_list/global_horizontal_category_list.vue"
	import ModalWindow from "../modal_window/modal_window.vue"
	
	export default {

		components: {
			"global-search-bar": GlobalSearchBar,
			"global-horizontal-category-list": GlobalHorizontalCategoryList,
			"modal-window": ModalWindow
		},

		data: function () {
    		return {
     			showModal: false
    		}
  		},

  		methods: {
  			onClose: function(){
  				this.showModal = false
  			}
  		}
	}
</script>



<style scoped>
	

</style>

<style>
	#global_container{
		display: flex;
		flex-direction: column;
	}
</style>