<template>

  <ul id="translations">
    <li v-for="(word,index) in words">

      <label>{{word['keyword']}}</label>
      <div id="defaultSelected">
        <default-translation :index="index"></default-translation>
        <selected-translation :index="index"></selected-translation>
      </div>
      <hr>
    </li>
  </ul>

</template>

<script>
import {mapGetters} from 'vuex'

import defaultTranslation from './default_translation.vue'
import selectedTranslation from './selected_translation.vue'

export default {

  components:{
    "default-translation": defaultTranslation,
    "selected-translation": selectedTranslation
  },

  computed:{
    ...mapGetters([
      'selected'
    ]),
    words(){
      return this.$store.getters['languageTranslated/words'](this.selected)
    }
  }

}
</script>

<style scoped>
#defaultSelected{
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
#translations{
width: 70vw;
margin: auto;
margin-top: 20px;
}
</style>
