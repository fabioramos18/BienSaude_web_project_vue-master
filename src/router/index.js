import Vue from 'vue'
import VueRouter from 'vue-router'
import {fb} from '../firebase'
require('firebase/auth')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/auth',
      name: 'Authentication',
      component: () => import('@/views/auth/index.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/register/index.vue'),
    },

    {
      path: '/e',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Início',
          component: () => import('@/views/home/Index.vue'),
        },
        
        {
          path: 'sobre',
          name: 'Sobre',
          component: () => import('@/views/about/Index.vue'),
          meta: { src: require('@/assets/about.jpg') },
        },
        {
          path: 'Services',
          name: 'Serviços',
          component: () => import('@/views/servicess/Index.vue'),
          meta: { src: require('@/assets/service4.jpg') },
        },
        {
          path: '/Services/Details/:Pid',
          name: 'details',
          component: () => import('@/views/servicess/Details.vue'),
        },
        {
          path: 'contactos',
          name: 'Contactos',
          component: () => import('@/views/contact-us/Index.vue'),
          meta: { src: require('@/assets/contact.jpg') },
        },
        
        
      ],
    },
    {
      path: '/user',
      meta: {requiresAuth: true},
      component: () => import('@/layouts/user/Index.vue'),
      children: [
        
        {
          path: 'inicio',
          name: 'inicio',
          component: () => import('@/views/inicio/Index.vue'),
        },
        {
          path: 'addmassage',
          name: 'addmassage',
          component: () => import('@/views/addmassage/Index.vue'),
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/views/profile/Index.vue'),
        },
        {
          path: 'bookings',
          name: 'bookings',
          component: () => import('@/views/bookings/Index.vue'),
        },
      ],
      
    },
    
    {
      path: '*',
      name: 'FourOhFour',
      component: () => import('@/views/404/Index.vue'),
    },
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
}
})

router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser
  
  if (requiresAuth && !currentUser) {
    next({
      path: '/user',
      //query: { redirect: to.fullPath }
    })
  }  else if (requiresAuth && currentUser) {
      next({
        //path: '/e',
       //redirect: "/e"
      })
  } else {
    next() 
  }
})

export default router
