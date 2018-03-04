<template>
  <div id="selectionList">

    <!-- Language selection in case loads on "language page" without having selected one on the homepage -->
    <ul id="languages" v-if="showLanguageSelection">
      <li v-for="language, index in languages">
        <button @click="settingLanguage(language ,index)">{{ language["name"]}} / {{languagePercentage(index)}}</button>
      </li>
    </ul>

    <!-- List of sites to select -->
    <ul id="sites" v-if="showSiteSelection">
      <li v-for="site, index in defaultLanguageTranslated[0]['sites']">
        <button @click="settingSite(site, index)">{{ site['name'] }}/ {{sitePercentage(index)}}</button>
      </li>
    </ul>

    <!-- List of pages to select of the selected site -->
    <ul id="pages" v-if="showPageSelection">
      <li v-for="page, index in this.pages()">
        <button @click="settingPage(page, index)">{{page['name'] }}/ {{pagePercentage(index)}}</button>
      </li>
    </ul>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default{

  data: function(){
    return{
      // Index of the chosen Site
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
    settingLanguage(language, languageIndex){
        //Sets the selected Language which makes the sites being displayed
        this.$store.commit('selected', {type:0, data:{name: language["name"], index: languageIndex}})
    },
    settingSite(site, siteIndex){
        // sets this.site variable as the siteIndex
        this.site=siteIndex
        // Goes fetch the pages
        this.pages()
        // Sets the selected Site making the Pages being displayed
        this.$store.commit('selected', {type:1, data:{name: site["name"], index: siteIndex}})
    },
    settingPage(page, pageIndex){
      // Sets the
      this.$store.commit('selected', {type:2, data:{name: page["name"], index: pageIndex}})
    },
    pages(){
      // fetches the pages of the corresponding site
      return this.defaultLanguageTranslated[0]['sites'][this.site]['pages']
    },
    languagePercentage(languageIndex){
      // Calculates the percentage done of the language.
      var hash = this.$store.getters['languageTranslated/languageTotalCompleted'](languageIndex)
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
    sitePercentage(siteIndex){
      // Calculates the percentage done of the site.
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
      // Calculates the percentage done of the page.
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
