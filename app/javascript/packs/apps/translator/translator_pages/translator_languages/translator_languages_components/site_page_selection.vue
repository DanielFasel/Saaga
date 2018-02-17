<template>
  <div>
  <ul id="sites" v-if="showSiteSelection">
    <li v-for="site in languageTranslated">
      <button @click="fetchingPage(site)">{{ site['name'] }}</button>
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

    fetchingPage(site){
          this.page=this.languageTranslated.indexOf(site)
          this.pages()
          this.$store.commit('selected', {type:1, data:site["name"]})
          console.log(this.page)
      return
    },

    pages(){
      console.log(this.languageTranslated[this.page]['pages'])
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
