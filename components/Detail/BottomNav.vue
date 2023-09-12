<template>
  <div
    class="fixed bottom-0 w-full left-0 z-50 h-20 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 block md:hidden"
  >
    <div class="flex items-center content-center px-8 py-4">
      <div class="flex flex-col items-center mr-8">
        <svg
          class="w-6 h-6 text-gray-400 dark:text-white"
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
          />
        </svg>
        <div>
          <p class="text-gray-400">Favorit</p>
        </div>
      </div>
      <button class="grow rounded-full py-2 bg-blue-600 text-white">
        Read
      </button>
    </div>
  </div>
</template>
