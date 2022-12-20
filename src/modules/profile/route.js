const routes = [
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/modules/profile/view/index.vue")
  }
]
export default routes.map((route) => {
  return { ...route }
})
