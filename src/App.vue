<script setup>
import Header from "@/components/header.vue"
import Footer from "./components/footer.vue"
</script>

<template>
  <Header />
  <div class="mt-28">
    <router-view />
  </div>
  <Footer />
</template>

<style scoped></style>
