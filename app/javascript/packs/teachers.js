// Run this example by adding <%= javascript_pack_tag 'hello_vue' %>
/* eslint no-console: 0 */
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

//extentions
import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
 
Vue.use(VueRouter)
Vue.use(Vuetify)


//components
import TeacherMainpage from './teacher_pages/teacher_mainpage.vue'
import TeacherMenu from './teacher_pages/teacher_helpers/teacher_menu/teacher_menu.vue'
import TeacherAssignments from './teacher_pages/teacher_assignments/teacher_assignments.vue'
import TeacherCourses from './teacher_pages/teacher_courses/teacher_courses.vue'
import TeacherClasses from './teacher_pages/teacher_classes/teacher_classes.vue'
import Global from './general_helpers/global.vue'

Vue.component('teacher-menu', TeacherMenu)




//routing
const routes = [
	{path: '/assignments' , component : TeacherAssignments},
	{path: '/courses', component: TeacherCourses},
  {path: '/global', component: Global},
  {path: '/classes', component: TeacherClasses},

  { path: '/', redirect: '/classes' }
]

const router = new VueRouter({
	routes,
	

})

//default component
document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    el: 'hello',
    router,
    template: '<teacher-mainpage/>',
    components: { TeacherMainpage }
  })

  console.log(app)
})

