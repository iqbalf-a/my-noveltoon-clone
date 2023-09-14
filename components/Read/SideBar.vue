<template>
  <div
    :class="{ 'bg-white text-black': bgWhite, 'bg-black text-white': bgBlack }"
  >
    <!-- Start Top Nav -->
    <nav
      class="w-full fixed shadow-md h-12 md:h-16 flex justify-center"
      :class="{
        'bg-white text-black': bgWhite,
        'bg-black text-white': bgBlack,
      }"
    >
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
    <!-- End Top Nav -->

    <!-- Start SideBar -->

    <div class="hidden md:block">
      <div
        id="wadah"
        class="fixed h-full transition-transform transform ease-in-out duration-300 right-0"
        :class="{
          '-translate-x-96': isOpen || isOpenSetting,
          'translate-x-0': !isOpen && !isOpenSetting,
        }"
      >
        <div class="flex flex-col justify-center h-full">
          <!-- Tombol Toggle Sidebar -->
          <button
            id="buttonMenu"
            @click="toggleSidebarEpisode"
            class="p-2 hover:bg-blue-600 hover:text-white rounded-tl-lg border self-center"
            :class="{
              'bg-white text-black': bgWhite,
              'bg-black text-white': bgBlack,
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>
          <button
            id="buttonMenu"
            @click="toggleSidebarSetting"
            class="p-2 hover:bg-blue-600 hover:text-white rounded-bl-lg border self-center"
            :class="{
              'bg-white text-black': bgWhite,
              'bg-black text-white': bgBlack,
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
          <!-- Isi Sidebar -->
          <!-- ... -->
        </div>
      </div>

      <!-- start sidebar episode -->
      <div
        id="wadah"
        class="fixed h-full w-96 bg-white transition-transform transform ease-in-out duration-300 right-0 border"
        :class="{ 'translate-x-0': isOpen, 'translate-x-96': !isOpen }"
      >
        <!-- Sidebar Content -->
        <nav
          class="py-5 px-8"
          :class="{
            'bg-white text-black': bgWhite,
            'bg-black text-white': bgBlack,
          }"
        >
          <p class="text-lg font-semibold">Episodes</p>
          <ul class="pt-4">
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
        </nav>
      </div>
      <!-- end sidebar episode -->

      <!-- start sidebar setting -->
      <div
        id="wadah"
        class="fixed h-full w-96 bg-white transition-transform transform ease-in-out duration-300 right-0 border"
        :class="{
          'translate-x-0': isOpenSetting,
          'translate-x-96': !isOpenSetting,
        }"
      >
        <!-- Sidebar Content -->
        <nav
          class="py-5 px-8 h-full"
          :class="{
            'bg-white text-black': bgWhite,
            'bg-black text-white': bgBlack,
          }"
        >
          <p class="text-lg font-semibold">Setting</p>
          <div class="py-4">
            <p class="pb-4 font-semibold">Tema</p>
            <div class="flex space-x-5">
              <button
                class="bg-white h-10 w-10 border rounded-full"
                :class="{
                  ' border-blue-600 border-4': bgWhite,
                  'border-white': bgBlack,
                }"
                @click="bgWhiteChange"
              ></button>
              <button
                class="bg-black h-10 w-10 border rounded-full"
                :class="{
                  ' border-blue-600 border-4': bgBlack,
                  'border-white': bgWhite,
                }"
                @click="bgBlackChange"
              ></button>
            </div>
          </div>

          <div>
            <div>
              <p class="font-semibold">Font</p>
            </div>
            <div class="flex flex-wrap">
              <button
                @click="fontFamilyChange('')"
                class="border rounded-md px-6 py-2 w-[7rem] m-2"
                :class="{
                  ' border-2 border-blue-600': fontFamily === '',
                }"
              >
                None
              </button>
              <button
                @click="fontFamilyChange('Arial, sans-serif')"
                class="border rounded-md px-6 py-2 w-[7rem] m-2"
                :class="{
                  ' border-2 border-blue-600':
                    fontFamily === 'Arial, sans-serif',
                }"
              >
                Arial
              </button>
              <button
                @click="fontFamilyChange('Georgia, serif')"
                class="border rounded-md px-6 py-2 w-[7rem] m-2"
                :class="{
                  ' border-2 border-blue-600': fontFamily === 'Georgia, serif',
                }"
              >
                Georgia
              </button>
              <button
                @click="fontFamilyChange('Verdana, sans-serif')"
                class="border rounded-md px-6 py-2 w-[7rem] m-2"
                :class="{
                  ' border-2 border-blue-600':
                    fontFamily === 'Verdana, sans-serif',
                }"
              >
                Verdana
              </button>
              <button
                @click="fontFamilyChange('Roboto, sans-serif')"
                class="border rounded-md px-6 py-2 w-[7rem] m-2"
                :class="{
                  ' border-2 border-blue-600':
                    fontFamily === 'Roboto, sans-serif',
                }"
              >
                Roboto
              </button>
            </div>
          </div>

          <div class="font-semibold pt-4">
            <p>Ukuran Font</p>
            <div
              class="flex border justify-between bg-gray-100 rounded-xl mt-4"
            >
              <button
                @click="decreaseValue"
                class="py-3 bg-white px-6 rounded-l-xl"
              >
              <p
                  :class="{
                    ' text-black': bgBlack,
                    'text-black': bgWhite,
                  }"
                >
                  -
                </p>
              </button>
              <span
                class="p-3"
                :class="{
                  'text-black': bgBlack,
                  ' text-black': bgWhite,
                }"
                >{{ fontSize }}</span
              >
              <button
                @click="increaseValue"
                class="py-3 px-6 bg-white rounded-r-xl"
              >
              <p
                  :class="{
                    ' text-black': bgBlack,
                    'text-black': bgWhite,
                  }"
                >
                  +
                </p>
              </button>
            </div>
          </div>

          <div class="font-semibold pt-4">
            <p>Jarak</p>
            <div
              class="flex border justify-between bg-gray-100 rounded-xl mt-4"
            >
              <button
                @click="decreaseLineHeight"
                class="py-3 px-6 bg-white rounded-l-xl"
              >
                <p
                  :class="{
                    ' text-black': bgBlack,
                    'text-black': bgWhite,
                  }"
                >
                  -
                </p>
              </button>
              <span
                class="p-3"
                :class="{
                  'text-black': bgBlack,
                  ' text-black': bgWhite,
                }"
                >{{ lineHeight }}</span
              >
              <button
                @click="increaselineHeight"
                class="py-3 px-6 bg-white rounded-r-xl"
              >
              <p
                  :class="{
                    ' text-black': bgBlack,
                    'text-black': bgWhite,
                  }"
                >
                  +
                </p>
                
              </button>
            </div>
          </div>
        </nav>
      </div>
      <!-- end sidebar setting -->
    </div>

    <!-- End Sidebar -->

    <!-- Start content elemen -->
    <div class="w-full flex justify-center pb-4">
      <div
        class="w-11/12 md:w-2/3 flex flex-col items-center border mt-7 md:mt-16 mb-0 md:mb-16 pb-10"
      >
        <div class="md:pt-16 pt-8">
          <img
            src="https://picsum.photos/200/300"
            alt=""
            class="rounded-xl h-36 md:h-64"
          />
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
          :style="{
            'font-size': fontSize + 'px',
            'line-height': lineHeight + 'px',
            'font-family': fontFamily,
          }"
        ></div>
        <div class="flex content-center space-x-8">
          <div class="p-4 border rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>
          </div>
          <div class="p-4 border rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        </div>
        <div class="pt-4">
          <button class="py-3 px-6 bg-blue-600 rounded-full text-white pt-4">
            Download Novel PDF
          </button>
        </div>
        <div class="w-full">
          <div class="px-20 font-semibold">
            <p>Comments</p>
          </div>
        </div>
        <div class="w-full flex px-20 pt-8">
          <div class="">
            <img
              src="https://picsum.photos/200/300"
              class="h-10 w-10 object-cover rounded-full"
              alt=""
            />
          </div>
          <div class="flex flex-col ml-8 w-full">
            <p class="font-semibold tex-lg">Rapa Rasha</p>
            <p class="pt-4">
              "Kemenangan terbesar adalah pergi dan memilih untuk tidak terlibat
              dalam drama dan energi beracun sama sekali."
            </p>
            <div class="flex flex-wrap justify-between">
              <p class="text-gray-400">2023-08-19</p>
              <div class="flex">
                <div class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                  <p class="pl-2">Komen</p>
                </div>
                <div class="flex pl-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>

                  <p class="pl-2">Like</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End content -->

    <!-- Start Botoom Nav -->
    <div
      class="w-full fixed shadow-md flex justify-center bottom-0 left-0 z-50 h-12 md:h-20 border"
      :class="{
        'bg-white text-black': bgWhite,
        'bg-black text-white': bgBlack,
      }"
    >
      <div
        class="fixed inset-0 bg-black opacity-50 z-40"
        :class="{ hidden: !isOpenBottom }"
      ></div>

      <div
        class="fixed inset-x-0 bottom-0 transform transition-transform ease-in-out duration-300 z-50"
        :class="{
          'translate-y-0': isOpenBottom,
          'translate-y-full': !isOpenBottom,
        }"
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
    <!-- End Bottom Nav -->
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const novelsDetailData = await useFetch("/api/novelsDetailData").data;
const readNovelData = await useFetch("/api/readNovelData").data;
const isOpenBottom = ref(false); // Sidebar akan tertutup secara default

const isOpen = ref(false); // Sidebar akan tertutup secara default
const isOpenSetting = ref(false); // Sidebar akan tertutup secara default

const toggleBottomBar = () => {
  isOpenBottom.value = !isOpenBottom.value;
};

const toggleSidebarEpisode = () => {
  isOpen.value = !isOpen.value;
  isOpenSetting.value = false;
};
const toggleSidebarSetting = () => {
  isOpenSetting.value = !isOpenSetting.value;
  isOpen.value = false;
};

// setting
const fontSize = ref(24);
const minSize = 16;
const maxSize = 36;

const decreaseValue = () => {
  if (fontSize.value > minSize) {
    fontSize.value -= 2;
  }
};

const increaseValue = () => {
  if (fontSize.value < maxSize) {
    fontSize.value += 2;
  }
};

const lineHeight = ref(32);
const minLineHeight = 24;
const maxLineHeight = 46;

const decreaseLineHeight = () => {
  if (lineHeight.value > minLineHeight) {
    lineHeight.value -= 4;
  }
};

const increaselineHeight = () => {
  if (lineHeight.value < maxLineHeight) {
    lineHeight.value += 4;
  }
};

const fontFamily = ref("");
const fontFamilyChange = (fontName) => {
  fontFamily.value = fontName;
};
const bgWhite = ref(true);
const bgBlack = ref(false);

const bgWhiteChange = () => {
  bgWhite.value = true;
  bgBlack.value = false;
};

const bgBlackChange = () => {
  bgWhite.value = false;
  bgBlack.value = true;
};
</script>

<style scoped>
/* Tambahkan gaya sesuai kebutuhan */
</style>
