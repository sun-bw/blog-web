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

const PersonalNotes = (resolve => {
  import('@/components/persionalNotes/PersonalNotes').then(module => {
    resolve(module)
  })
})

const NoteDetails = (resolve => {
  import('@/components/persionalNotes/NoteDetails').then(module => {
    resolve(module)
  })
})

const Talkanymore = (resolve => {
  import('@/components/Talkanymore').then(module => {
    resolve(module)
  })
})

const WebsiteLinks = (resolve) => {
  import('@/components/WebSiteLinks').then(module => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      router:true
    },
    {
      path:'/PersonalNotes',
      name:'PersonalNotes',
      component:PersonalNotes,
      router:true
    },
    {
      path:'/TimeLine',
      name:'TimeLine',
      component:TimeLine,
      router:true
    },
    {
      path:'/AboutMe',
      name:'AboutMe',
      component:AboutMe,
      router:true
    },
    {
      path:'/NoteDetails/:id',
      name:'NoteDetails',
      component:NoteDetails,
      router:true
    },
    {
      path:'/Talkanymore',
      name:'Talkanymore',
      component:Talkanymore,
      router:true
    },
    {
      path:'/WebsiteLinks',
      name:'WebsiteLinks',
      component:WebsiteLinks,
      router:true
    }
  ]
})
