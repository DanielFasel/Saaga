
//extentions
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//Vuex
import {store} from './translator/translator_store/translator_store.js'

import vMediaQuery from 'v-media-query'
Vue.use(vMediaQuery)

// Axios and default settings
import axios from 'axios'
let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['X-CSRF-Token'] = token
axios.defaults.headers.common['Accept'] = 'application/json'
Vue.prototype.$http = axios


//components
import TranslatorMainpage from './translator/translator_pages/translator_mainpage.vue'
import TranslatorMenu from './translator/translator_pages/translator_helpers/translator_menu/translator_menu.vue'
import TranslatorDrawer from './translator/translator_pages/translator_helpers/translator_menu/translator_drawer.vue'
import TranslatorHomepage from './translator/translator_pages/translator_homepage/translator_homepage.vue'
import TranslatorLanguages from './translator/translator_pages/translator_languages/translator_languages.vue'

//imported component to be used on all the SPA
Vue.component('translator-menu', TranslatorMenu)
Vue.component('translator-drawer', TranslatorDrawer)

//routing
const routes = [
  { path: '/', redirect: '/homepage' },
  {path: '/homepage', component: TranslatorHomepage},
  {path: '/languages', component: TranslatorLanguages}
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
    template: '<translator-mainpage/>',
    components: { TranslatorMainpage }

  })
  console.log(app)
})
