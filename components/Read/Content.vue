<template>
  <div class="w-full flex justify-center">
    <div class="w-11/12 md:w-2/3 flex flex-col items-center border mt-7 md:mt-16 mb-16 pb-10">
      <div class="md:pt-16 pt-8">
        <img src="https://picsum.photos/200/300" alt="" class="rounded-xl h-36 md:h-64" />
      </div>
      <div class="font-semibold text-sm md:text-xl md:pt-8 pt-4">
        <p>{{ readNovelData[0].title }}</p>
      </div>
      <div class="w-full md:px-20 px-10">
        <hr class="h-px my-4 md:my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>

      <div
        v-html="readNovelData[0].story"
        class="text-base md:text-2xl px-10 md:px-20 text-justify"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const readNovelData = await useFetch("/api/readNovelData").data;
</script>
