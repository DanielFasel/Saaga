
//extentions
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//Vuex
import {store} from './teacher/teacher_store/teacher_store.js'

import vMediaQuery from 'v-media-query'
Vue.use(vMediaQuery)

// Axios and default settings
import axios from 'axios'
let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['X-CSRF-Token'] = token
axios.defaults.headers.common['Accept'] = 'application/json'
Vue.prototype.$http = axios


//components

import TeacherStart from './teacher/teacher_pages/teacher_start.vue'
import TeacherLoading from './teacher/teacher_pages/teacher_loading.vue'
import TeacherMainpage from './teacher/teacher_pages/teacher_mainpage.vue'
import TeacherMenu from './teacher/teacher_pages/teacher_helpers/teacher_menu/teacher_menu.vue'
import TeacherDrawer from './teacher/teacher_pages/teacher_helpers/teacher_menu/teacher_drawer.vue'

import TeacherCourses from './teacher/teacher_pages/teacher_courses/teacher_courses.vue'
import TeacherLessons from './teacher/teacher_pages/teacher_lessons/teacher_lessons.vue'



//imported component to be used on all the SPA
Vue.component('teacher-menu', TeacherMenu)
Vue.component('teacher-drawer', TeacherDrawer)


//routing
const routes = [
	{path: '/loading', component: TeacherLoading},
	{path: '/test', component: TeacherMainpage,
		children: [
			{path: '/courses', component: TeacherCourses, name: 'courses'},
			{path: '/lessons', component: TeacherLessons}
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
    template: '<teacher-start/>',
    components: { TeacherStart }

  })
})
