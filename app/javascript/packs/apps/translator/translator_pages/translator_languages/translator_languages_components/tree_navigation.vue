<template>

  <div>
    <!-- Three buttons of the tree- navigation with their corresponding percentage -->
    <button v-if="showLanguageButton"@click="languageSelection">{{selected["language"]['name']}} / {{languagePercentage()}}</button>
    <button v-if="showSiteButton" @click="siteSelection">{{selected["site"]['name']}} / {{sitePercentage()}}</button>
    <button v-if="showPageButton" @click="pageSelection">{{selected["page"]['name']}}/ {{pagePercentage()}}</button>
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
      // Checks if the language button should be displayed
      if(this.selected['language']['name']==""){
        return false
      }
      else {
        return true
      }
    },
    showSiteButton(){
      // Checks if the site button should be displayed
      if(this.selected["site"]['name']==""){
        return false
      }
      else{
        return true
      }
    },
    showPageButton(){
      // Checks if the page button should be displayed
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
      // Navigates the the Hompage and clears the selection
      this.$router.push({ name: 'homepage' })
      this.$store.commit('selected', {type:0, data:{name:""}})
      this.$store.commit('selected', {type:1, data:{name:"",index:""}})
      this.$store.commit('selected', {type:2, data:{name:"",index:""}})
      this.$store.commit('selected', {type:3, data:{name:"",index:""}})

    },
    siteSelection(){
      // Clears the selection
      this.$store.commit('selected', {type:1, data:{name:"",index:""}})
      this.$store.commit('selected', {type:2, data:{name:"",index:""}})
      this.$store.commit('selected', {type:3, data:{name:"",index:""}})
    },
    pageSelection(){
      // Clears the selection
      this.$store.commit('selected', {type:2, data:{name:"",index:""}})
      this.$store.commit('selected', {type:3, data:{name:"",index:""}})
    },
    languagePercentage(){
      // Calculates the percentage done of the language.
      var hash = this.$store.getters['languageTranslated/languageTotalCompleted'](this.selected['language']['index'])
      var percentage = hash['completed']/(hash['total']/100)
      percentage=+percentage.toFixed(1)
      // Returns empty percentage incase the total is 0 (Happens because the authorized languages get loaded before the language files themselves)
      if(hash['total']==0){
        return ""
      }
      else{
        return percentage
      }
    },
    sitePercentage(){
      // Calculates the percentage done of the site.
      var hash = this.$store.getters['languageTranslated/siteTotalCompleted'](this.selected['site']['index'])
      var percentage = hash['completed']/(hash['total']/100)
      percentage=+percentage.toFixed(1)
    },
    pagePercentage(){
      // Calculates the percentage done of the page.
      var hash = this.$store.getters['languageTranslated/pageTotalCompleted'](this.selected['page']['index'])
      var percentage = hash['completed']/(hash['total']/100)
      percentage=+percentage.toFixed(1)
    }
  }
}
</script>

<style :scoped>
</style>
