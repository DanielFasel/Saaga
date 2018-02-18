<template>
  <ul id="translation">
    <li v-for="translation in translation()">
      <button @click="translation()">{{translation["translation"]}}</button>
    </li>
  </ul>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

  computed:{
    ...mapGetters('languageTranslated',{
      languageTranslated: 'languageTranslated'
    }),
    ...mapGetters([
      'selected'
    ])
  },

  methods:{
    translation(){
      return (this.languageTranslated[0]["pages"][0]["words"])
    }
  }

}
</script>

<style :scoped>
</style>
