<template>
  <div class="container max-w-screen-xl mx-auto my-12 px-8">
    <div class="grid grid-cols-6">
      <!-- Left Content -->
      <div class="grid col-span-4">
        <div class="grid grid-cols-2">
          <!-- Top  -->
          <div>
            <p class="text-lg font-bold">Terpopuler</p>
          </div>

          <div class="text-right">
            <h6>Lihat Semua ></h6>
          </div>
        </div>

        <div class="grid grid-cols-5 gap-3">
          <!-- Content Item -->
          <div v-for="item in data" :key="item?.id">
            <a href="">
              <img :src="item.imageUrl" :alt="item.name" />
              <p class="mt-3 text-base">{{ item?.name }}</p>
              <p class="text-sm/[18px] truncate">{{ item?.tags }}</p>
            </a>
          </div>
        </div>
      </div>

      <!-- Right Content -->
      <div class="ml-12 col-span-2">
        <div>
          <p class="text-lg font-bold">Novelku - Baca dan tulis dimanapun</p>
        </div>
        <div>
          <div class="mt-8">
            <!-- Content Item -->
            <div
              v-for="item in data?.slice(0, 4)"
              :key="item?.id"
              class="mt-4 grid grid-cols-3"
            >
              <a href="" class="col-span-1">
                <img
                  :src="item.imageUrl"
                  :alt="item.name"
                  style="height: 100px; width: 150px"
                  class="overflow-hidden"
                />
              </a>
              <a href="" class="col-span-2 ml-4">
                <p class="text-base">{{ item?.name }}</p>
                <p class="text-sm/[18px]">{{ item?.synopsis }}</p>
              </a>
            </div>
          </div>
          <p class="mt-4">Romantis Novel (novelku) ></p>
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
