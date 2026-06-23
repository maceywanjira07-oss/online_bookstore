import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import Admin from '@/components/Admin.vue'
import Cart from '@/components/Cart.vue'
import Library from '@/components/Library.vue'
import Profile from '@/components/Profile.vue'
import Viewbook from '@/components/Viewbook.vue'
import Books from '@/components/Books.vue'
import Wishlist from '@/components/Wishlist.vue'
import SignUp from '@/components/SignUp.vue'
import Login from '@/components/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/library',
      component: Library
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path:'/view_book',
      component: Viewbook
    },
  
    
    {
      path:'/books',
      component: Books
    },
    {
      path:'/wishlist',
      component: Wishlist
    } ,
     {
      path:'/sign_up',
      component: SignUp
    },
     {
      path:'/login',
      component: Login
    }
  ],
})

export default router
