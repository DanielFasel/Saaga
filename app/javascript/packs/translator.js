
//extentions
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//Vuex
import {store} from './apps/translator/translator_store/translator_store.js'

import vMediaQuery from 'v-media-query'
Vue.use(vMediaQuery)

// Axios and default settings
import axios from 'axios'
let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['X-CSRF-Token'] = token
axios.defaults.headers.common['Accept'] = 'application/json'
Vue.prototype.$http = axios


//components
import TranslatorStart from './apps/translator/translator_pages/translator_start.vue'
import TranslatorLoading from './apps/translator/translator_pages/translator_loading.vue'
import TranslatorMainpage from './apps/translator/translator_pages/translator_mainpage.vue'
import TranslatorMenu from './apps/translator/translator_pages/translator_helpers/translator_menu/translator_menu.vue'
import TranslatorDrawer from './apps/translator/translator_pages/translator_helpers/translator_menu/translator_drawer.vue'

import TranslatorHomepage from './apps/translator/translator_pages/translator_homepage/translator_homepage.vue'
import TranslatorLanguages from './apps/translator/translator_pages/translator_languages/translator_languages.vue'

//imported component to be used on all the SPA
Vue.component('translator-menu', TranslatorMenu)
Vue.component('translator-drawer', TranslatorDrawer)

//routing
const routes = [
  {path: '/loading', component: TranslatorLoading},
  {path: '/test', component: TranslatorMainpage,
    children: [
      {path: '/homepage', component: TranslatorHomepage, name: 'homepage'},
      {path: '/languages', component: TranslatorLanguages}
    ]},
  { path: '/', redirect: '/loading' }
]

const router = new VueRouter({
  routes
})



//default component
document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    el: 'hello',
    store,
    router,
    template: '<translator-start/>',
    components: { TranslatorStart }

  })
})
