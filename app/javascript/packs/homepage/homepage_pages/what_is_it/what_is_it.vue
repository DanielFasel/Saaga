<template>
  <div>
    <h1>What is it?</h1>
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

      this.$store.dispatch('currentPage', "What is it ?")

      this.$store.dispatch('menuSide', true)

  }
}
</script>

<style scoped>

</style>
