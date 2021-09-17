import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../views/Landing.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/games',
    name: 'Games',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Games.vue')
    }
  },
  {
    path: '/section',
    name: 'Section',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Section.vue')
    }
  },
  {
    path: '/success',
    name: 'Success',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Success.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
