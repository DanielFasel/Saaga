<template>
<!-- the external div is used to create a mask over the background when a modal is activated or drawer menu -->
<div id="page_container" v-bind:class="{overflowHidden: overflowHidden}" class="background-blur">
  <teacher-menu></teacher-menu>
    <!-- div id="teacher_menu_background"></div -->
  <!-- Content of the pages when changing route -->
  <router-view  id="router"></router-view>
  {{overflowHidden}}
</div>
</template>


<script>

import {mapGetters} from 'vuex'

export default {

  data: function() {
    return {
      message: "Hello Daniel!"
    }
  },
  computed:{
    ...mapGetters('layout/modalDrawer',[
      'overflowHidden'
    ])
  }
}
</script>


<style scoped>

#page_container {
  background: rgb(51, 41, 135);
  display: flex;
  flex-direction: column;

}
#teacher_menu_background {
height:70px;
}
#router{
  display: flex;
  background: white;
  width: 100%;
  padding-top: 70px;





}

.overflowHidden {
  overflow: hidden;
}



</style>
