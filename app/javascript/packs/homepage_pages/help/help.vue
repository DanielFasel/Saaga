<template>
  <div>
    <homepage-menu></homepage-menu>
    <h1>Help</h1>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default{


  methods: {  ...mapActions([
      'currentPage',
      'menuSide'
    ]),

  },
  created(){

      this.$store.dispatch('currentPage', "Help")

      this.$store.dispatch('menuSide', true)

  }
}
</script>

<style scoped>

</style>
