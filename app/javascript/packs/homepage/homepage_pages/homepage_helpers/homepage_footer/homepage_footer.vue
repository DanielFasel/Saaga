<template>

  <ul>
    <li class="link">
      <router-link  to='/contact' exact>Contact Us</router-link>
    </li>
    <li class="link">
      <router-link  to='/help' exact>Help</router-link>
    </li>
    <li class="link">
      <router-link  to='/site_map' exact>Site Map</router-link>
    </li>
    <li class="link">
      <router-link  to='/terms' exact>Terms of Use</router-link>
    </li>
    <li class="link">
      <router-link  to='/privacy' exact>Privacy Notice</router-link>
    </li>
  </ul>

</template>

<script>

</script>

<style scoped>

ul {
background-color:rgb(51,41,135);
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
min-height:5em;
}

.link:hover{
    text-decoration: underline;
}

</style>
