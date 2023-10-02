import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/Login.vue'
import register from '../views/Register.vue'
import blog from '../views/BlogForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    ,
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/project/1',
      name: 'ProjectDetail1',
      component: () => import('../views/1.vue'), // Create this component
    },
    {
      path: '/project/2',
      name: 'ProjectDetail2',
      component: () => import('../views/2.vue'), // Create this component
    },
    {
      path: '/project/3',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/Portfolio.vue')
    },
    {
      path: '/project/4',
      name: 'blog',
      component: blog
    }

  ]
})

export default router
