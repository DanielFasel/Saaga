<template>
  <div>
    <h1>Student</h1>
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

      this.$store.dispatch('currentPage', "As a Student")

      this.$store.dispatch('menuSide', true)

  }
}
</script>

<style scoped>

</style>
