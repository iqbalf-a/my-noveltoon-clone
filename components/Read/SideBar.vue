<template>
  <div class="hidden md:block">
    <!-- <div
      class="fixed inset-0 bg-black opacity-50"
      :class="{ hidden: !isOpen }"
    ></div> -->
    <div
      id="wadah"
      class="fixed h-full transition-transform transform ease-in-out duration-300 right-0"
      :class="{ '-translate-x-96': isOpen, 'translate-x-0': !isOpen }"
    >
      <div class="flex flex-col justify-center h-full">
        <!-- Tombol Toggle Sidebar -->
        <button
          id="buttonMenu"
          @click="toggleSidebar"
          class="p-2 bg-white hover:bg-blue-600 hover:text-white rounded-l-lg border self-center"
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
        <!-- Isi Sidebar -->
        <!-- ... -->
      </div>
    </div>

    <div
      id="wadah"
      class="fixed h-full w-96 bg-white transition-transform transform ease-in-out duration-300 right-0 border"
      :class="{ 'translate-x-0': isOpen, 'translate-x-96': !isOpen }"
    >
      <!-- Sidebar Content -->
      <nav class="py-5 px-8">
        <p class="text-lg font-semibold">Episodes</p>
        <ul class="pt-4">
          <div v-for="item in novelsDetailData[id - 1].episode" :key="item.id">
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
      </nav>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const novelsDetailData = await useFetch("/api/novelsDetailData").data;
const isOpen = ref(false); // Sidebar akan tertutup secara default

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
/* Tambahkan gaya sesuai kebutuhan */
</style>
