<template>
  <div>
    <div class="container max-w-screen-xl mx-auto my-12 px-8">
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div class="font-bold text-lg">
        <p>Cerpen</p>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <!-- data cerpen -->
        <div v-for="item in dataCerpen" :key="item?.id">
          <div class="border rounded-lg p-4 mt-8 shadow-md">
            <h1 class="font-bold text-lg capitalize">{{ item.title }}</h1>
            <h1 class="font-light">
              {{ item.synopsis }}
            </h1>
            <div class="grid grid-cols-2 mt-4">
              <div class="flex flex-wrap">
                <img
                  :src="item.imageUrl"
                  :alt="item.title"
                  srcset=""
                  style="height: 24px; width: 24px"
                  class="rounded-full"
                />
                <div class="ml-4">{{item.author}}</div>
              </div>
              <div class="flex flex-wrap justify-self-end">
                <p>{{item.comments}} comment</p>
                <p class="ml-8">{{item.likes}} like</p>
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
