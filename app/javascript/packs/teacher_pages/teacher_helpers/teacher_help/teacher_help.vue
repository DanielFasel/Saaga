<template>

		<modal-window modalToggleFunction="showHelpModal" v-if="showHelpModal">
		  <div slot="body">
        Help
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
        'showHelpModal'
      ])
    }
  }
	

</script>

<style>
	
</style>