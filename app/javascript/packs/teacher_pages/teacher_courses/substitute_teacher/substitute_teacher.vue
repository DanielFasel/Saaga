<template>

		<modal-window modalToggleFunction="showSubstituteTeacherModal" v-if="showSubstituteTeacherModal">
		<div slot="body">Teacher</div>
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
				'showSubstituteTeacherModal'
			])
		}

	}

</script>

<style>

</style>
