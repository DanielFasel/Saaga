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

import SuperAdminMainpage from './apps/super_admin/super_admin_pages/super_admin_mainpage.vue'
import SuperAdminMenu from './apps/super_admin/super_admin_pages/super_admin_helpers/super_admin_menu/super_admin_menu.vue'
import SuperAdminDrawer from './apps/super_admin/super_admin_pages/super_admin_helpers/super_admin_menu/super_admin_drawer.vue'
import SuperAdminHomepage from './apps/super_admin/super_admin_pages/super_admin_homepage/super_admin_homepage.vue'
//imported component to be used on all the SPA
Vue.component('super-admin-menu', SuperAdminMenu)
Vue.component('super-admin-drawer', SuperAdminDrawer)

//routing
const routes = [
  {path: '/homepage', component: SuperAdminHomepage},
  {path: '/', redirect: '/homepage'}
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
    template: '<super-admin-mainpage/>',
    components: { SuperAdminMainpage }

  })
})
