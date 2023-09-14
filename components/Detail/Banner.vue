<template>
  <div
    class="container mx-auto max-w-screen-xl border h-[15rem] md:h-[30rem] bg-[url('https://picsum.photos/2000/2000')] bg-center bg-cover bg-opacity-1000 relative rounded-none md:rounded-2xl"
  >
    <div
      class="h-full w-full bg-black bg-opacity-40 md:bg-slate-50 md:bg-opacity-70 absolute bottom-0 backdrop-blur-xl md:backdrop-blur-md rounded-none md:rounded-2xl"
    ></div>

    <div
      class="absolute h-full px-4 md:px-12 py-6 md:py-12 text-white md:text-black"
    >
      <div
        v-if="novelsDetailData && novelsDetailData[id - 1]"
        class="md:pt-4 md:mx-0 mx-4 py-2 flex flex-wrap-reverse h-full"
      >
        <div class="w-7/12 order-last md:order-none flex-col flex">
          <p class="text-base md:text-3xl md:font-semibold font-normal">
            {{ novelsDetailData[id - 1].author }}
          </p>
          <p class="text-lg md:text-4xl font-bold md:pt-4 pt-0">
            {{ novelsDetailData[id - 1].title }}
          </p>
          <p class="text-sm md:text-2xl line-clamp-3 md:pt-4 pt-2">
            {{ novelsDetailData[id - 1].synopsis }}
          </p>
          <div class="hidden pt-6 md:flex">
            <div class="flex mr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-8 h-8 text-gray-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                  clip-rule="evenodd"
                />
              </svg>

              <p class="justify-self-end text-xl text-gray-400 ml-2">56.8M</p>
            </div>
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-8 h-8 text-gray-400"
              >
                <path
                  d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z"
                />
              </svg>

              <p class="justify-self-end text-xl text-gray-400 ml-2">1.6M</p>
            </div>
          </div>
          <div class="md:flex pt-2 hidden">
            <button
              class="px-8 py-3 bg-blue-600 rounded-full text-white font-semibold mr-4"
            >
              Mulai lihat EP.1
            </button>
            <button class="px-8 py-3 flex bg-slate-100 rounded-full border">
              <svg
                class="w-6 h-6 text-gray-400 dark:text-white mr-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 19"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
                /></svg
              >Favorit
            </button>
          </div>

          <div class="flex space-x-4 md:hidden mt-auto">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="md:w-6 md:h-6 w-3 h-3"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                  clip-rule="evenodd"
                />
              </svg>

              <p class="justify-self-end text-xs md:text-base ml-1">51.6M</p>
            </div>
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="md:w-6 md:h-6 w-3 h-3"
              >
                <path
                  d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z"
                />
              </svg>

              <p class="justify-self-end text-xs md:text-base ml-1">1.6M</p>
            </div>
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="md:w-6 md:h-6 w-3 h-3 text-yellow-200"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>

              <p class="justify-self-end text-xs md:text-base ml-1">4.7</p>
            </div>
          </div>
        </div>
        <div class="w-5/12 px-4">
          <img
            src="https://picsum.photos/1000/1500"
            alt=""
            class="h-full w-full md:h-[20rem] object-cover rounded-xl"
          />
        </div>
      </div>

      <div v-else>
        <p>Data tidak tersedia.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;

const novelsDetailData = await useFetch("/api/novelsDetailData").data;
</script>
