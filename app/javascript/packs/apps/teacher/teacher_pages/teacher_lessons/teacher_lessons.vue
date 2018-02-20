<template>

	<div class="content_container" id="lessons_content">

		<div id="right_side">
			<div id="right_side_top">
				<div>
					<router-link to='/global'>Browes existing lessons <img src="" alt="Existing Lessons / Global"></router-link>
					<router-link to='/global'>Create new lesson<img src="" alt="Create new lesson"></router-link>
				</div>
			</div>
		</div>

	</div>

</template>


<script>


	export default {

		components: {
		},

		data: function () {
    		return {
     			message: ""
    		}
  		}
	}

</script>

<style scoped>

	#right_side{
		display: flex;
		flex-direction: column;
	}

	#right_side_top{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

</style>

<style>

	#lessons_content{
		display: flex;
		flex-direction: row;
	}

</style>
