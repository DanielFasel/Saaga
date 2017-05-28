<template>

	<div class="content_container" id="global_container">
		<global-search-bar></global-search-bar>
		<div>Region selector + help</div>
		<global-horizontal-category-list></global-horizontal-category-list>
	</div>

</template>



<script>
	
	import GlobalSearchBar from "./global_search_bar/global_search_bar.vue"
	import GlobalHorizontalCategoryList from "./global_horizontal_category_list/global_horizontal_category_list.vue"

	
	export default {

		components: {
			"global-search-bar": GlobalSearchBar,
			"global-horizontal-category-list": GlobalHorizontalCategoryList
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