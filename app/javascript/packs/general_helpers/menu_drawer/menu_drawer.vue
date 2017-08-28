<template>
	<transition name="drawer">
		<div class="drawer-mask" @click.self="toggleMenuDrawer">
			<div class="drawer-wrapper">
				<slot></slot>
			</div>
		</div>
	</transition>
</template>

<script>

export default {

	methods:{

		toggleMenuDrawer: function(){
      		
					this.$emit('toggleDrawer')
    	}
	}
}

</script>

<style scoped>
.drawer-mask{
	position: fixed;
	z-index: 9998;
	top: 0;
  	left: 0;
  	width: 100%;
  	height: 100%;
  	display: flex;
  	justify-content: flex-end;


}

.drawer-wrapper{
	background: rgb(185,181,213);
	height: 100%;
	max-width: 300px;
	width: 80vw;

}


/* Transition effects */


</style>
