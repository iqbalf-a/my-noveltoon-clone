<template>
  <div class="container max-w-screen-xl mx-auto my-12 p-8">
    <div class="flex flex-wrap">
      <!-- Left Content -->
      <div class="w-[55rem] pr-8">
        <div class="flex justify-between">
          <!-- Top  -->
          <div>
            <p class="text-lg font-bold">Terpopuler</p>
          </div>

          <div class="text-right">
            <a href="">Lihat Semua ></a>
          </div>
        </div>

        <div class="flex flex-wrap">
          <!-- Content Item -->
          <div v-for="item in data?.slice(0, 10)" :key="item?.id" class="">
            <NuxtLink
              :to="`/detail/${generate1_5()}`"
              class="md:w-36 mt-8 md:ml-4 flex md:flex-col sm:flex"
              ><img
                :src="item.imageUrl + generateRandom() + '/120/160'"
                :alt="item.name"
                class="rounded-lg"
              />
              <div class="pl-4">
                <p class="md:mt-3 text-base">{{ item?.name }}</p>
                <p class="text-sm/[18px] truncate">{{ item?.tags }}</p>
              </div></NuxtLink
            >
          </div>
        </div>
      </div>

      <!-- Right Content -->
      <div class="sm:w-[20rem]">
        <div class="">
          <p class="text-lg font-bold lg:pt-0 md:pt-8 sm:pt-8">
            Novelku - Baca dan tulis dimanapun
          </p>
        </div>
        <div>
          <div class="mt-8">
            <!-- Content Item -->
            <div
              v-for="item in data?.slice(0, 4)"
              :key="item?.id"
              class="mt-4 flex flex-row"
            >
              <a href="" class="w-1/3">
                <img
                  :src="item.imageUrl + generateRandom() + '/120/160'"
                  :alt="item.name"
                  style="height: 100px; width: 200px"
                  class="object-cover rounded-lg"
                />
              </a>
              <a href="" class="w-2/3 ml-4">
                <p class="text-sm">{{ item?.name }}</p>
                <p class="text-xs/[18px] line-clamp-3 mt-3">
                  {{ item?.synopsis }}
                </p>
              </a>
            </div>
          </div>
          <div class="mt-8">
            <a href="">Romantis Novel (novelku) ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/novelsData");
function generateRandom(min = 0, max = 500) {
  return Math.floor(Math.random() * max) + min;
}

function generate1_5(min = 1, max = 5) {
  return Math.floor(Math.random() * max) + min;
}
</script>

<style lang="scss" scoped></style>
