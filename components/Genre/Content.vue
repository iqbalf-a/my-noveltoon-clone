<template>
  <div>
    <hr
      class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 block md:hidden"
    />
    <div class="container mx-auto max-w-screen-xl mt-2 md:mt-8">
      <div class="flex flex-wrap pl-8 md:pl-0">
        <a v-for="item in data" :key="item.id" class="flex w-[26rem] pr-4 pb-8" href="/detail/1">
          <img
            :src="item.imageUrl + generateRandom() + '/120/160'"
            :alt="item.name"
            class="rounded-lg"
          />
          <div class="flex flex-col justify-between ml-6">
            <div class="flex flex-col">
              <p class="text-xl font-bold">{{ item.name }}</p>
              <p class="text-sm text-slate-600 mt-2">{{ item.tags }}</p>
            </div>
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-blue-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                  clip-rule="evenodd"
                />
              </svg>

              <p class="justify-self-end text-base text-blue-600 ml-2">
                {{ intToString(item.reads) }}
              </p>
            </div>
          </div>
        </a>
      </div>

      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div class="flex max-w-screen-xl justify-center">
        <button
          class="bg-transparent hover:bg-blue-500 text-slate-600 font-semibold hover:text-white py-4 px-5 md:px-10 border border-slate-600 hover:border-transparent rounded-full inline-flex items-center mx-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="md:text-lg text-sm"> Sebelumnya </span>
        </button>

        <button
          class="bg-transparent hover:bg-blue-500 text-slate-600 font-semibold hover:text-white py-4 px-5 md:px-10 border border-slate-600 hover:border-transparent rounded-full inline-flex items-center mx-4"
        >
          <span class="md:text-lg text-sm"> Selanjutnya </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// export default {

// }

const { data } = await useFetch("/api/novelsData");

const intToString = (num: any) => {
  num = num.toString().replace(/[^0-9.]/g, "");
  if (num < 1000) {
    return num;
  }
  let si = [
    { v: 1e3, s: "K" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" },
  ];
  let index;
  for (index = si.length - 1; index > 0; index--) {
    if (num >= si[index].v) {
      break;
    }
  }
  return (
    (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
    si[index].s
  );
};

function generateRandom(min = 0, max = 500) {
  return Math.floor(Math.random() * max) + min;
}
</script>

<style lang="scss" scoped></style>
