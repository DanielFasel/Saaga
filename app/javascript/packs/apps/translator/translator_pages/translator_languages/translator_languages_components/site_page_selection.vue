<template>
  <div>

    <ul id="languages" v-if="showLanguageSelection">
      <li v-for="language in languages">
        <button @click="fetchingSites(language)">{{ language["language"]}}</button>
      </li>
    </ul>

    <ul id="sites" v-if="showSiteSelection">
    <li v-for="site in languageTranslated['english']">
      <button @click="fetchingPages(site)">{{ site['name'] }}</button>
    </li>
  </ul>

  <ul id="pages" v-if="showPageSelection">
    <li v-for="page in this.pages()">
      <button @click="fetchingTranslations(page)">{{page['name'] }}</button>
    </li>
  </ul>



</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default{

  data: function(){
    return{
      site:0,
      page:0
    }
  },

  computed:{
    ...mapGetters([
      'languages',
      'selected'
    ]),
    ...mapGetters('languageTranslated',{
      languageTranslated: 'languageTranslated'
    }),
    ...mapGetters({
      showLanguageSelection: 'showLanguageSelection',
      showSiteSelection: 'showSiteSelection',
      showPageSelection: 'showPageSelection'
    })
  },

  methods:{
    fetchingSites(language){
        this.$store.commit('selected', {type:0, data:language["language"]})
    },
    fetchingPages(site){
        this.site=this.languageTranslated['english'].indexOf(site)
        console.log(site)
        this.pages()
        this.$store.commit('selected', {type:1, data:{name: site["name"], index: this.site}})
    },
    pages(){
      return this.languageTranslated['english'][this.site]['pages']
    },
    fetchingTranslations(page){
      this.page=this.languageTranslated['english'][this.site]['pages'].indexOf(page)
      this.$store.commit('selected', {type:2, data:{name: page["name"], index: this.page}})
    }
  }
}

</script>

<style :scoped>
</style>
