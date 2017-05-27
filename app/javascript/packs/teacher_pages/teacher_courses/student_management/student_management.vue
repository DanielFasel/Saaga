<template>
	<div>
		<button id="show-modal" @click="showModal = true">Student Managment</button>

		<modal-window v-if="showModal" @close="onClose">
		<div slot="body">
			<input v-model="className" placeholder="New Class">
			<p>{{className}}</p>
			<button @click="saveClass" >Save</button>
			<!--<ul>
  				<template v-for="item in items">
    				<li>{{ item.msg }}</li>
    				<li class="divider"></li>
  				</template>
			</ul>-->
		</div>
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
    			className: "",
     			showModal: false
    		}
  		},
  		methods: {
  			onClose: function(){
  				this.showModal = false
  			},
  			saveClass: function(){
  				
  				this.$store.dispatch('saveClass',this.className)
  			}
  		}
    }
	

</script>

<style>
	
</style>