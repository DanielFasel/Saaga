<template>

	<div>
		<button id="show-modal" @click="showModal = true">Student Managment</button>

		<modal-window v-if="showModal" @close="onClose">
		  <div slot="body">
        <input v-model="className" placeholder="New Class">
        <p>{{className}}</p>
        <button @click="saveNormalClasses" >Save</button>

        <ul>
  				<template v-for="schoolclass in listClasses">
    				<li>{{ schoolclass.name }}</li>
    				<li><button @click="deleteNormalClasses(schoolclass)" >delete</button></li>
  				</template>
        </ul>

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
     		showModal: false,
    	}
  	},

  	methods: {

  		onClose: function(){
  			this.showModal = false
  		},

  		saveNormalClasses: function(){
  			this.$store.dispatch('saveNormalClasses',this.className)
  		},

  		deleteNormalClasses: function(schoolclass){
				var schoolclassid=schoolclass.id				
  			this.$store.dispatch('deleteNormalClasses',schoolclassid)
  		}

  	},

  	computed: {

  		listClasses() {
  			return this.$store.getters.normalClasses
  		}
  	}
  }

</script>

<style>

.divider{
	border-bottom: 1px;
}
	
</style>