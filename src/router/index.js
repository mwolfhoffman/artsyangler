import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Bio from '@/components/Bio'
import Gallery from '@/components/Gallery'
import Statement from '@/components/Statement'
import Store from '@/components/Store'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Carousel from '@/components/Carousel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path:'',
          name: 'Carousel',
          component: Carousel
        },
        {
          path: 'about',
          component: About,
          children: [
            {
              path: 'biography',
              name: 'Bio',
              component: Bio
            },
            {
              path: 'statement',
              name: 'Statement',
              component: Statement
            },
            {
              path: 'contact',
              name: 'Contact',
              component: Contact
            }
          ]
        },

        {
          path: '/gallery',
          name: 'Gallery',
          component: Gallery
        },
        {
          path: '/store',
          name: 'Store',
          component: Store
        },

      ]
    }
  ]
})
