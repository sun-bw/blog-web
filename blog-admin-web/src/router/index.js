import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
Vue.use(Router)

// const home = (resolve) => {
//   import('@/components/home').then(module => {
//     resolve(module)
//   })
// };
const a = (resolve) => {
  import('@/components/a').then(module => {
    resolve(module)
  })
}
const b = (resolve) => {
  import('@/components/b').then(module => {
    resolve(module)
  })
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      router:true
    },
    {
      path:'/a',
      name:'a',
      component:a,
      router:true
    },
    {
      path:'/b',
      name:'b',
      component:b,
      router:true
    }
  ]
})
