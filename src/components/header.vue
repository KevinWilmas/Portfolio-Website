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
</script>

<template>
  <div
    class="w-full h-28 bg-primary-b border-b border-primary-a flex items-center p-4 justify-between fixed top-0 z-40"
  >
    <div class="w-10 h-10">
      <img src="../assets/img/icons8-k-96.png" alt="Icon" />
    </div>
    <div class="sm:hidden" @click.prevent="openMenu($event)">
      <i class="uil uil-bars text-3xl text-primary-a"></i>
    </div>
    <div class="hidden sm:block">
      <ul class="flex text-gray-500">
        <li
          class="mx-4 cursor-pointer headerOptionActive"
          @click="pushRouterMobile($event, 'profile')"
        >
          Profile
        </li>
        <li
          class="mx-4 cursor-pointer"
          @click="pushRouterMobile($event, 'work')"
        >
          Work
        </li>
        <li
          class="mx-4 cursor-pointer"
          @click="pushRouterMobile($event, 'contact')"
        >
          Contact
        </li>
      </ul>
    </div>
  </div>
  <div class="menu hidden fixed top-0 bottom-0 left-0 right-0 bg-black z-50">
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
          Profile
        </li>
        <li
          class="my-4 cursor-pointer"
          @click="pushRouterMobile($event, 'work')"
        >
          Work
        </li>
        <li
          class="my-4 cursor-pointer"
          @click="pushRouterMobile($event, 'contact')"
        >
          Contact
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="css">
.active {
  display: block;
}
.headerOptionActive {
  @apply text-primary-a;
}
</style>
