import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = (resolve => {
  import('@/components/Home').then(module => {
    resolve(module)
  })
})

const TimeLine = (resolve => {
  import('@/components/TimeLine').then(module => {
    resolve(module)
  })
})

const AboutMe = (resolve => {
  import('@/components/AboutMe').then(module => {
    resolve(module)
  })
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path:'/TimeLine',
      name:'TimeLine',
      component:TimeLine,
    },
    {
      path:'/AboutMe',
      name:'AboutMe',
      component:AboutMe,
    }
  ]
})
