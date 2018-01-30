//extention
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Smooth ScrollTo
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  cancelable: true,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})


//Vuex
import {
  store
} from './homepage/homepage_store/homepage_store.js'

import vMediaQuery from 'v-media-query'
Vue.use(vMediaQuery)

// Axios and default settings
import axios from 'axios'
let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['X-CSRF-Token'] = token
axios.defaults.headers.common['Accept'] = 'application/json'

Vue.prototype.$http = axios


//components
import HomepageMainpage from './homepage/homepage_pages/homepage_mainpage.vue'
import Homepage from './homepage/homepage_pages/homepage/homepage.vue'
import WhatIsIt from './homepage/homepage_pages/what_is_it/what_is_it.vue'
import AsAStudent from './homepage/homepage_pages/as_a_student/as_a_student.vue'
import AsATeacher from './homepage/homepage_pages/as_a_teacher/as_a_teacher.vue'
import AsASchool from './homepage/homepage_pages/as_a_school/as_a_school.vue'
import Contact from './homepage/homepage_pages/contact/contact.vue'
import Help from './homepage/homepage_pages/help/help.vue'
import SiteMap from './homepage/homepage_pages/site_map/site_map.vue'
import TermsOfUse from './homepage/homepage_pages/terms_of_use/terms_of_use.vue'
import PrivacyNotice from './homepage/homepage_pages/privacy_notice/privacy_notice.vue'

import HomepageMenu from './homepage/homepage_pages/homepage_helpers/homepage_menu/homepage_menu.vue'
import HomepageDrawer from './homepage/homepage_pages/homepage_helpers/homepage_menu/homepage_drawer.vue'
import HomepageMenuSide from './homepage/homepage_pages/homepage_helpers/homepage_menu/homepage_menu_side.vue'
import HomepageFooter from './homepage/homepage_pages/homepage_helpers/homepage_footer/homepage_footer.vue'

//imported component to be used on all the SPA
Vue.component('homepage-menu-side', HomepageMenuSide)
Vue.component('homepage-menu', HomepageMenu)
Vue.component('homepage-footer', HomepageFooter)
Vue.component('homepage-drawer', HomepageDrawer)


//routing
const routes = [
  {path: '/', component: Homepage},
  {path: '/what', component: WhatIsIt},
  {path: '/as_student', component: AsAStudent},
  {path: '/as_teacher', component: AsATeacher},
  {path: '/as_school', component: AsASchool},
  {path: '/contact', component: Contact},
  {path: '/help', component: Help},
  {path: '/site_map', component: SiteMap},
  {path: '/terms', component: TermsOfUse},
  {path: '/privacy', component: PrivacyNotice}
]

const router = new VueRouter({
  mode: 'history',
  routes
})





  // request for the languages
  Vue.prototype.$http.get('/languages',{params:{ name: "HomepageMenu"}} )
    .then(function (response) {
      console.log("Async done")
      resolve()
    })
    .catch(function (error) {

    })



    //default component
    document.addEventListener('DOMContentLoaded', () => {
      document.body.appendChild(document.createElement('hello'))
      const app = new Vue({
        el: 'hello',
        store,
        router,
        template: '<homepage-mainpage/>',
        components: {
          HomepageMainpage
        }

      })
    })
