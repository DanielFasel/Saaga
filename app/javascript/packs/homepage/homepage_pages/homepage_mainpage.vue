<template>
  <div class="background">
    <homepage-menu></homepage-menu>
    <div id="homepage_menu_background"></div>
    <router-view id="router_content"></router-view>
    <homepage-footer></homepage-footer>
  </div>
</template>

<script>

</script>

<style scoped>


#homepage_menu_background{
  height: 56px;
  background:rgb(255, 237, 135) ;
}
</style>
