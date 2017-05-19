// Run this example by adding <%= javascript_pack_tag 'hello_vue' %>
/* eslint no-console: 0 */
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

//extentions
import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



// Axios and default settings
import axios from 'axios'
let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['X-CSRF-Token'] = token
axios.defaults.headers.common['Accept'] = 'application/json'
Vue.prototype.$http = axios


//components
import StudentMainpage from './student_pages/student_mainpage.vue'
import StudentMenu from './student_pages/student_helpers/student_menu/student_menu.vue'
import StudentCourses from './student_pages/student_courses/student_courses.vue'
import StudentHomeworks from './student_pages/student_homeworks/student_homeworks.vue'
import Global from './general_helpers/global.vue'


Vue.component('student-menu', StudentMenu)




//routing
const routes = [
	{path: '/courses' , component : StudentCourses},
  {path: '/homeworks', component: StudentHomeworks},
  {path: '/global', component: Global},
  { path: '/', redirect: '/homeworks' }

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
    template: '<student-mainpage/>',
    components: { StudentMainpage }
  })

  console.log(app)
})

