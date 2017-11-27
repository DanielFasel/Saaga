
//extentions
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//Vuex
import {store} from './student/student_store/student_store.js'

import vMediaQuery from 'v-media-query'
Vue.use(vMediaQuery)

// Axios and default settings
import axios from 'axios'
let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['X-CSRF-Token'] = token
axios.defaults.headers.common['Accept'] = 'application/json'
Vue.prototype.$http = axios


//components
import StudentMainpage from './student/student_pages/student_mainpage.vue'
import StudentMenu from './student/student_pages/student_helpers/student_menu/student_menu.vue'
import StudentCourses from './student/student_pages/student_courses/student_courses.vue'
import StudentHomeworks from './student/student_pages/student_homeworks/student_homeworks.vue'

//imported component to be used on all the SPA
Vue.component('student-menu', StudentMenu)



//routing
const routes = [
	{path: '/courses' , component : StudentCourses},
  {path: '/homeworks', component: StudentHomeworks},
  { path: '/', redirect: '/homeworks' }
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
    template: '<student-mainpage/>',
    components: { StudentMainpage }
  })
  console.log(app)
})
