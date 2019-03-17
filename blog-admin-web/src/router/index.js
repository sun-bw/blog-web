import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const home = (resolve) => {
  import('@/components/home').then(module => {
    resolve(module)
  })
};
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
