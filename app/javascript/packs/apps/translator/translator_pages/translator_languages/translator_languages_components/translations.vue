<template>
  <ul id="translations">

    <!--For loop with index (n) to loop through array-->
    <li v-for="n in this.length">
        <label>{{defaultTranslations[n-1]['keyword']}}</label>
        <div>{{defaultTranslations[n-1]['translation']['translation']}}</div>
        <!-- Is bound via v-model to the bindedTranslations which also give the value for the textarea -->
        <textarea @keyup="saveTemporaryTranslation(defaultTranslations[n-1]['keyword'])" v-model="bindedTranslations[defaultTranslations[n-1]['keyword']]"></textarea>
        <button @click="saveTranslation(defaultTranslations[n-1]['keyword'])">Save</button>

    </li>

  </ul>
</template>

<script>
import {mapGetters} from 'vuex'
import{mapActions} from 'vuex'
import _ from 'lodash'

export default {

  data(){
    return{
      length:0,
      defaultTranslations:[],
      selectedTranslations:[],
      bindedTranslations:{},
      requiredToSave:{language:"",word:"",translation:"",type:""}
    }
  },

  computed:{
    ...mapGetters('languageTranslated',{
      languageTranslated: 'languageTranslated'
    }),
    ...mapGetters([
      'selected'
    ])
  },

  methods:{
    ...mapActions('languageTranslated',{
        postTranslation:'postTranslation'
    }),

    saveTranslation(keyword){
      this.requiredToSave['type']='translation'
      this.requiredToSave['language']=this.selected['language']
      this.requiredToSave['word']=keyword
      this.requiredToSave['translation']=this.bindedTranslations[keyword]
      this.postTranslation(this.requiredToSave)
    },

    saveTemporaryTranslation: _.debounce(function(keyword){
      this.requiredToSave['type']='temporary'
      this.requiredToSave['language']=this.selected['language']
      this.requiredToSave['word']=keyword
      this.requiredToSave['translation']=this.bindedTranslations[keyword]
      this.postTranslation(this.requiredToSave)
      }, 300)

  },

  mounted(){
    // fetch the words of the default and selected language and calculate the length of the array
    this.defaultTranslations=this.languageTranslated['english'][this.selected['site']['index']]['pages'][this.selected['page']['index']]['words']
    this.selectedTranslations=this.languageTranslated[this.selected['language']][this.selected['site']['index']]['pages'][this.selected['page']['index']]['words']
    this.length=this.defaultTranslations.length
    // set the data fields dynamically in order to bind it.
    for (var i = 0; i < this.length; i++) {
      // set a data object with the keyword as key and the translation as value
      this.$set(this.bindedTranslations, this.selectedTranslations[i]['keyword'], this.selectedTranslations[i]['translation']['translation'] )
    }
  }

}
</script>

<style scoped>

</style>
