<template>

	<modal-window modalToggleFunction="toggleAddCoursesModal" v-if="showAddCoursesModal">
		<div slot="body">
			<input v-model="addSchool" placeholder="Add School">
			<p>{{addSchool}}</p>
			<button @click="saveSchool" >Save</button>
		</div>
	</modal-window>

</template>

<script>

	import ModalWindow from "../../../../general_helpers/modal_window/modal_window.vue"
	import {mapGetters} from 'vuex'

	export default {

		data: function(){
			return {
				addSchool: ""
			}
		},

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
