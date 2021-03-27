import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import './plugins'
import './scss/main.scss';
import {fb} from './firebase'

Vue.component('Navbar', require('./layouts/home/Navbar.vue').default);
Vue.config.productionTip = false

let app = '';

fb.auth().onAuthStateChanged(function(){

  if(!app){
    new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }

});



