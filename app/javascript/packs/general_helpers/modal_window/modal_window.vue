<template>

  <transition name="modal">


      <div class="modal-wrapper">

        <div class="modal-header">
        	<button class="mobile-menu"></button>
        	<h5>title</h5>
          <button class="modal-close-button" @click="closeModal">Close</button>
        </div>

        <div class="modal-content">
				  <div class="modal-side-menu">
            <slot name="side_menu"></slot>
          </div>

          <div class="modal-body">
            <slot name="body"></slot>
          </div>
        </div>


    </div>
  </transition>

</template>

<script>

export default{

  props:['modalToggleFunction'],

  methods:{
    closeModal: function(){
          this.$store.dispatch('layout/modalDrawer/'+this.modalToggleFunction)
    },
    // method triggering the closing if escape key is pressed
    escapeKeyListener: function(evt){
      if(evt.keyCode == 27){
        this.closeModal()
      }
    }
  },

  created: function(){
    // Creation of Event listener to close with the escape key
    document.addEventListener('keyup', this.escapeKeyListener);
  },

  beforeMount: function(){
      // add class to body in order to hide the scrollbar while modal is open
      document.body.classList.add('modal-open');
  },

  beforeDestroy: function(){
    // removal of Event listener to close with the escape key
    document.removeEventListener('keyup', this.escapeKeyListener);
    // removal of class hiding the scrollbar
    document.body.classList.remove('modal-open');
  }

}

</script>

<style>
.modal-open {
  overflow: hidden;
}


.modal-wrapper {
  position: fixed;
  left:50vw;
  top:50vw;
  transform: translate(-50%,-50%);
  z-index: 4;

  width: 95vw;
  max-width: 1000px;
  height: 95vh;
  max-height: 700px;
  margin: auto;

  background-color: #fff;
  border-radius: 1px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;

  display: flex;
  flex-direction: column;
}

.modal-header{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.mobile-menu{

}

.modal-content{
	display: flex;
	flex-direction: row;
  overflow-y: auto;
}

.modal-close-button {
	display: flex;
	align-self: flex-end;
	width: 5em;
  top: 0;
  left: 0;
}

.modal-body {
  margin: 20px 0;
  width: 100%;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;

}

.modal-leave-active {
  opacity: 0;

}

.modal-enter .modal-wrapper,
.modal-leave-active .modal-wrapper {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


</style>
