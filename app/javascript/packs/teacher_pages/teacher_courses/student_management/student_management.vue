<template>

		<modal-window modalToggleFunction="showStudentManagementModal" v-if="showStudentManagementModal">
		  <div id="modal_content" slot="body">

				<!-- Short explanations for how to manage the students -->
				<div id="explanations">
					<div class="bubble"><p>Lorem ipsum dolor sit amet</p></div>
					<div class="bubble"><p>Lorem ipsum dolor sit amet</p></div>
					<div class="bubble"><p>Lorem ipsum dolor sit amet</p></div>
					<div class="bubble"><p>Lorem ipsum dolor sit amet</p></div>
					<div class="bubble"><p>Lorem ipsum dolor sit amet</p></div>
				</div>

				<!-- Selection of the school and settings of that selected School -->
				<hr>
				<div class="under_bar_title">Schools</div>

				<ul id="school_buttons">
					<li v-for="adminSchool, index in teacherAdminSchools"><button @click="selectedSchool(index)">{{adminSchool[0].name}}</button></li>
				</ul>
				<div id="school_settings">
					<div>Name <button>Edit</button></div>
					<div>Color</div>
					<button>Add Teacher</button>
					<button>Delete School</button>
				</div>

				<!-- Content of the selected school -->
				<div id="school_content">
					<div id="content_mask"></div>
					<hr>
					<div class="under_bar_title">Students</div>


					<ul>

						<div v-for='student in teacherAdminSchools[school][1]'>

							<li>{{student.username}} <button>Delete</button></li>
						</div>

					</ul>


				</div>








		  </div>
    </modal-window>

</template>

<script>

	import ModalWindow from "../../../general_helpers/modal_window/modal_window.vue"
  import {mapGetters} from 'vuex'
	import {mapActions} from 'vuex'

	export default {

		data: function(){
			return {
				school:0

			}
		},

		components: {
			"modal-window": ModalWindow
		},

  	computed: {
			...mapGetters('layout/modalDrawer',[
				'showStudentManagementModal'
			]),
			...mapGetters('teacherSpec',[
				'teacherAdminSchools'
			])
		},

		methods:{
			selectedSchool: function(index){
				this.school=index
			}
		},

		created: function(){
			this.$store.dispatch("teacherSpec/saveTeacherAdminSchools").then(response => {
					console.log("Got some data, now lets show something in this component")
			}, error => {
					console.error("Got nothing from server. Prompt user to check internet connection and try again")
			})

		}


  }


</script>

<style scoped>
#modal_content{
	display: flex;
	flex-direction: column;
}

#explanations{
	display: flex;
	flex-direction: row;
}
#school_buttons{
	display: flex;
	flex-direction: row;
}
#school_settings{
	display: flex;
	flex-direction: row;
}
hr{
	width: 100%;
}

</style>
