<template>
  <div id="channel" class="md:bg-slate-100">
    <div class="container mx-auto max-w-screen-xl p md:py-6">
      <div
        class="flex whitespace-nowrap mx-4 md:mx-0 justify-around md:justify-normal"
      >
        <a
          href=""
          class="md:mr-12 text-base md:text-2xl font-bold text-blue-600 pb-2 md:pb-0 border-b-4 md:border-none border-blue-600"
          >Novel</a
        >
        <a
          href=""
          class="md:mr-12 text-base md:text-2xl font-bold text-gray-600/25 hover:text-blue-600"
          >Chat Story</a
        >
        <a
          href=""
          class="md:mr-12 text-base md:text-2xl font-bold text-gray-600/25 hover:text-blue-600"
          >Cerpen</a
        >
        <a
          href=""
          class="md:mr-12 text-base md:text-2xl font-bold text-gray-600/25 hover:text-blue-600"
          >Komik
        </a>
      </div>
      <hr class="h-px my-0 md:my-1 bg-gray-200 border-0 dark:bg-gray-700 block md:hidden" />
      <div class="flex pt-2 md:pt-4 px-2 md:px-0">
        <div class="py-3 md:block hidden">
          <a href="">Genre</a>
        </div>
        <div
          class="flex flex-nowrap overflow-x-auto md:flex-wrap ml-2 md:ml-12 items-center md:py-3 text-xs md:text-base whitespace-nowrap py-4"
        >
          <div v-for="item in genres" :key="item" class="mr-8 md:mb-8">
            <nuxt-link
              :to="`/genre/${item.toLowerCase()}-${idStatus}`"
              :class="{
                'bg-blue-600 text-white px-4 py-2 rounded-3xl':
                  idGenre === item.toLowerCase(),
              }"
              >{{ item }}</nuxt-link
            >
          </div>
        </div>
      </div>
      <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700 block md:hidden" />
      <div class="flex pt-2 md:pt-4 px-2 md:px-0">
        <div class="pt-6 md:block hidden">
          <a href="">Status</a>
        </div>
        <div
          class="flex flex-nowrap overflow-x-auto md:flex-wrap ml-2 md:ml-12 items-center text-xs md:text-base py-4"
        >
          <div v-for="item in status" :key="item" class="mr-8 my-2">
            <nuxt-link
              :to="`/genre/${idGenre}-${item.toLowerCase()}`"
              :class="{
                'bg-blue-600 text-white px-4 py-2 rounded-3xl':
                  idStatus === item.toLowerCase(),
              }"
              >{{ item }}</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
// export default {
//   setup() {
//     return {};
//   },
// };

import genres from "~/server/api/genreData";
import status from "~/server/api/statusData";

const { id } = useRoute().params;

let idGenre = "semua"
let idStatus = "terpopuler"
let newId;

if (id === undefined) {
    let idGenre = "semua"
    let idStatus = "terpopuler"

} else {
    let newId = id.split("-")
    idGenre = newId[0];
    idStatus = newId[1];
}


// if (newId[0] === "g"){
//     idGenre = newId[1];
//     idStatus

// } else {
//     if (id === undefined) {
//         idGenre = "semua";
//     } else {
//         idGenre = id;
//     }
// }
</script>

<style lang="scss" scoped></style>
