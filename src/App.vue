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
</style>
