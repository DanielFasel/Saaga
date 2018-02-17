<template>
  <div>

    <button @click="languageSelection">{{selected["language"]}}</button>
    <button v-if="showSiteButton" @click="siteSelection">{{selected["site"]}}</button>
    <button v-if="showPageButton" @click="pageSelection">{{selected["page"]}}</button>

  </div>

</template>

<script>

import {mapGetters} from 'vuex'

export default {
  computed:{
    ...mapGetters({
      selected: 'selected'
    }),

    showSiteButton(){
      if(this.selected["site"]==""){
        return false
      }
      else{
        return true
      }
    },
    showPageButton(){
      if(this.selected["page"]==""){
        return false
      }
      else{
        return true
      }
    }
  },

  methods:{
    languageSelection(){
        console.log(this.selected["site"])
      this.$router.push({ name: 'homepage' })
      this.$store.commit('selected', {type:0, data:""})
      this.$store.commit('selected', {type:1, data:""})
      this.$store.commit('selected', {type:2, data:""})

    },
    siteSelection(){
      this.$store.commit('selected', {type:1, data:""})
      this.$store.commit('selected', {type:2, data:""})
    },
    pageSelection(){
      this.$store.commit('selected', {type:2, data:""})
    }
  }
}
</script>

<style :scoped>
</style>
