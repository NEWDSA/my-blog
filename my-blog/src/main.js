import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'
import App from './App.vue'
import router from './router'
// import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// Vue.config.productionTip = true
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueQuillEditor /* { default global options } */)
Vue.config.productionTip = process.env.NODE_ENV === 'production'
console.log(process.env.vue_APP_SERVICE_URL) // 开发环境 development,生产环境 production
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
