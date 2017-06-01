<template>
	<div>
		<button id="show-modal" @click="handler">Help</button>
		<modal-window v-show="showHelpModal">
		<div slot="body">Help</div>
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
     			
    		}
  		},

  		methods: {

  			handler: function(){
  				this.toggleMenuDrawer()
  				this.toggleHelpModal()
  				
  				
  			},
			toggleMenuDrawer: function(){
			
					this.$store.dispatch('showMenuDrawer')
				
				
    		},
    		toggleHelpModal: function(){
				this.$store.dispatch('showHelpModal')

    		}
    	},

    	computed: {

    		showHelpModal:function(){
    			return this.$store.getters.showHelpModal
    		}
    	}
	}
</script>

<style>
	
</style>