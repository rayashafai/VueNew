import { createRouter, createWebHistory } from 'vue-router'
import TagDetails from '@/components/TagDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TagDetails // Or your main view
  }
  // Add other routes as needed
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router