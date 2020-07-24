import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = ()=> import('@/components/Home')

const TimeLine = ()=> import('@/components/TimeLine')

const AboutMe = ()=> import('@/components/AboutMe')

const PersonalNotes = ()=> import('@/components/persionalNotes/PersonalNotes')
const NoteDetails = ()=> import('@/components/persionalNotes/NoteDetails')

const Talkanymore = ()=> import('@/components/Talkanymore')

const WebsiteLinks = ()=> import('@/components/WebSiteLinks')

export default new Router({
  mode:'history',
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
