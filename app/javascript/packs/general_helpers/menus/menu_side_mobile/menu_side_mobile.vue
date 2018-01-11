<template >

  <transition name="menuside">
    <div id="menu-side-mask"  @click.self="toggleMenuSide">
      <div id="menu_side_mobile">
        <slot></slot>
      </div>
    </div>
  </transition>

</template>

<script>

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {

  methods:{
      ...mapActions('layout/modalDrawer',{
        toggleMenuSide: 'toggleMenuSide'
      }),
      // hide the drawer when going from medium to big screen
      hideMenuSide: function() {
        if (this.showMenuSide && this.$mq.above(1000)) {
          this.toggleMenuSide()
        }
      },
      // Closes drawer if open. Uses a local store for showMenuDrawer. So needs to exist in Teacher/Student/Admin/Homepage in the same folder to function
      escapeKeyListener: function(evt){
        if(evt.keyCode == 27 && this.showMenuSide){
          this.toggleMenuSide()
        }
      }
    },

    computed:{
        ...mapGetters('layout/modalDrawer',[
          'showMenuSide'
        ])
      },

    //watcher that checks screen size to hide drawer
    watch: {
      '$mq.resize': 'hideMenuSide'
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

#menu-side-mask{
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}

#menu_side_mobile{
  max-height:200px;
  width:100%;
  background:rgb(185,181,213);
  margin-top: 70px;
}

/* Animation for the hide/show effect */
.menuside-enter{
  transform: translateY(-200px);
}
.menuside-enter-active,
.menuside-leave-active {
	transition: all 0.4s ease;
}
.menuside-leave-to{
	transform: translateY(-200px);
}

</style>
