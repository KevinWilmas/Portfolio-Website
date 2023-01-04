<script setup>
import Header from "@/components/header.vue"
import Footer from "./components/footer.vue"
</script>

<template>
  <Header />
  <div class="page-adjust">
    <div class="absolute w-full bg-primary-b h-px z-50"></div>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
  <Footer />
</template>

<style>
.btn {
  /* background: #11cdd4; */
  background-image: -webkit-linear-gradient(top, #11cdd4, #11999e);
  background-image: -moz-linear-gradient(top, #11cdd4, #11999e);
  background-image: -ms-linear-gradient(top, #11cdd4, #11999e);
  background-image: -o-linear-gradient(top, #11cdd4, #11999e);
  background-image: linear-gradient(to bottom, #11cdd4, #11999e);
  -webkit-border-radius: 8;
  -moz-border-radius: 8;
  border-radius: 8px;
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  font-size: 18px;
  background: #3498db;
  padding: 12px 15px;
  text-decoration: none;
  border: none;
  display: flex;
  flex-flow: column;
  width: 15rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  cursor: pointer;
}

.btn:hover {
  background: #30e3cb;
  background-image: -webkit-linear-gradient(top, #30e3cb, #2bc4ad);
  background-image: -moz-linear-gradient(top, #30e3cb, #2bc4ad);
  background-image: -ms-linear-gradient(top, #30e3cb, #2bc4ad);
  background-image: -o-linear-gradient(top, #30e3cb, #2bc4ad);
  background-image: linear-gradient(to bottom, #30e3cb, #2bc4ad);
  text-decoration: none;
  cursor: pointer;
}
.page-adjust {
  margin-top: 111px;
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-active {
  transition: all 0.3s ease-in;
}

.route-leave-active {
  transition: all 0.3s ease-out;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
