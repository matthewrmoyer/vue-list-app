import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
import AllBoards from '@/components/AllBoards'
import SingleBoard from '@/components/SingleBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/allboards',
      name: 'AllBoards',
      component: AllBoards
    },
    {
      path: '/singleBoard/:id',
      name: 'SingleBoard',
      component: SingleBoard
    }
  ]
})
