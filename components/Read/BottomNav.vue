<template>
  <div
    class="w-full fixed shadow-md flex justify-center bg-white bottom-0 left-0 z-50 h-12 md:h-20 border"
  >
    <div
      class="fixed inset-0 bg-black opacity-50 z-40"
      :class="{ hidden: !isOpen }"
    ></div>

    <div
      class="fixed inset-x-0 bottom-0 transform transition-transform ease-in-out duration-300 z-50"
      :class="{ 'translate-y-0': isOpen, 'translate-y-full': !isOpen }"
    >
      <!-- Isi konten Anda di sini -->
      <div class="bg-white p-4 h-1/2">
        <!-- ... Konten Anda ... -->
        <button
          @click="toggleBottomBar"
          class="px-4 py-2 bg-blue-600 text-white rounded-full"
        >
          Tutup
        </button>
        <div class="flex flex-row mt-2">
          <ul class="max-h-[80vh] w-full overflow-auto">
            <div
              v-for="item in novelsDetailData[id - 1].episode"
              :key="item.id"
            >
              <li class="mb-2 text-lg my-4">
                <a
                  href="#"
                  class="flex py-2 hover:bg-blue-600 hover:text-white px-4 rounded-md"
                >
                  <p class="mr-4 w-5">{{ item.id }}.</p>
                  <p>{{ item.episode_title }}</p>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex items-center w-8/12 justify-between">
      <button
        class="px-3 md:px-6 py-2 md:py-3 border rounded-full text-xs md:text-base"
      >
        Sebelumnya
      </button>
      <button
        id="buttonMenu"
        @click="toggleBottomBar"
        class="p-2 bg-white hover:bg-blue-600 hover:text-white rounded-lg self-center block md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </button>
      <button
        class="px-3 md:px-6 py-2 md:py-3 border rounded-full text-xs md:text-base border-blue-600 text-blue-600"
      >
        Selanjutnya
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const readNovelData = useFetch("/api/readNovelData").data;

const { id } = useRoute().params;

const novelsDetailData = await useFetch("/api/novelsDetailData").data;
const isOpen = ref(false); // Sidebar akan tertutup secara default

const toggleBottomBar = () => {
  isOpen.value = !isOpen.value;
};
</script>
