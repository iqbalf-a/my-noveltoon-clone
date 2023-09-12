<template>
  <nav class="w-full fixed shadow-md h-8 md:h-16 flex justify-center bg-white">
    <div class="w-11/12 md:w-2/3 flex justify-between items-center">
      <a href="/detail/1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 md:w-8 md:h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </a>

      <p class="text-sm md:text-xl font-semibold">
        {{ readNovelData[0].title }}
      </p>
      <a href="/" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-4 md:h-8 mr-3"
          alt="Flowbite Logo"
        />
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
const readNovelData = useFetch("/api/readNovelData").data;
</script>
