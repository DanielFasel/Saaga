<template>
<div>

  <tree-navigation v-if="showTreeNavigation"></tree-navigation>
  <site-page-selection v-if="showSitePageSelection"></site-page-selection>

</div>
</template>

<script>
import { mapGetters } from 'vuex'

import TreeNavigation from './translator_languages_components/tree_navigation.vue'
import SitePageSelection from './translator_languages_components/site_page_selection.vue'


export default {



  components:{
    "tree-navigation": TreeNavigation,
    "site-page-selection": SitePageSelection
  },


  computed:{
    ...mapGetters({
      showTreeNavigation: 'showTreeNavigation',
      showSitePageSelection: 'showSitePageSelection'
    })
  }
}

</script>

<style scoped>

<style>
