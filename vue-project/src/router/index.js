import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import BookingView from '../views/BookingView.vue'
import BreakfastMenu from '../components/BreakfastMenu.vue'
import LunchMenu from '../components/LunchMenu.vue'
import DinnerMenu from '../components/DinnerMenu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView,
      children: [
        {
          path: 'breakfast',
          component: BreakfastMenu
        },
        {
          path: 'lunch',
          component: LunchMenu
        },
        {
          path: 'dinner',
          component: DinnerMenu
        }
      ]
    },
    {
      path: '/book',
      name: 'book',
      component: BookingView
    }

  ]
})

export default router
