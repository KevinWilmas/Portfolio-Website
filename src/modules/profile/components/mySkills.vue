<script setup>
import { onMounted, ref } from "vue"
// create vertical carrousel
const contentImg = ref()
let imgHeight = 52
let imgPosition = 0

const moveImg = () => {
  imgPosition += imgHeight
  if (imgPosition > imgHeight * 3) {
    imgPosition = 0
  }
  // console.log(contentImg)
  // console.log(contentImg.value)
  // console.log(contentImg.value.style)
  if (contentImg.value) {
    contentImg.value.style.transform = `translateY(${imgPosition * -1}px)`
  }
}

onMounted(() => {
  setInterval(moveImg, 2000)
})
</script>

<template>
  <div class="flex flex-col justify-center items-center mb-8">
    <h1 class="font-bold text-2xl text-primary-a mb-8">My Skills</h1>
    <div class="flex items-center">
      <div
        class="h-32 w-32 rounded-full overflow-hidden border-4 border-gray-300"
      >
        <img src="../../../assets/img/profile.jpg" alt="" />
      </div>
      <div class="skill-circle relative h-16 w-16 bg-gray-300 rounded-full">
        <div class="h-16 w-16 p-3 rounded-full overflow-hidden">
          <div class="content-img" ref="contentImg">
            <img
              class="h-10 w-10 mb-3"
              src="../../../assets/img/vue.png"
              alt=""
            />
            <img
              class="h-10 w-10 mb-3"
              src="../../../assets/img/javascript.png"
              alt=""
            />
            <img
              class="h-10 w-10 mb-3"
              src="../../../assets/img/html.png"
              alt=""
            />
            <img
              class="h-10 w-10 mb-3"
              src="../../../assets/img/css.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="text-center w-5/6 md:w-1/3">
      <h1 class="text-2xl text-primary-a mt-10">Vue</h1>
      <p class="mt-6 text-lg text-gray-500">
        Have experience with the basic and core concepts of Vue Js along with
        the advanced ones. Familiarity with Options and Composition API. Check
        out the
        <a
          class="paragraph-link"
          href="https://find-a-coach-c3c4e.web.app/coaches"
          >Find A Coach</a
        >
        project which I worked on.
      </p>
      <h1 class="text-2xl text-primary-a mt-10">Javascript</h1>
      <p class="mt-6 text-lg text-gray-500">
        I am very familiar with and have working knowledge in Javascript. I am
        able to "wire up" your pages and make them come alive! For more
        technical information, I have knowlege in advanced DOM manipulation,
        Object-Oriented Programming (OOP), External libraries, Asynchronous
        Javascript, and More! Check out the
        <a class="paragraph-link" href="https://forkify-kevinwilmas.netlify.app"
          >Forkify</a
        >
        and
        <a class="paragraph-link" href="https://mapty-kevinwilmas.netlify.app"
          >Mapty</a
        >
        projects that I worked on.
      </p>
      <h1 class="text-2xl text-primary-a mt-10">HTML & CSS</h1>
      <p class="mt-6 text-lg text-gray-500">
        You cannot be a good web developer without HTML and CSS. I have working
        knowledge with these core technologies as well. I am able to create or
        edit whatever is needed to get the job done, while also making it pretty
        🤩.
      </p>
    </div>
  </div>
</template>

<style scoped lang="css">
.skill-circle {
  margin-left: 100px;
}
.skill-circle::before {
  content: "";
  position: absolute;
  top: 50%;
  width: 100px;
  height: 2px;
  left: -100px;

  @apply bg-slate-300;
}

.content-img {
  transition: transform 0.5s ease-in-out;
}

.paragraph-link {
  @apply text-primary-a underline;
}
.background-black {
  background: black;
  width: 100%;
}
</style>
