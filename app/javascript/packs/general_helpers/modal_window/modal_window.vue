<template>

  <transition name="modal">
    <div class="modal-mask">

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
    </div>
  </transition>

</template>

<script>

export default{

  props:['modalToggleFunction'],

  methods:{

    closeModal: function(){
          this.$store.dispatch('layout/modalDrawer/'+this.modalToggleFunction)
        }
  }
}

</script>

<style>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity .3s ease;
}

.modal-wrapper {
	display: flex;
	flex-direction: column;

  width: 95vw;
  max-width: 1000px;
  height: 95vh;
  max-height: 700px;
  margin: 0px auto;

  background-color: #fff;
  border-radius: 1px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
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
  overflow: auto;
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
