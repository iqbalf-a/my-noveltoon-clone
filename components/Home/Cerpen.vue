<template>
  <div>
    <div class="container max-w-screen-xl mx-auto my-12 px-8">
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div class="font-bold text-lg">
        <p>Cerpen</p>
      </div>
      <div class="flex flex-wrap">
        <!-- data cerpen -->
        <div
          v-for="item in dataCerpen?.slice(0, 4)"
          :key="item?.id"
          class="w-[35rem] pr-8"
        >
          <div class="border rounded-lg p-4 mt-8 shadow-md">
            <h1 class="font-semibold text-lg capitalize">{{ item.title }}</h1>
            <h1 class="text-gray-600/25 font-semibold mt-4">
              {{ item.synopsis }}
            </h1>
            <div class="grid grid-cols-2 mt-4">
              <div class="flex flex-wrap text-sm md:text-base">
                <img
                  :src="item.imageUrl"
                  :alt="item.title"
                  srcset=""
                  style="height: 30px; width: 30px"
                  class="rounded-full"
                />
                <div class="ml-4">{{ item.author }}</div>
              </div>
              <div class="flex flex-wrap justify-self-end text-sm md:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
                <p class="ml-2">{{ item.comments }}</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <p class="ml-2">{{ item.likes }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// export default {
//   setup() {
//     return {};
//   },
// };
const dataCerpen = await useFetch("/api/cerpenData").data;
</script>

<style lang="scss" scoped></style>
