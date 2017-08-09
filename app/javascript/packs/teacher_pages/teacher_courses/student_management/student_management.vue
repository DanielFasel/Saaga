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
					<li><button @click="newSchool">add school</button></li>
				</ul>
				<div id="new_school" v-if="new_school">
					<input type="text" placeholder="Name"><button @click="newSchool">Save</button>
				</div>


				<div id="school_settings">
					<div>
						<span v-if="edit_school">{{teacherAdminSchools[school][0].name}}</span>
						<input v-else type="text" :placeholder="teacherAdminSchools[school][0].name">
						<button v-if="edit_school" @click="editSchool">Edit</button>
						<button v-else @click="editSchool">Save</button>
					</div>

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
				school:0,
				new_school:false,
				edit_school:true

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
			},
			newSchool: function(){
				if(this.new_school==false)
					this.new_school=true
				else
					this.new_school=false
			},
			editSchool: function(){
				if(this.edit_school==true)
					this.edit_school=false
				else
					this.edit_school=true
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
.bubble{
	width: 100px;
	height: 100px;
	background: red;
	-moz-border-radius: 50px;
	-webkit-border-radius: 50px;
	border-radius: 50px;
	font-size: 0.8em;
}

#modal_content{
	display: flex;
	flex-direction: column;
}

#explanations{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: 10px ;
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
