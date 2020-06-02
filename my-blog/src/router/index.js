import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Albums from '@/components/albums.vue'
import Eidt from '@/components/edit'
import About from '@/views/About'
import Note from '@/views/Note'
import Search from '@/views/Search'
import Round from '@/components/Round'
import Music from '@/views/Music'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Round',
    component: Round
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
  },{
    path:'/music',
    name:'music',
    component:Music
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
