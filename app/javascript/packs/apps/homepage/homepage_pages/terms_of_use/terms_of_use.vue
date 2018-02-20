<template>
  <div>
    <h1>TermsOfUse</h1>
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

      this.$store.dispatch('currentPage', "Terms of Use")

      this.$store.dispatch('menuSide', true)

  }
}
</script>

<style scoped>

</style>
