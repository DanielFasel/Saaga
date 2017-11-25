<template>
<div id="page_container" class="background-blur">
  <teacher-menu></teacher-menu>
  <div id="teacher_menu_background"></div>
  <router-view id="router"></router-view>
</div>
</template>


<script>
export default {

  data: function() {
    return {
      message: "Hello Daniel!"
    }
  }
}
</script>


<style scoped>
#page_container {
  background: rgb(51, 41, 135);
  height: 100vh;
  width: 100vw;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.content_container {
  display: flex;
  background: white;
  padding-left: 3vw;
  padding-right: 3vw;
  padding-top: 1rem;
  padding-bottom: 1rem;
  min-height: calc(100vh - 70px);
}

#teacher_menu_background{
  height:70px;
  background:rgb(51, 41, 135);
}

</style>
