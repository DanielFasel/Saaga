<template>
  <div id="selected">

    <!-- Displays the previously validated Translation -->
    {{selectedTranslations['translation']['translation']}}
    <!-- Displays the character count -->
    {{characterCount}}
    <!-- Shows if the translation is currently validated or not -->
    {{selectedTranslations['translation']['validated']}}
    <!-- Input area that displays the temporary translation and saves all changes with a certain delay -->
    <textarea @keyup="saveTemporaryTranslation()" @keydown="setValidatedTemporary()" v-model="selectedTranslations['translation']['temporary']"></textarea>
    <!-- Button to validate the translation and save it -->
    <button @click="saveTranslation()">Validate</button>
    -
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
// lodash is used for 'debouncing' the function that saves the temporary translation
import _ from 'lodash'

export default{
  // Index of the word
  props: ['index'],

  data(){
    return {
      // object of the required data to save the validated or temporary translation
      requiredToSave:{type:"", translation:"", selected:{}}
    }
  },

  computed:{
    ...mapGetters([
      'selected'
    ]),
    selectedTranslations(){
      // Fetches the translation object
      return this.$store.getters['languageTranslated/selectedTranslations'](this.selected, this.index)
    },
    characterCount(){
      // Fetches the character count of the current temporary translation
      return this.selectedTranslations['translation']['temporary'].length
    }
  },

  methods:{
    ...mapActions('languageTranslated',{
        postTranslation:'postTranslation'

    }),
    saveTranslation(){
      // Saves the needed data for post under one data object
      this.requiredToSave['type']='translation'
      this.requiredToSave['translation']=this.selectedTranslations['translation']['temporary']
      // commits the selected word
      this.$store.commit('selected', {type:3, data:{name: this.selectedTranslations['keyword'], index: this.index}})
      this.requiredToSave['selected']=this.selected
      // calls the action to save the translation
      this.postTranslation(this.requiredToSave)
    },

    saveTemporaryTranslation: _.debounce(function(){
      // saves the needed data to post as well as to update the languageTranslated. Uses debounce to save only after a word was written and not after every character
      this.requiredToSave['type']='temporary'
      this.requiredToSave['translation']=this.selectedTranslations['translation']['temporary']
      this.requiredToSave['selected']=this.selected
      // calls the action to save the temporary translation
      this.postTranslation(this.requiredToSave)
    },
    200),

    setValidatedTemporary(){
      // Commits the selected word
      this.$store.commit('selected', {type:3, data:{name: this.selectedTranslations['keyword'], index: this.index}})
      // Commit the temporary translation to the store to avoid having to wait for the debounced function. The store gets synchronised with the databse when the translator validates the translation.
      var hash = {data: false, selected:this.selected}
      this.$store.commit('languageTranslated/saveTemporary', hash)
    }
  }
}
</script>

<style scoped>
#selected{
  width:50%;
}
</style>
