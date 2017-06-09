<template>

		<modal-window modalToggleFunction="showCourseManagementModal" v-if="showCourseManagementModal">
			<div slot="body">hello</div>
 		</modal-window>

</template>

<script>

	import ModalWindow from "../../../general_helpers/modal_window/modal_window.vue"
	import {mapGetters} from 'vuex'

	export default {

		components: {
			"modal-window": ModalWindow
		},

		computed:{
			...mapGetters('layout/modalDrawer',[
				'showCourseManagementModal'
			])
		}
	}

</script>

<style>

</style>
