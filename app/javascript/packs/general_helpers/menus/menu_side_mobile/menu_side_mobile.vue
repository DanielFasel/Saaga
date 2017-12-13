<template >
  <div id="menu_side_mobile">
    <slot>
    </slot>
  </div>
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

</style>
