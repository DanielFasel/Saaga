<template>
<ul>
  <li>
    <router-link to='/' exact>Saaga</router-link>
  </li>
  <li>
    <router-link to='/what' exact>What is it ?</router-link>
  </li>
  <li>
    <router-link to='/as_student' exact>As a Student</router-link>
  </li>
  <li>
    <router-link to='/as_teacher' exact>As a Teacher</router-link>
  </li>
  <li>
    <router-link to='/as_school' exact>As a School</router-link>
  </li>
  <li>
    <a href="/login">Login</a>
  </li>
  <li>
    <a href="/register">Register</a>
  </li>

</ul>
</template>

<script>

</script>

<style scoped>
ul {
  background-color:rgb(51,41,135);
padding: 2em;
}
</style>
