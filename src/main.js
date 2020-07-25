// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button,Main,Menu,Icon,Dialog,Step,Steps,Input,Pagination,MenuItem} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false;
Vue.use(Button);Vue.use(Main);Vue.use(Menu);Vue.use(Icon);Vue.use(Dialog);
Vue.use(Step);Vue.use(Steps);Vue.use(Input);Vue.use(Pagination);Vue.use(MenuItem)
Vue.use(VueParticles)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
