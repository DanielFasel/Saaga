<template>

	<modal-window modalToggleFunction="showAddCoursesModal" v-if="showAddCoursesModal">
		<div slot="body">
			Add Courses
		</div>
	</modal-window>

</template>

<script>

	import ModalWindow from "../../../general_helpers/modal_window/modal_window.vue"
	import {mapGetters} from 'vuex'

	export default {

		components: {
			"modal-window": ModalWindow
		},
		computed: {

			...mapGetters('layout/modalDrawer',[
				'showAddCoursesModal'
			])
		}

	}

</script>

<style>

</style>
