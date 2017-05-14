<template>
  <div>

  	<div id='testcard'>
  		<teacher-menu></teacher-menu>
  	</div>
    
    <router-view></router-view>
    
  </div>
</template>



<script>



module.exports = {

  data: function () {
    return {
      message: "Hello Daniel!"
    }
  }
}
</script>



<style scoped>
#testcard{
	background: silver;
	a{
		color:white;
	}
}
</style>
