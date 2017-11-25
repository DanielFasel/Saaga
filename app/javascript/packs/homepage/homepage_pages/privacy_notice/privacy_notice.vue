<template>
  <div>
    <h1>privacy</h1>
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

      this.$store.dispatch('currentPage', "Privacy Notice")

      this.$store.dispatch('menuSide', true)

  }
}
</script>

<style scoped>

</style>
