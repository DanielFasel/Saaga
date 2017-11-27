<template>
	<transition name="drawer">
		<div class="drawer-mask"  @click.self="toggleMenuDrawer">
			<div class="drawer-wrapper">
				<slot></slot>
			</div>
		</div>
	</transition>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

	methods:{

		toggleMenuDrawer: function(){
					this.$emit('toggleDrawer')
    },

		// close drawer if open. Uses a local store for showMenuDrawer. So needs to exist in Teacher/Student/Admin/Homepage in the same folder to function
		escapeKeyListener: function(evt){
	  	if(evt.keyCode == 27 && this.showMenuDrawer){
	    	this.toggleMenuDrawer()
	    }
	  }
	},

	computed:{
		...mapGetters('layout/modalDrawer',[
			'showMenuDrawer'
		])
	},

	created: function(){
    // Creation of Event listener to close with the escape key
    document.addEventListener('keyup', this.escapeKeyListener);
  },
	beforeDestroy: function(){
		// removal of Event listener to close with the escape key
		document.removeEventListener('keyup', this.escapeKeyListener);
	}
}

</script>

<style scoped>
.drawer-mask{
	position: fixed;
	z-index: 9998;
	background-color: rgba(0, 0, 0, .5);
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
