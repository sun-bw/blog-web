import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '@/components/Home'

const a = (resolve) => {
  import('@/components/a').then(module => {
    resolve(module)
  })
};
const b = (resolve) => {
  import('@/components/b').then(module => {
    resolve(module)
  })
};

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/a',
      name: 'a',
      component: a
    },
    {
      path: '/b',
      name: 'b',
      component: b
    }
  ]
})
