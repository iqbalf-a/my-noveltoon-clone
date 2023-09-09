<template>
  <div class="container max-w-screen-xl mx-auto my-12 px-8">
    <div class="grid grid-flow-row auto-row-max">
      <div v-for="itemHeadline in dataHeadline" :key="itemHeadline?.id">
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <p class="text-lg font-bold uppercase">{{ itemHeadline?.listTitle }}</p>
        <div class="flex flex-wrap mt-8 gap-5">
          <div v-for="item in data?.slice(0, 6)" :key="item?.id" class="w-40">
            <a href="">
              <img
                :src="item.imageUrl + generateRandom() + '/120/160'"
                :alt="item.name"
                style="height: 185px; width: 140px"
                class="rounded-lg"
              />
              <p class="mt-2 text-base">{{ item?.name }}</p>
              <p class="line-clamp-2 text-xs text-light">
                {{ item?.synopsis }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/novelsData");
const dataHeadline = await useFetch("/api/novelsListTitle").data;
function generateRandom(min = 0, max = 500) {
  return Math.floor(Math.random() * max) + min;
}
</script>

<style lang="scss" scoped></style>
