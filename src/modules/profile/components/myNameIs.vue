<script setup></script>

<template>
  <div
    class="bg-primary-b h-96 relative container-heigth z-50 profile-background"
  >
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
      class="left-cloud absolute h-32 bottom-24 left-2 z-20"
    />
    <img
      src="../../../assets/img/cloud.png"
      alt="cloud"
      class="right-cloud absolute h-32 right-2 top-0 z-20"
    />
    <img
      src="../../../assets/img/mountain.png"
      alt="mountain"
      class="absolute bottom-0 z-10 mountain-class"
    />
  </div>
</template>

<style scoped lang="css">
.logo {
  left: calc(50% - 21px);
  top: -16%;
}
.mountain-class {
  left: 0px;
  transition: all 0.5s ease-in-out;
}
.left-cloud,
.right-cloud {
  transition: all 0.7s ease-in-out;
}

@media (min-width: 650px) {
  .container-heigth {
    height: 550px;
  }
  .mountain-class {
    left: calc(50% - (598px / 2));
  }
  .left-cloud {
    left: calc(50% - 350px);
    bottom: 150px;
  }
  .right-cloud {
    right: calc(50% - 350px);
    top: 100px;
  }
}
.profile-background {
  bottom: 1px;
}
</style>
