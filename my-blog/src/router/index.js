import Vue from 'vue'
import VueRouter from 'vue-router'
// import Albums from '@/components/albums.vue'
import albs from '@/components/albms.vue'
import Eidt from '@/components/edit'
import About from '@/views/About'
import Note from '@/views/Note'
import Search from '@/views/Search.vue'
import Round from '@/components/Round.vue'
import Music from '@/views/Music'
import Photo from '@/views/Photo.vue'
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
    component: albs
  },
  {
    path: '/photo/:id',
    name: 'photo',
    component: Photo
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
  }, {
    path: '/music',
    name: 'music',
    component: Music
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
