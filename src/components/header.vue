<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const openMenu = (e) => {
  const menu = document.querySelector(".menu")
  menu.classList.add("active")
}

const closeMenu = (e) => {
  const menu = document.querySelector(".menu")
  menu.classList.remove("active")
}
const pushRouterMobile = (event, route) => {
  const el = document.querySelector(".headerOptionActive")
  if (el) {
    el.classList.remove("headerOptionActive")
  }
  event.target.className += " headerOptionActive"
  router.push(route)
  closeMenu()
}

// const obsCallback = function (entries, observer) {
//   entries.array.forEach((entry) => {
//     console.log(entry)
//   })
// }

// const obsOptions = {
//   root: null,
//   threshold: 0.1
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions)
// observer.observe(section1)
</script>

<template>
  <div
    class="w-full h-28 bg-primary-b border-b border-primary-a flex items-center p-4 justify-between fixed top-0 z-40"
  ></div>
  <div
    class="w-full h-28 bg-transparent border-b border-none flex items-center p-4 justify-between fixed top-0 header-adjust"
  >
    <div class="w-10 h-10">
      <RouterLink to="/profile"
        ><img src="../assets/img/icons8-k-96.png" alt="Icon"
      /></RouterLink>
    </div>
    <div class="sm:hidden" @click.prevent="openMenu($event)">
      <i class="uil uil-bars text-3xl text-primary-a pr-2"></i>
    </div>
    <div class="hidden sm:block">
      <ul class="flex text-gray-500">
        <li
          class="mx-4 cursor-pointer headerOptionActive"
          @click="pushRouterMobile($event, 'profile')"
        >
          <RouterLink to="/profile"> Profile</RouterLink>
        </li>
        <li
          class="mx-4 cursor-pointer"
          @click="pushRouterMobile($event, 'work')"
        >
          <RouterLink to="/work"> Work</RouterLink>
        </li>
        <li
          class="mx-4 cursor-pointer"
          @click="pushRouterMobile($event, 'contact')"
        >
          <RouterLink to="/contact"> Contact</RouterLink>
        </li>
      </ul>
    </div>
  </div>

  <div
    class="menu hidden fixed top-0 bottom-0 left-0 right-0 bg-black mobile-menu"
  >
    <div class="flex justify-center w-full pt-20">
      <span
        class="text-xl text-white absolute top-4 right-4 cursor-pointer"
        @click.prevent="closeMenu"
      >
        <i class="uil uil-times text-2xl" />
      </span>
      <ul class="flex flex-col text-white">
        <li
          class="my-4 cursor-pointer"
          @click="pushRouterMobile($event, 'profile')"
        >
          <RouterLink to="/profile"> Profile</RouterLink>
        </li>
        <li
          class="my-4 cursor-pointer"
          @click="pushRouterMobile($event, 'work')"
        >
          <RouterLink to="/work"> Work</RouterLink>
        </li>
        <li
          class="my-4 cursor-pointer"
          @click="pushRouterMobile($event, 'contact')"
        >
          <RouterLink to="/contact"> Contact</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="css">
.active {
  display: block;
}
/* .headerOptionActive {
  @apply text-primary-a;
} */
.mobile-menu {
  z-index: 80;
}
.header-adjust {
  z-index: 70;
}
a:active,
a:hover,
a.router-link-active {
  @apply text-primary-a;
}
</style>
