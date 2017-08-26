//extentions
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//Vuex
import {
  store
} from './homepage_store/homepage_store.js'

import vMediaQuery from 'v-media-query'
Vue.use(vMediaQuery)

// Axios and default settings
import axios from 'axios'
let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['X-CSRF-Token'] = token
axios.defaults.headers.common['Accept'] = 'application/json'
Vue.prototype.$http = axios


//components
import HomepageMainpage from './homepage_pages/homepage_mainpage.vue'
import Homepage from './homepage_pages/homepage/homepage.vue'
import WhatIsIt from './homepage_pages/what_is_it/what_is_it.vue'
import AsAStudent from './homepage_pages/as_a_student/as_a_student.vue'
import AsATeacher from './homepage_pages/as_a_teacher/as_a_teacher.vue'
import AsASchool from './homepage_pages/as_a_school/as_a_school.vue'
import Contact from './homepage_pages/contact/contact.vue'
import Help from './homepage_pages/help/help.vue'
import SiteMap from './homepage_pages/site_map/site_map.vue'
import TermsOfUse from './homepage_pages/terms_of_use/terms_of_use.vue'
import PrivacyNotice from './homepage_pages/privacy_notice/privacy_notice.vue'

import HomepageMenu from './homepage_pages/homepage_helpers/homepage_menu/homepage_menu.vue'
import HomepageFooter from './homepage_pages/homepage_helpers/homepage_footer/homepage_footer.vue'
import HomepageMainMenu from './homepage_pages/homepage_helpers/homepage_main_menu/homepage_main_menu.vue'
//imported component to be used on all the SPA
Vue.component('homepage-menu', HomepageMenu)
Vue.component('homepage-footer', HomepageFooter)
Vue.component('homepage-main-menu', HomepageMainMenu)


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
      routes
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
      console.log(app)
    })
