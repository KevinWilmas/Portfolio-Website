<script setup></script>

<template>
  <div>
    <div
      class="bg-primary-b h-52 w-full relative container-heigth z-50 work-background"
    >
      <div class="pt-28 w-full relative">
        <div class="relative justify-center flex items-center w-full z-20">
          <h1 class="font-Sacramento text-6xl font-bold text-primary-a">
            Work
          </h1>
        </div>
      </div>
      <img
        src="../../../assets/img/cloud.png"
        alt="cloud"
        class="left-cloud absolute h-32 bottom-24 left-2 z-10"
      />
      <img
        src="../../../assets/img/cloud.png"
        alt="cloud"
        class="right-cloud absolute h-32 right-2 top-0 z-10"
      />
      <img
        src="../../../assets/img/flying-bird-png-flying-birds-clipart-biezumd-7919.png"
        alt="birds"
        class="absolute w-full bottom-0 z-10 bird-class justify-center items-center mt-28"
      />
    </div>
    <div class="bg-white h-3"></div>
  </div>
</template>

<style scoped lang="css">
.work-background {
  bottom: 1px;
}
.logo {
  left: calc(50% - 21px);
  top: -16%;
}
.bird-class {
  left: 0px;
  transition: all 0.5s ease-in-out;
  position: absolute;
  justify-content: center;
  align-items: center;
}
.left-cloud,
.right-cloud {
  transition: all 0.7s ease-in-out;
}

@media (min-width: 650px) {
  .container-heigth {
    height: 300px;
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
</style>
