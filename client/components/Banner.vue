<template>
  <div class="py-24 sm:py-32 md:py-52 relative">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
      <div class="text-center relative z-[1]">
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl normal-case">
          Platforme Intuitive<br>
          <span class="text-primary block lg:inline-block">Terrain Confus</span>
        </h1>
        <p class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300"> Terrain Confus est une plateforme de référencement des terrains confus que ce soit pour l'airsoft, l'urbex et bien plus !<br>
          Commencez à explorer gratuitement les terrains confus référencés gratuitement !</p>
        <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
          <NuxtLink class="btn btn--primary" to="/articles">Explorer</NuxtLink>
          <NuxtLink to="/about" class="flex-shrink-0 font-medium rounded-md text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800/50 inline-flex items-center">
            Qui sommes-nous ?
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>