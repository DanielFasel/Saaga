<template>
  <div>

    <ul id="languages" v-if="showLanguageSelection">
      <li v-for="language in languages">
        <button @click="fetchingSites(language)">{{ language["language"]}}</button>
      </li>
    </ul>

    <ul id="sites" v-if="showSiteSelection">
    <li v-for="site in languageTranslated">
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
      page:0
    }
  },

  computed:{
    ...mapGetters([
      'languages'
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
          this.page=this.languageTranslated.indexOf(site)
          this.pages()
          this.$store.commit('selected', {type:1, data:site["name"]})
      return
    },
    pages(){
      return this.languageTranslated[this.page]['pages']
    },
    fetchingTranslations(page){
      this.$store.commit('selected', {type:2, data:page["name"]})
    }
  }
}

</script>

<style :scoped>
</style>
