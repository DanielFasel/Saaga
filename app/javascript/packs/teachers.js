// Run this example by adding <%= javascript_pack_tag 'hello_vue' %>
/* eslint no-console: 0 */
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue/dist/vue.esm'
import Courses from './teacherspage/courses/courses.vue'
import Classes from './teacherspage/classes/app.vue'
import Assignemnts from './teacherspage/assignments/assignments.vue'

import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
 

Vue.use(VueRouter)
Vue.use(Vuetify)

const routes =[
	{path:'/courses', component: Courses},

	{path:'/assignments', component: Assignemnts}
]

const router = new VueRouter({
	routes

})


document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    el: 'hello',
    router,
    template: '<Classes/>',
    components: { Classes }
  })

  console.log(app)
})

