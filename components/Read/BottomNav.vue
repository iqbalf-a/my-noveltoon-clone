<template>
  <nav
    class="w-full fixed shadow-md flex justify-center bg-white bottom-0 left-0 z-50 h-20 border"
  >
    <div class="flex items-center w-8/12 justify-between">
      <button
        class="px-3 md:px-6 py-2 md:py-3 border rounded-full text-xs md:text-base"
      >
        Sebelumnya
      </button>
      <button
        class="px-3 md:px-6 py-2 md:py-3 border rounded-full text-xs md:text-base border-blue-600 text-blue-600"
      >
        Selanjutnya
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
const readNovelData = useFetch("/api/readNovelData").data;
</script>
