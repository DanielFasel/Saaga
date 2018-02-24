<template>
  <div id="default">
    {{defaultTranslations['translation']['translation']}}
    {{characterCount}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default{

  props: ['index'],

  computed:{
    ...mapGetters([
      'selected'
    ]),
    defaultTranslations(){
      return this.$store.getters['languageTranslated/defaultTranslations'](this.selected, this.index)
    },

    characterCount(){
      return this.defaultTranslations['translation']['translation'].length
    }
  }
}

</script>

<style scoped>
  #default{
    width: 50%;
  }
</style>
