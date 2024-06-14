<template>
  <banner></banner>
<!--  <small-article-grid></small-article-grid>-->
  <section class="py-24 sm:py-32 relative">
    <div class="flex mb-6">
      <div class="lg:w-1/2">
        <h2 class="text-5xl font-medium mb-6">Une solution B2B et B2C</h2>
        <p class="leading-loose tracking-wide">
          Nous proposons une solution B2B et B2C pour les professionnels et les particuliers. Notre solution B2B permet aux professionnels de référencer leurs terrains confus et de les mettre en avant pour les passionnés d'airsoft, d'urbex et bien plus. Notre solution B2C permet aux particuliers de trouver des terrains confus à explorer en toute sécurité.
        </p>
      </div>
    </div>
    <div class="flex justify-end mb-6">
      <div class="lg:w-1/2 lg:text-right lg:self-end">
        <h2 class="text-5xl font-medium mb-6">Un terrain confus pour tous les goûts</h2>
        <p class="leading-loose tracking-wide">
          Que vous soyez passionné d'airsoft, d'urbex ou que vous cherchiez un terrain confus pour un tournage, vous trouverez forcément le terrain confus qui vous conviendra. Nous référençons des terrains confus de toutes sortes pour satisfaire tous les goûts.
        </p>
      </div>
    </div>
    <div class="flex mb-6">
      <div class="lg:w-1/2">
        <h2 class="text-5xl font-medium mb-6">Des guides et des articles pour vous accompagner</h2>
        <p class="leading-loose tracking-wide">
          Pour vous accompagner dans l'exploration d'un terrain confus, nous mettons à votre disposition des guides et des articles rédigés par des experts. Vous pourrez ainsi identifier un terrain confus et l'explorer en toute sécurité.
        </p>
      </div>
    </div>
  </section>
  <section class="py-24 sm:py-32 relative text-center">
    <h2 class="text-5xl font-medium mb-6">Suivez-nous</h2>
    <div class="flex justify-center gap-4">
      <a class="flex-shrink-0 font-medium rounded-md gap-x-1.5 p-1.5 hover:bg-gray-50 dark:hover:bg-dark-blue-dark inline-flex items-center" aria-label="Terrain Confus sur X" href="https://x.com/TerrainConfus" rel="noopener noreferrer" target="_blank">
        <x class="fill-black dark:fill-white"></x> @TerrainConfus
      </a>
      <a class="flex-shrink-0 font-medium rounded-md gap-x-1.5 p-1.5 hover:bg-gray-50 dark:hover:bg-dark-blue-dark inline-flex items-center" aria-label="Terrain Confus sur Instagram" href="https://www.instagram.com/terrain.confus/" rel="noopener noreferrer" target="_blank">
        <instagram class="fill-black dark:fill-white"></instagram>@terrain.confus
      </a
      ><a class="flex-shrink-0 font-medium rounded-md gap-x-1.5 p-1.5 hover:bg-gray-50 dark:hover:bg-dark-blue-dark inline-flex items-center" aria-label="Terrain Confus sur Facebook" href="https://www.facebook.com/groups/terrainconfus" rel="noopener noreferrer" target="_blank">
        <facebook class="fill-black dark:fill-white"></facebook>Terrain Confus
      <i class="fab fa-instagram"></i>
      </a>

    </div>
  </section>
</template>

<script lang="ts" setup>
import Banner from "~/components/Banner.vue";
import SmallArticleGrid from "~/components/SmallArticleGrid.vue";
import X from "~/components/icons/x.vue";
import Instagram from "~/components/icons/instagram.vue";
import Facebook from "~/components/icons/facebook.vue";
</script>
