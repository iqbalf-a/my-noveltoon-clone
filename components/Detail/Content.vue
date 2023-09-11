<template>
  <div class="container max-w-screen-xl mx-auto pt-4">
    <div class="flex md:space-x-4 justify-evenly">
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
    <div class="font-medium md:pt-4 py-2 px-4">
      <p>Updated 312 Episodes</p>
    </div>
    <hr
      class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 block md:hidden"
    />
    <div class="md:pt-4 md:mx-0 mx-4 py-2 flex flex-wrap">
      <div v-for="i in 5" :key="i">
        <a class="flex space-x-0.5 font-medium w-[20rem] md:w-[38rem] mr-4 mb-3" href="">
          <div class="md:p-4 p-2 md:bg-slate-100 rounded-md w-12 grid">
            <p class="justify-self-center">{{ i }}</p>
          </div>
          <div class="md:p-4 p-2 md:bg-slate-100 grow rounded-md">
            <p>Frustasi {{ i }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
