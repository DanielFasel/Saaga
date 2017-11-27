<template>
  <div>
    <h1>Teacher</h1>
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

      this.$store.dispatch('currentPage', "As a Teacher")

      this.$store.dispatch('menuSide', true)

  }
}
</script>

<style scoped>

</style>
