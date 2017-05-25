<template>
	<div>
		<button id="show-modal" @click="showModal = true">Add New Course</button>
		<modal-window v-if="showModal" @close="onClose">
		<div slot="body">Course</div>
 		</modal-window>
 	</div>
</template>

<script>
	import ModalWindow from "../../../general_helpers/modal_window/modal_window.vue"

	export default {

		components: {
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

<style>
	
</style>