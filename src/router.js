import { createRouter, createWebHistory } from "vue-router"
import HomePage from "./modules/profile/view/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/profile"
    },
    {
      path: "/profile",
      component: HomePage
    },
    {
      path: "/contact",
      component: () => import("./modules/contact/view/index.vue")
    },
    { path: "/work", component: () => import("./modules/work/view/index.vue") }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  }
})

export default router
