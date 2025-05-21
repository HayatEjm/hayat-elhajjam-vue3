import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AmiiboListView from '@/views/AmiiboListView.vue'
import AmiiboDetailView from '@/views/AmiiboDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/liste',
      name: 'liste',
      component: AmiiboListView
    },

    {
      path: '/detail/:tail',
      name: 'detail',
      component: AmiiboDetailView
    }

  ],
})

export default router
