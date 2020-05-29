import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Albums from '@/components/albums.vue'
import Eidt from '@/components/edit.vue'
import About from '@/views/About.vue'
import Note from '@/views/Note.vue'
import Search from '@/views/Search.vue'
import Robot from '@/views/Robot.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Robot',
    component: Robot
  },
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
    path: '/search',
    name: 'search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
