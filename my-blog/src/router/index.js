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
import Login from '@/views/Login.vue'
import Edit from '@/components/edit.vue'
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
    path: '/photo',
    name: 'photo',
    component: Photo
  },
  {
    path: '/note',
    name: 'note',
    component: Note
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    redirect:'/edit',
    children:[
      {
        path:'/edit',
        component:Edit,
        meta:{
          title:'編輯器'
        }
      }
    ]

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
