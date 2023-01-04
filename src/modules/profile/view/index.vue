<script setup>
import MyNameIs from "@/modules/profile/components/myNameIs.vue"
import Profile from "@/modules/profile/components/profile.vue"
import MySkills from "@/modules/profile/components/mySkills.vue"
</script>

<template>
  <div>
    <MyNameIs></MyNameIs>
    <profile></profile>
    <MySkills></MySkills>
    <div class="flex justify-center mb-8">
      <div class="text-center w-5/6 md:w-1/3">
        <h2 class="text-2xl text-primary-a mt-10 mb-8 font-bold">
          Get In Touch
        </h2>
        <h3 class="text-gray-400">
          Are you looking for a dedicated and customer/business oriented
          frontend developer?
        </h3>
        <p class="text-gray-400">
          <strong>Or</strong> do you want me to make you make a beautiful and/or
          professional website?
        </p>

        <div class="mt-8 flex justify-center">
          <router-link to="/contact" custom v-slot="{ navigate }">
            <a class="btn" @click="navigate" role="link"> CONTACT ME </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
