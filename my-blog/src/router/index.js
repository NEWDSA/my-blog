import Vue from 'vue'
import VueRouter from 'vue-router'
// import Albums from '@/components/albums.vue'
import albs from '@/components/albms.vue'
import About from '@/views/About'
import Note from '@/views/Note'
import Search from '@/views/Search.vue'
import Round from '@/components/Round.vue'
import Music from '@/views/Music'
import Photo from '@/views/Photo.vue'
//import Login from '@/views/Login.vue'
import Login from '@/views/logins.vue'
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
    component: Login
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit
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

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    const token = localStorage.getItem('Authorization')

    if (token === 'null' || token === '') {
      next('/login')
    } else {
      next()
    }
  }
})
export default router
