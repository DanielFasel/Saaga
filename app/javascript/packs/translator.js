
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

//imported component to be used on all the SPA


//routing
const routes = [
  { path: '/', redirect: '/courses' }
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
