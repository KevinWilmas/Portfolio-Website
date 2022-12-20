<script setup></script>

<template>
  <div class="bg-primary-b h-96 relative">
    <div class="pt-28 w-full relative">
      <div class="relative justify-center flex items-center w-full z-20">
        <h1 class="font-Sacramento text-6xl font-bold text-primary-a mr-20">
          I am
        </h1>
        <img
          class="logo h-16 ml-4 absolute"
          src="../../../assets/img/icons8-k-96.png"
          alt="K"
        />
        <h1 class="font-Sacramento text-6xl font-bold text-primary-a">evin</h1>
      </div>
      <div
        class="flex w-full justify-center text-2xl text-primary-a relative z-20"
      >
        <h2 class="mr-2">a</h2>
        <h2 class="underline">pro</h2>
        <h2>grammer</h2>
      </div>
    </div>
    <img
      src="../../../assets/img/cloud.png"
      alt="cloud"
      class="absolute h-32 left-2 z-20"
    />
    <img
      src="../../../assets/img/cloud.png"
      alt="cloud"
      class="absolute h-32 right-2 top-0 z-20"
    />
    <img
      src="../../../assets/img/mountain.png"
      alt="mountain"
      class="absolute bottom-0 z-10"
    />
  </div>
</template>

<style scoped lang="css">
.logo {
  left: calc(50% - 21px);
  top: -16%;
}
</style>
