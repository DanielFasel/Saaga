<template>
		<transition name="drawer">
		<aside class="drawer-mask"  @click.self="toggleMenuDrawer">

			<nav class="drawer-wrapper">
				<slot></slot>
			</nav>

		</aside>
	</transition>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {

	methods:{
		...mapActions('layout/modalDrawer',{
			toggleMenuDrawer: 'toggleMenuDrawer',
			toggleMenuSide: 'toggleMenuSide'
		}),

		// Closes drawer if open and escape key is pressed
		escapeKeyListener: function(evt){
	  	if(evt.keyCode == 27 && this.showMenuDrawer){
	    	this.toggleMenuDrawer()
	    }
	  }
	},

	computed:{
		...mapGetters('layout/modalDrawer',[
			'showMenuDrawer',
			'showMenuSide'
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
	z-index: 4;
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
.drawer-enter{
	transform: translateX(500px);
}
.drawer-enter-active,
.drawer-leave-active {
	transition: all 0.3s ease;
}
.drawer-leave-to{
	transform: translateX(300px);
}


</style>
