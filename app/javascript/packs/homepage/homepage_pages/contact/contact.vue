<template>
  <div>
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

      this.$store.dispatch('currentPage', "Contact Us")

      this.$store.dispatch('menuSide', false)

  }
}
</script>

<style scoped>

</style>
