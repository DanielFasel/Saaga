<template>

	<modal-window modalToggleFunction="showSettingsModal" v-if="showSettingsModal">
		<div slot="body">
		Settings
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
        	'showSettingsModal'
      		])
  		}
	}
	
</script>

<style>
	
</style>