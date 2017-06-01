<template>
	
	<modal-window v-if="showSettingsModal">
		<div slot="body">
		<button @click="SettingsClose">close</button>
		Settings</div>
 	</modal-window>
 
</template>

<script>
	import ModalWindow from "../../../general_helpers/modal_window/modal_window.vue"
	
	import {mapGetters} from 'vuex'

	export default {

		components: {
			"modal-window": ModalWindow
		},
		
		data: function () {
    		return {
     			
    		}
  		},

  		methods: {
  			SettingsClose: function(){
  				this.$store.dispatch('layout/modalDrawer/showSettingsModal')
  			}
  		},

  		computed: {
    		...mapGetters('layout/modalDrawer',[
        	'showSettingsModal'
      ])
  		}
	}
</script>

<style>
	
</style>