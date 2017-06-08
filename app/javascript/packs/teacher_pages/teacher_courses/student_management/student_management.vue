<template>

	<div>
		<button id="show-modal" @click="showModal = true">Student Managment</button>

		<modal-window v-if="showModal" @close="onClose">
		  <div slot="body">
        <input v-model="className" placeholder="New Class">
        <p>{{className}}</p>
        <button @click="saveNormalClasses" >Save</button>

        <ul>
  				<template v-for="schoolclass in normalClasses">
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
  import {mapGetters} from 'vuex'
  
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

      ...mapGetters([
          'normalClasses'
        ])
  		}
  	}
  

</script>

<style>

.divider{
	border-bottom: 1px;
}
	
</style>