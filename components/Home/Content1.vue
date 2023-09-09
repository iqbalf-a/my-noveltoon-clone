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
          <div
            v-for="item in data?.slice(0, 10)"
            :key="item?.id"
            class="w-36 mt-8 ml-4"
          >
            <a href="">
              <img :src="item.imageUrl" :alt="item.name" class="rounded-lg" />
              <p class="mt-3 text-base">{{ item?.name }}</p>
              <p class="text-sm/[18px] truncate">{{ item?.tags }}</p>
            </a>
          </div>
        </div>
      </div>

      <!-- Right Content -->
      <div class="w-[20rem]">
        <div>
          <p class="text-lg font-bold">Novelku - Baca dan tulis dimanapun</p>
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
                  :src="item.imageUrl"
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

<!-- <script>
export default {
  setup() {
    return {};
  },
};
</script> -->

<script setup lang="ts">
const { data } = await useFetch("/api/novelsData");
</script>

<style lang="scss" scoped></style>
