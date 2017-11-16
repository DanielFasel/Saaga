
//extentions
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//Vuex
import {store} from './teacher_store/teacher_store.js'

import vMediaQuery from 'v-media-query'
Vue.use(vMediaQuery)

// Axios and default settings
import axios from 'axios'
let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['X-CSRF-Token'] = token
axios.defaults.headers.common['Accept'] = 'application/json'
Vue.prototype.$http = axios


//components
import TeacherMainpage from './teacher_pages/teacher_mainpage.vue'
import TeacherMenu from './teacher_pages/teacher_helpers/teacher_menu/teacher_menu.vue'
import TeacherCourses from './teacher_pages/teacher_courses/teacher_courses.vue'
import TeacherLessons from './teacher_pages/teacher_lessons/teacher_lessons.vue'

//imported component to be used on all the SPA
Vue.component('teacher-menu', TeacherMenu)


//routing
const routes = [
	{path: '/courses', component: TeacherCourses},
  {path: '/lessons', component: TeacherLessons},
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
    template: '<teacher-mainpage/>',
    components: { TeacherMainpage }

  })
  console.log(app)
})
