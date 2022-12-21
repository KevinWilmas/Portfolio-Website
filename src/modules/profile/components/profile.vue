<script setup></script>

<template>
  <div class="py-16 flex flex-col justify-center items-center">
    <div class="h-36 w-36 rounded-full overflow-hidden">
      <img src="../../../assets/img/profile.jpg" alt="" />
    </div>
    <div class="text-center w-5/6 md:w-1/3">
      <h1 class="text-2xl text-primary-a mt-10">Hello!</h1>
      <p class="mt-6 text-lg text-gray-500">
        I am an aspiring
        <strong>Software Development Professional</strong> seeking a career
        where I may utilize my technical skills, experience, and training
        supporting end-users in a technical environment while also driving
        business objectives.
      </p>
      <div class="flex w-full justify-center mt-6">
        <span
          v-for="(item, index) in 4"
          :key="index"
          class="w-1 h-1 block mx-2 bg-gray-300 rounded-full"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
