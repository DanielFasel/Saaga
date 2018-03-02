<template>
  <div id="selected">

    {{selectedTranslations['translation']['translation']}}
    {{characterCount}}
    {{selectedTranslations['translation']['validated']}}
    <textarea @keyup="saveTemporaryTranslation(selectedTranslations['translation']['temporary'])" @keydown="setValidatedTemporary()" v-model="selectedTranslations['translation']['temporary']"></textarea>
    <button @click="saveTranslation(selectedTranslations['translation']['temporary'])">Validate</button>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
import _ from 'lodash'

export default{

  props: ['index'],

  data(){
    return {
      bindedTemporary:"",
      requiredToSave:{type:"", translation:"", selected:{}}
    }
  },

  computed:{
    ...mapGetters([
      'selected'
    ]),
    selectedTranslations(){
      return this.$store.getters['languageTranslated/selectedTranslations'](this.selected, this.index)
    },

    characterCount(){
      return this.selectedTranslations['translation']['temporary'].length
    }
  },

  methods:{
    ...mapActions('languageTranslated',{
        postTranslation:'postTranslation'

    }),

    saveTranslation(bindedTemporary){
      // Saves the needed data for post under one data object
      this.requiredToSave['type']='translation'
      this.requiredToSave['translation']=bindedTemporary
      this.$store.commit('selected', {type:3, data:{name: this.selectedTranslations['keyword'], index: this.index}})
      this.requiredToSave['selected']=this.selected
      this.postTranslation(this.requiredToSave)
    },

    saveTemporaryTranslation: _.debounce(function(bindedTemporary){
      // savse the needed data for post as well as to update the languageTranslated. Usesa debounce to save only after a word was written and not after every character
      this.requiredToSave['type']='temporary'
      this.requiredToSave['translation']=bindedTemporary
      // Commits word and wordIndex that will be needed for the mutation
      this.requiredToSave['selected']=this.selected
      this.postTranslation(this.requiredToSave)
    }, 200),

    setValidatedTemporary(){
      this.$store.commit('selected', {type:3, data:{name: this.selectedTranslations['keyword'], index: this.index}})
      var hash = {data: false, selected:this.selected}
      this.$store.commit('languageTranslated/saveTemporary', hash)
    }
  },

  mounted(){
    this.bindedTemporary=this.selectedTranslations['translation']['temporary']
  }
}

</script>

<style scoped>
#selected{
  width:50%;
}
</style>
