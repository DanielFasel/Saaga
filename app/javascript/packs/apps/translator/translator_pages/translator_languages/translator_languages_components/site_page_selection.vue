<template>
  <div id="selectionList">

    <ul id="languages" v-if="showLanguageSelection">
      <li v-for="language, index in languages">
        <button @click="fetchingSites(language ,index)">{{ language["name"]}} / {{languagePercentage(index)}}</button>
      </li>
    </ul>

    <ul id="sites" v-if="showSiteSelection">
    <li v-for="site, index in defaultLanguageTranslated[0]['sites']">
      <button @click="fetchingPages(site, index)">{{ site['name'] }}/ {{sitePercentage(index)}}</button>
    </li>
  </ul>

  <ul id="pages" v-if="showPageSelection">
    <li v-for="page, index in this.pages()">
      <button @click="fetchingTranslations(page, index)">{{page['name'] }}/ {{pagePercentage(index)}}</button>
    </li>
  </ul>



</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default{

  data: function(){
    return{
      site:0
    }
  },

  computed:{
    ...mapGetters([
      'languages',
      'selected'
    ]),
    ...mapGetters('languageTranslated',{
      defaultLanguageTranslated: 'defaultLanguageTranslated'
    }),
    ...mapGetters({
      showLanguageSelection: 'showLanguageSelection',
      showSiteSelection: 'showSiteSelection',
      showPageSelection: 'showPageSelection'
    })


  },

  methods:{
    fetchingSites(language, languageIndex){
        this.$store.commit('selected', {type:0, data:{name: language["name"], index: languageIndex}})
    },
    fetchingPages(site, siteIndex){
        this.site=siteIndex
        this.pages()
        this.$store.commit('selected', {type:1, data:{name: site["name"], index: siteIndex}})
    },
    pages(){
      return this.defaultLanguageTranslated[0]['sites'][this.site]['pages']
    },
    fetchingTranslations(page, pageIndex){
      this.$store.commit('selected', {type:2, data:{name: page["name"], index: pageIndex}})
    },

    languagePercentage(languageIndex){
      var hash = this.$store.getters['languageTranslated/languageTotalCompleted'](languageIndex)
      var percentage = hash['completed']/(hash['total']/100)
      percentage=+percentage.toFixed(1)
      if(hash['total']==0){
        return ""
      }
      else{
        return percentage
      }
    },

    sitePercentage(siteIndex){

      var hash = this.$store.getters['languageTranslated/siteTotalCompleted'](siteIndex)
      var percentage = hash['completed']/(hash['total']/100)
      percentage=+percentage.toFixed(1)
      if(hash['total']==0){
        return ""
      }
      else{
        return percentage
      }
    },

    pagePercentage(pageIndex){
      var hash = this.$store.getters['languageTranslated/pageTotalCompleted'](pageIndex)
      var percentage = hash['completed']/(hash['total']/100)
      percentage=+percentage.toFixed(1)
      if(hash['total']==0){
        return ""
      }
      else{
        return percentage
      }
    }
  }
}

</script>

<style :scoped>

#selectionList{
  display: flex;
  flex-direction: row;
  margin: 20px;
  margin-top: 20vh;
}
</style>
