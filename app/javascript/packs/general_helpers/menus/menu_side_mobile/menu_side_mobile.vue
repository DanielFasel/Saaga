<template >
  <transition name="menuside">
    <div id="menu_side_mobile">
      <slot>
      </slot>
    </div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {

}
</script>

<style scoped>

#menu_side_mobile{
  position:fixed;
  top:0;
  left:0;
  height:200px;
  width:100%;
  background: red;
}

/* Transition effects */
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
