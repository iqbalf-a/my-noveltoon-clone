<template>
  <div class="container max-w-screen-xl mx-auto pt-4 pb-16">
    <div class="flex md:space-x-4 justify-evenly md:justify-normal">
      <button
        @click="clickPendahuluan"
        :class="{
          'text-slate-400 text-base font-semibold': btnView === 'episodes',
          'text-blue-600 text-base md:text-xl font-semibold':
            btnView === 'pendahuluan',
        }"
      >
        <p>Pendahuluan</p>
      </button>
      <div class="text-slate-400 text-xl font-semibold">
        <p>|</p>
      </div>
      <button
        class="text-blue-600 text-base md:text-xl font-semibold"
        @click="clickEpisodes"
        :class="{
          'text-slate-400 text-base font-semibold': btnView === 'pendahuluan',
          'text-blue-600 text-base md:text-xl font-semibold':
            btnView === 'episodes',
        }"
      >
        <p>Episodes</p>
      </button>
    </div>
    <hr
      class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 block md:hidden"
    />

    <!-- Start Content Pendahuluan -->

    <div v-if="btnView === 'pendahuluan'" class="px-8 pb-8">
      <div class="text-base md:text-2xl font-semibold pt-4">
        <p>Tag</p>
      </div>
      <div class="flex pt-4">
        <button class="px-4 py-2 border rounded-full mr-4">Misteri</button>
        <button class="px-4 py-2 border rounded-full mr-4">Petualang</button>
        <button class="px-4 py-2 border rounded-full mr-4">Alam</button>
      </div>

      <div class="pt-4 text-base md:text-2xl font-semibold">
        <p>Komentar</p>
      </div>

      <div v-for="item in 3" :key="item">
        <!-- Start item komentar -->
        <div class="w-full flex pt-8">
          <div class="">
            <img
              src="https://picsum.photos/200/300"
              class="h-9 w-10 object-cover rounded-full"
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

                  <p class="pl-2">129</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End item komentar -->

        <!-- Start item komentar -->
        <div class="w-full flex pt-8">
          <div class="">
            <img
              src="https://picsum.photos/200/300"
              class="h-9 w-10 object-cover rounded-full"
              alt=""
            />
          </div>
          <div class="flex flex-col ml-8 w-full">
            <p class="font-semibold tex-lg">Mister Arwana</p>
            <p class="pt-4">
              Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu
              miliki, bukan pula berasal dari siapa diri kamu, atau apa yang
              kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu.
            </p>
            <div class="flex flex-wrap justify-between">
              <p class="text-gray-400">2023-08-15</p>
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

                  <p class="pl-2">118</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End item komentar -->

        <!-- Start item komentar -->
        <div class="w-full flex pt-8">
          <div class="">
            <img
              src="https://picsum.photos/200/300"
              class="h-9 w-10 object-cover rounded-full"
              alt=""
            />
          </div>
          <div class="flex flex-col ml-8 w-full">
            <p class="font-semibold tex-lg">Rendi Panglima</p>
            <p class="pt-4">
              Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan
              dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah,
              rasa sakit itu akan terasa selamanya
            </p>
            <div class="flex flex-wrap justify-between">
              <p class="text-gray-400">2023-08-14</p>
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

                  <p class="pl-2">189</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End item komentar -->
      </div>
    </div>

    <!-- End Content Pendahuluan -->

    <!-- Start Content Episodes -->
    <div v-if="btnView === 'episodes'">
      <div
        v-if="novelsDetailData && novelsDetailData[id - 1]"
        class="font-medium md:pt-4 py-2 px-4 md:px-0"
      >
        <p>Updated {{ novelsDetailData[id - 1].total_episode }} Episodes</p>
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
          class="md:w-1/2 w-full md:px-2 md:mb-4 my-2"
        >
          <a class="flex font-medium" href="/read/1">
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

    <!-- End Content Episodes -->
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;

const btnView = ref("episodes");

const clickPendahuluan = () => {
  btnView.value = "pendahuluan";
};

const clickEpisodes = () => {
  btnView.value = "episodes";
};

const novelsDetailData = await useFetch("/api/novelsDetailData").data;
</script>
