<template>
	<div>
		<button id="show-modal" @click="openModal">Settings</button>
		<modal-window v-if="showModal">
		<div slot="body">Settings</div>
 		</modal-window>
 	</div>
</template>

<script>
	import ModalWindow from "../../../general_helpers/modal_window/modal_window.vue"
	


	export default {

		components: {
			"modal-window": ModalWindow
		},
		

  		methods: {

  			openModal: function(){
  				this.$store.dispatch('openModal')
  			}
  		},

  		computed:{
  				
  				showModal(){
  					return this.$store.getters.showModal
  				}
  				
  		}
  		
	}
</script>

<style>
	
</style>