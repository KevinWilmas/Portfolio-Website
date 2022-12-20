import { createRouter, createWebHistory } from "vue-router"
import profileRoutes from "@/modules/profile/route.js"
import workRoutes from "@/modules/work/route.js"
import contactRoutes from "@/modules/contact/route.js"
const routes = [
  {
    path: "/",

    redirect: "/profile"
  },
  ...workRoutes,
  ...contactRoutes,

  ...profileRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
