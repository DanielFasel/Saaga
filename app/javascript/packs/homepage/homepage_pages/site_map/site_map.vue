<template>
  <div>
    <h1>sitemap</h1>
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

      this.$store.dispatch('currentPage', "Site Map")

      this.$store.dispatch('menuSide', false)

  }
}
</script>

<style scoped>

</style>
