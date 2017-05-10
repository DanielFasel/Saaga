// Run this example by adding <%= javascript_pack_tag 'hello_vue' %>
/* eslint no-console: 0 */
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue/dist/vue.esm'
import Modal from './modal_help.vue'

import Vuetify from 'vuetify'
 
Vue.use(Vuetify)




document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    el: 'hello',
    template: '<Modal/>',
    components: { Modal }
  })

  console.log(modal)
})

