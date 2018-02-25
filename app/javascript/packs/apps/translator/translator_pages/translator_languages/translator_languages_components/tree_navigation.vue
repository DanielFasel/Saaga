<template>
  <div>

    <button v-if="showLanguageButton"@click="languageSelection">{{selected["language"]['name']}} / </button>
    <button v-if="showSiteButton" @click="siteSelection">{{selected["site"]['name']}}</button>
    <button v-if="showPageButton" @click="pageSelection">{{selected["page"]['name']}}</button>

  </div>

</template>

<script>

import {mapGetters} from 'vuex'

export default {
  computed:{
    ...mapGetters({
      selected: 'selected'
    }),
    showLanguageButton(){
      if(this.selected['language']['name']==""){
        return false
      }
      else {
        return true
      }
    },

    showSiteButton(){
      if(this.selected["site"]['name']==""){
        return false
      }
      else{
        return true
      }
    },
    showPageButton(){
      if(this.selected["page"]['name']==""){
        return false
      }
      else{
        return true
      }
    }
  },

  methods:{
    languageSelection(){
      this.$router.push({ name: 'homepage' })
      this.$store.commit('selected', {type:0, data:{name:""}})
      this.$store.commit('selected', {type:1, data:{name:"",index:""}})
      this.$store.commit('selected', {type:2, data:{name:"",index:""}})
      this.$store.commit('selected', {type:3, data:{name:"",index:""}})

    },
    siteSelection(){
      this.$store.commit('selected', {type:1, data:{name:"",index:""}})
      this.$store.commit('selected', {type:2, data:{name:"",index:""}})
      this.$store.commit('selected', {type:3, data:{name:"",index:""}})
    },
    pageSelection(){
      this.$store.commit('selected', {type:2, data:{name:"",index:""}})
      this.$store.commit('selected', {type:3, data:{name:"",index:""}})
    }
  }
}
</script>

<style :scoped>
</style>
