<template>
	<div>
		<button id="show-modal" @click="openModal">Settings</button>
		<modal-window v-if="showModal" @close="closeModal">
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

  			closeModal: function(){
  				this.$store.dispatch('closeModal')
  			},
  			openModal: function(){
  				this.$store.dispatch('openModal')
  			}
  		},

  		computed:{
  				
  				showModal(){
  					this.$store.getters.showModal
  				}
  				
  		}
  		
	}
</script>

<style>
	
</style>