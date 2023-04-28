<script setup>
import { onMounted, ref } from "vue"
// create vertical carrousel
const contentImg = ref()
let imgHeight = 114
let imgPosition = 0

const moveImg = () => {
  imgPosition += imgHeight
  if (imgPosition > imgHeight * 3) {
    imgPosition = 0
  }
  if (contentImg.value) {
    contentImg.value.style.transform = `translateY(${imgPosition * -1}px)`
  }
}

onMounted(() => {
  setInterval(moveImg, 2000)
})
</script>

<template>
  <div>
    <div class="flex items-center justify-center">
      <div
        class="skill-circle relative h-32 w-32 bg-gray-300 rounded-full overflow-hidden"
      >
        <div class="h-32 w-32 p-4 overflow-hidden">
          <div class="content-img pt-2" ref="contentImg">
            <img
              class="h-20 w-20 mb-9 ml-2"
              src="../../../assets/img/vue.png"
              alt=""
            />
            <img
              class="h-20 w-20 mb-9 ml-2"
              src="../../../assets/img/javascript.png"
              alt=""
            />
            <img
              class="h-20 w-20 mb-9 ml-2"
              src="../../../assets/img/html.png"
              alt=""
            />
            <img
              class="h-20 w-20 mb-9 ml-2"
              src="../../../assets/img/css.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center mb-8">
      <div class="text-center w-5/6 md:w-1/3">
        <h1 class="text-2xl text-primary-a mt-10">What I have been up to.</h1>
        <p class="mt-6 text-lg pb-5 text-gray-500">
          Take a look at some of the project that I have worked on.
        </p>
      </div>
      <div
        class="bg-primary-d h-96 container-heigth w-full flex justify-center items-center"
      >
        <div
          class="flex w-full container-heigth h-96 justify-center flex-col items-center py-4"
        >
          <a
            class="w-2/3 cursor-pointer overflow-hidden rounded-lg"
            href="https://forkify-kevinwilmas.netlify.app/"
          >
            <img
              class="picture"
              src="../../../assets/img/Forkify.png"
              alt="Forkify"
          /></a>
          <div class="text-box h-3/5 flex flex-col justify-center items-center">
            <h1 class="text-xl pt-3 font-bold text-white">Forkify</h1>
            <h1 class="text-white">Javascript</h1>
            <p class="text-sm w-11/12 text-center pb-3">
              In this project, you are able to search for recipes, bookmark
              them, and even create recipes yourself! This application utilizes
              external libraries, local storage, and more.
            </p>
            <a
              href="https://forkify-kevinwilmas.netlify.app/"
              class="btn cursor-pointer"
              >View on Netlify</a
            >
          </div>
        </div>
      </div>
      <div
        class="bg-primary-e h-96 container-heigth w-full flex justify-center items-center"
      >
        <div
          class="flex w-full container-heigth h-96 justify-center flex-col items-center py-4"
        >
          <a
            class="w-2/3 cursor-pointer overflow-hidden rounded-lg"
            href="https://find-a-coach-c3c4e.web.app/coaches"
          >
            <img
              class="picture"
              src="../../../assets/img/Find_a_Coach.png"
              alt="Find A Coach"
          /></a>
          <div class="text-box h-3/5 flex flex-col justify-center items-center">
            <h1 class="text-xl pt-3 font-bold text-white">Find A Coach</h1>
            <h1 class="text-white">Vue/Javascript</h1>
            <p class="text-sm w-11/12 text-center pb-3">
              This is a project where IT professionals can sign up to offer
              their services along with students being able to search for
              "Coaches". This project uses firebase to store the users and the
              requests.
            </p>
            <a
              href="https://find-a-coach-c3c4e.web.app/coaches"
              class="btn cursor-pointer"
              >View on Firebase</a
            >
          </div>
        </div>
      </div>
      <div
        class="bg-primary-f h-96 container-heigth w-full flex justify-center items-center"
      >
        <div
          class="flex w-full container-heigth h-96 justify-center flex-col items-center py-4"
        >
          <a
            class="w-2/3 cursor-pointer overflow-hidden rounded-lg"
            href="https://forum-app-kevinwilmas.netlify.app"
          >
            <img
              class="picture"
              src="../../../assets/img/Forum_App.png"
              alt="Forum App Image"
          /></a>
          <div class="text-box h-3/5 flex flex-col justify-center items-center">
            <h1 class="text-xl pt-3 font-bold text-white">Find A Coach</h1>
            <h1 class="text-white">Vue.js CAPI</h1>
            <p class="text-sm w-11/12 text-center pb-3">
              Here is a forum application in which you can comment on posts,
              edit your profile, and eventually create threads for yourself
              along with many other features. Currently unfinished but one of my
              bigger projects.
            </p>
            <a
              href="https://forum-app-kevinwilmas.netlify.app"
              class="btn cursor-pointer"
              >View on Netlify</a
            >
          </div>
        </div>
      </div>
      <div
        class="bg-primary-g h-96 container-heigth w-full flex justify-center items-center"
      >
        <div
          class="flex w-full container-heigth h-96 justify-center flex-col items-center py-4"
        >
          <a
            class="w-2/3 cursor-pointer overflow-hidden rounded-lg"
            href="https://los-angeles-mountains-kevinwilmas.netlify.app"
          >
            <img
              class="picture"
              src="../../../assets/img/LA_Mountains.png"
              alt="Los Angeles Mountains Image"
          /></a>
          <div class="text-box h-3/5 flex flex-col justify-center items-center">
            <h1 class="text-xl pt-3 font-bold text-white">Find A Coach</h1>
            <h1 class="text-white">Vue.js CAPI</h1>
            <p class="text-sm w-11/12 text-center pb-3">
              Here is a sample marketing website for the Los Angeles mountains
              that includes a carrousel.
            </p>

            <a
              href="https://los-angeles-mountains-kevinwilmas.netlify.app"
              class="btn cursor-pointer"
              >View on Netlify</a
            >
          </div>
        </div>
      </div>

      <div
        class="bg-primary-h h-96 container-heigth w-full flex justify-center items-center"
      >
        <div
          class="flex w-full container-heigth h-96 justify-center flex-col items-center py-4"
        >
          <a
            class="w-2/3 cursor-pointer overflow-hidden rounded-lg"
            href="https://bankist-kevinwilmas.netlify.app/"
          >
            <img
              class="picture"
              src="../../../assets/img/Bankist.png"
              alt="Bankist"
          /></a>
          <div class="text-box h-3/5 flex flex-col justify-center items-center">
            <h1 class="text-xl pt-3 font-bold text-white">Bankist</h1>
            <h1 class="text-white">Javascript</h1>
            <p class="text-sm w-11/12 text-center pb-3">
              This is a banking application in which you are able to easily
              transfer and request loans. Check test it out with username "kw"
              and password "1111" and/or username: "jd" and password: "2222"
              (but don't tell anyone this information!).
            </p>
            <a
              href="https://bankist-kevinwilmas.netlify.app/"
              class="btn cursor-pointer"
              >View on Netlify</a
            >
          </div>
        </div>
      </div>
      <div
        class="bg-primary-i h-96 container-heigth w-full flex justify-center items-center"
      >
        <div
          class="flex w-full container-heigth h-96 justify-center flex-col items-center py-4"
        >
          <a
            class="w-2/3 cursor-pointer overflow-hidden rounded-lg"
            href="https://bankistmarketing-kevinwilmas.netlify.app/"
          >
            <img
              class="picture"
              src="../../../assets/img/Bankist_marketing.png"
              alt="Bankist Marketing"
          /></a>
          <div class="text-box h-3/5 flex flex-col justify-center items-center">
            <h1 class="text-xl pt-3 font-bold text-white">
              Bankist: Marketing
            </h1>
            <h1 class="text-white">Javascript</h1>
            <p class="text-sm w-11/12 text-center pb-3">
              This is the marketing website for the bankist appication. It
              utilizes many advanced javascript concepts. Take a look!
            </p>
            <a
              href="https://bankistmarketing-kevinwilmas.netlify.app/"
              class="btn cursor-pointer"
              >View on Netlify</a
            >
          </div>
        </div>
      </div>
      <div
        class="bg-primary-j h-96 container-heigth w-full flex justify-center items-center"
      >
        <div
          class="flex w-full container-heigth h-96 justify-center flex-col items-center py-4"
        >
          <a
            class="w-2/3 cursor-pointer overflow-hidden rounded-lg"
            href="https://mapty-kevinwilmas.netlify.app/"
          >
            <img
              class="picture"
              src="../../../assets/img/Mapty.png"
              alt="Mapty"
          /></a>
          <div class="text-box h-3/5 flex flex-col justify-center items-center">
            <h1 class="text-xl pt-3 font-bold text-white">Mapty</h1>
            <h1 class="text-white">Javascript</h1>
            <p class="text-sm w-11/12 text-center pb-3">
              In this Application you are able to track your running and your
              cycling locations and how much distace you covered. This app used
              geolocation, external libraries, local storage, and more!
            </p>
            <a
              href="https://mapty-kevinwilmas.netlify.app/"
              class="btn cursor-pointer"
              >View on Netlify</a
            >
          </div>
        </div>
      </div>
      <div
        class="bg-primary-k h-96 container-heigth w-full flex justify-center items-center"
      >
        <div
          class="flex w-full container-heigth h-96 justify-center flex-col items-center py-4"
        >
          <a
            class="w-2/3 cursor-pointer overflow-hidden rounded-lg"
            href="https://monster-slayer-kevinwilmas.netlify.app/"
          >
            <img
              class="picture"
              src="../../../assets/img/Monster_slayer.png"
              alt="Monster Slayer"
          /></a>
          <div class="text-box h-3/5 flex flex-col justify-center items-center">
            <h1 class="text-xl pt-3 font-bold text-white">Monster Slayer</h1>
            <h1 class="text-white">Vue/Javascript</h1>
            <p class="text-sm w-11/12 text-center pb-3">
              In this project you face a monster in which you are able to
              attack, special attack, or heal. The battle log can be found below
              the fight. Use your moves wisely!
            </p>
            <a
              href="https://monster-slayer-kevinwilmas.netlify.app/"
              class="btn cursor-pointer"
              >View on Netlify</a
            >
          </div>
        </div>
      </div>
      <div
        class="bg-primary-l h-96 container-heigth w-full flex justify-center items-center"
      >
        <div
          class="flex w-full container-heigth h-96 justify-center flex-col items-center py-4"
        >
          <a
            class="w-2/3 cursor-pointer overflow-hidden rounded-lg"
            href="https://user-project-kevinwilmas.netlify.app/"
          >
            <img
              class="picture"
              src="../../../assets/img/User_project.png"
              alt="User Project"
          /></a>
          <div class="text-box h-3/5 flex flex-col justify-center items-center">
            <h1 class="text-xl pt-3 font-bold text-white">User Projects</h1>
            <h1 class="text-white">Vue CAPI</h1>
            <p class="text-sm w-11/12 text-center pb-3">
              This is a small project that stores active users with their
              project "to-do" items. You are able to filter the users along with
              their projects.
            </p>
            <a
              href="https://user-project-kevinwilmas.netlify.app/"
              class="btn cursor-pointer"
              >View on Netlify</a
            >
          </div>
        </div>
      </div>
      <div
        class="bg-primary-e h-96 container-heigth w-full flex justify-center items-center"
      >
        <div
          class="flex w-full container-heigth h-96 justify-center flex-col items-center py-4"
        >
          <a
            class="w-2/3 cursor-pointer overflow-hidden rounded-lg"
            href="https://market-app-kevinwilmas.netlify.app"
          >
            <img
              class="picture"
              src="../../../assets/img/The_Market_Place.png"
              alt="Market App Image"
          /></a>
          <div class="text-box h-3/5 flex flex-col justify-center items-center">
            <h1 class="text-xl pt-3 font-bold text-white">User Projects</h1>
            <h1 class="text-white">Vue.js CAPI</h1>
            <p class="text-sm w-11/12 text-center pb-3">
              This is a simple project that demonstrates a fully functional
              store. Add or remove products and see the prices/totals.
            </p>
            <a
              href="https://market-app-kevinwilmas.netlify.app"
              class="btn cursor-pointer"
              >View on Netlify</a
            >
          </div>
        </div>
      </div>
      <div
        class="bg-primary-f h-96 container-heigth w-full flex justify-center items-center"
      >
        <div
          class="flex w-full container-heigth h-96 justify-center flex-col items-center py-4"
        >
          <a
            class="w-2/3 cursor-pointer overflow-hidden rounded-lg"
            href="https://pig-game-kevinwilmas.netlify.app/"
          >
            <img
              class="picture"
              src="../../../assets/img/Pig_game.png"
              alt="Pig Game"
          /></a>
          <div class="text-box h-3/5 flex flex-col justify-center items-center">
            <h1 class="text-xl pt-3 font-bold text-white">Pig Game</h1>
            <h1 class="text-white">Javascript</h1>
            <p class="text-sm w-11/12 text-center pb-3">
              This is fun game where you roll the dice to get the highest score,
              but if you roll a 1 then it switched to the other person and you
              lose your points. First to 100 wins.
            </p>
            <a
              href="https://pig-game-kevinwilmas.netlify.app/"
              class="btn cursor-pointer"
              >View on Netlify</a
            >
          </div>
        </div>
      </div>
      <div
        class="bg-primary-g h-96 container-heigth w-full flex justify-center items-center"
      >
        <div
          class="flex w-full container-heigth h-96 justify-center flex-col items-center py-4"
        >
          <a
            class="w-2/3 cursor-pointer overflow-hidden rounded-lg"
            href="https://learning-resources-kevinwilmas.netlify.app/"
          >
            <img
              class="picture"
              src="../../../assets/img/Learning_resources.png"
              alt="Learning Resources"
          /></a>
          <div class="text-box h-3/5 flex flex-col justify-center items-center">
            <h1 class="text-xl pt-3 font-bold text-white">
              Learning Resources
            </h1>
            <h1 class="text-white">Vue/Javascript</h1>
            <p class="text-sm w-11/12 text-center pb-3">
              Application where you are able to add and store resources. The
              resources are able to be viewed and you can visit each website.
            </p>
            <a
              href="https://learning-resources-kevinwilmas.netlify.app/"
              class="btn cursor-pointer"
              >View on Netlify</a
            >
          </div>
        </div>
      </div>
      <div
        class="bg-primary-h h-96 container-heigth w-full flex justify-center items-center"
      >
        <div
          class="flex w-full container-heigth h-96 justify-center flex-col items-center py-4"
        >
          <a
            class="w-2/3 cursor-pointer overflow-hidden rounded-lg"
            href="https://products-app-kevinwilmas.netlify.app/"
          >
            <img
              class="picture"
              src="../../../assets/img/Products_app.png"
              alt="Products App"
          /></a>
          <div class="text-box h-3/5 flex flex-col justify-center items-center">
            <h1 class="text-xl pt-3 font-bold text-white">Products App</h1>
            <h1 class="text-white">Vue Composition API/Javascript</h1>
            <p class="text-sm w-11/12 text-center pb-3">
              Here is a simple project in which you are able to add products to
              a list and view details of the products.
            </p>
            <a
              href="https://products-app-kevinwilmas.netlify.app/"
              class="btn cursor-pointer"
              >View on Netlify</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
/* .skill-circle {
  margin-left: 100px;
} */

@media (min-width: 650px) {
  .container-heigth {
    height: 550px;
  }
  .text-box {
    top: 10rem;
    font-size: larger;
    line-height: 2.75rem;
  }
}
</style>
