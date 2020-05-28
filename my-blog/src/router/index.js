import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Albums from '@/components/albums.vue'
import Eidt from '@/components/edit.vue'
import About from '@/views/About.vue'
import Note from '@/views/Note.vue'
import Search from '@/views/Search.vue'
import { BIconMusicNote } from 'bootstrap-vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/albums',
    name: 'albums',
    component: Albums
  },
  {
    path: '/note',
    name: 'note',
    component: Note
  },
  {
    path: '/eidt',
    name: 'edit',
    component: Eidt
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path:'/search',
    name:'search',
    component:Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
