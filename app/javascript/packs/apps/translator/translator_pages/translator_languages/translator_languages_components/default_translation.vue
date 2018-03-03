<template>
  <div id="default">
    <!-- Displays the default translation and it's word count -->
    {{defaultTranslations['translation']['translation']}}
    {{characterCount}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default{
  // index of the word
  props: ['index'],

  computed:{
    ...mapGetters([
      'selected'
    ]),
    defaultTranslations(){
      // Fetches the default translation
      return this.$store.getters['languageTranslated/defaultTranslations'](this.selected, this.index)
    },
    characterCount(){
      // fetches the character count of the translation.
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
