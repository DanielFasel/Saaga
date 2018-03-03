<template>

<div>
  <!-- List of the words to translate -->
  <ul id="translations">
    <!-- V-for to loop through the words -->
    <li v-for="(word,index) in words" v-bind:id="'translation_'+index">
      <!-- Label/Keyword of the Word -->
      <label>{{word['keyword']}}</label>
      <div id="defaultSelected">
        <!-- default and selected translation -->
        <default-translation :index="index"></default-translation>
        <selected-translation :index="index"></selected-translation>
      </div>
      <!-- Seperation line between the words -->
      <hr>
    </li>
  </ul>
  <!-- Button that eventuallz will navigate to the next not translated word -->
  <button id="nextButton" v-scroll-to="'#translation_3'">Next translation</button>
</div>

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
      // Fetches the list of words for the selected page
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
#nextButton{
  position: fixed;
  bottom: 100px;
  right:20px;
}
</style>
