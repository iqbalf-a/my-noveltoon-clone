<template>
  <div class="container max-w-screen-xl mx-auto pt-4">
    <div class="flex md:space-x-4 justify-evenly md:justify-normal">
      <div class="text-slate-400 text-xl font-semibold">
        <p>Pendahuluan</p>
      </div>
      <div class="text-slate-400 text-xl font-semibold">
        <p>|</p>
      </div>
      <div class="text-blue-600 text-xl font-semibold"><p>Episodes</p></div>
    </div>
    <hr
      class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 block md:hidden"
    />
    <div v-if="novelsDetailData && novelsDetailData[id - 1]" class="font-medium md:pt-4 py-2 px-4 md:px-0" >
      <p>Updated {{novelsDetailData[id - 1].total_episode}} Episodes</p>
    </div>
    <hr
      class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 block md:hidden"
    />

    <!-- batas -->

    <div
      v-if="novelsDetailData && novelsDetailData[id - 1]"
      class="md:pt-4 md:mx-0 mx-4 py-2 flex flex-wrap"
    >
      <div
        v-for="item in novelsDetailData[id - 1].episode"
        :key="item.id"
        class="md:w-1/2 w-full md:px-2 md:mb-4"
      >
        <a class="flex font-medium" href="">
          <div class="md:p-4 p-2 md:bg-slate-100 rounded-md w-12 grid mr-2">
            <p class="justify-self-center">{{ item.id }}</p>
          </div>
          <div class="md:p-4 p-2 md:bg-slate-100 grow rounded-md">
            <p>{{ item.episode_title }}</p>
          </div>
        </a>
      </div>
    </div>
    <div v-else>
      <p>Data tidak tersedia.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;

const novelsDetailData = await useFetch("/api/novelsDetailData").data;
</script>
