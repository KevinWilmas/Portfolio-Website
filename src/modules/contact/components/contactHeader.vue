<script setup></script>

<template>
  <div class="bg-primary-b h-52 w-full relative container-heigth">
    <div
      class="background-class absolute flex items-center justify-center left-0 right-0 pt-0 bottom-0 h-52 top-0"
    >
      <img
        src="../../../assets/img/Contact_background2.png"
        alt=""
        class="top-0 w-auto bottom-0 left-0 right-0 justify-center"
      />
    </div>
    <div class="pt-28 w-full relative flex">
      <div class="relative justify-center flex items-center w-full z-20">
        <h1 class="font-Sacramento text-6xl font-bold text-primary-a">
          Contact Me
        </h1>
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
  </div>
</template>

<style scoped lang="css">
.logo {
  left: calc(50% - 21px);
  top: -16%;
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
  .background-class {
    height: 300px;
  }
}
</style>
