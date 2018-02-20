<template>
  <ul id="translation">
    <li v-for="translation in translation()">
      <button>{{translation["translation"]['translation']}}</button>
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
      return this.languageTranslated[this.selected['language']] [this.selected['site']['index']] ['pages'] [this.selected['page']['index']] ['words']
    }
  }

}
</script>

<style :scoped>
</style>
