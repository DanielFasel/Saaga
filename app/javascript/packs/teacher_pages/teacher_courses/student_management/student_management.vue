<template>

		<modal-window modalToggleFunction="showStudentManagementModal" v-if="showStudentManagementModal">
		  <div slot="body">
        <input v-model="schoolName" placeholder="New School">
        <p>{{schoolName}}</p>
        <button @click="saveSchools" >Save</button>

        <ul>
  				<template v-for="school in schools">
    				<li>{{ school.name }}</li>
    				<li><button @click="deleteSchools(school)" >delete</button></li>
  				</template>
        </ul>

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

		data: function () {
      return {
    		schoolName: ""
    	}
  	},

  	methods: {
  		saveSchools: function(){
  			this.$store.dispatch('saveSchools',this.schoolName)
  		},
  		deleteSchools: function(school){
				var schoolid=school.id
  			this.$store.dispatch('deleteSchools',schoolid)
  		}
  	},

  	computed: {

      ...mapGetters({
				schools: 'schools'
		}),
		...mapGetters('layout/modalDrawer',[
			'showStudentManagementModal'
	]),
  	}
  }


</script>

<style>

.divider{
	border-bottom: 1px;
}

</style>
