<template>

  <ul>
    <li>
      <router-link  to='/contact' exact>Contact Us</router-link>
    </li>
    <li>
      <router-link  to='/help' exact>Help</router-link>
    </li>
    <li>
      <router-link  to='/site_map' exact>Site Map</router-link>
    </li>
    <li>
      <router-link  to='/terms' exact>Terms of Use</router-link>
    </li>
    <li>
      <router-link  to='/privacy' exact>Privacy Notice</router-link>
    </li>

  </ul>

</template>

<script>

</script>

<style scoped>
ul {
  background-color:rgb(51,41,135);
  clip-path: polygon(
  0 6vw,
  100% 0,
  100% 100%,
  0 100%
);
padding: 2vw;
padding-top:7vw;
margin-top: -6vw;
}
</style>
