<template>
  <main-menu :menu-items="menuItems"></main-menu>
  <main class="min-h-screen px-10 lg:px-0">
    <NuxtPage />
  </main>
  <main-footer />
</template>
<script setup lang="ts">
import {onMounted} from 'vue';
import {useMenuItems} from "@/composables/useMenuItems";
import {useDarkMode} from "@/composables/useDarkMode";
import MainMenu from "~/components/MainMenu.vue";

const {menuItems} = useMenuItems();
const { loadDarkModePreference } = useDarkMode();
onMounted(() => {
  loadDarkModePreference();
});
const title = ref('Terrain Confus')
const description = ref('Terrain confus, trouvez votre terrain confus préféré en un clic')

// This will be reactive when you change title/description above
useHead({
  title,
  htmlAttrs: {
    lang: 'fr',
  },
  meta: [
    {
      name: 'description',
      content: description
    },
    {
      name: 'author',
      content: 'Gauthier Lo'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      property: 'og:title',
      content: 'Terrain Confus - Terrain confus en un clic'
    },
    {
      property: 'og:site_name',
      content: 'Terrain Confus - Terrain confus en un clic'
    },
    {
      property: 'og:url',
      content: 'https://terrainconfus.fr'
    },
    {
      property: 'og:description',
      content: 'Terrain Confus, un site de référencement des terrains confus.'
    },
    {
      property: 'og:image',
      content: 'https://terrainconfus.fr/og-image.jpg'
    },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:site',
      content: 'terrain-confus.fr'
    },
    {
      name: 'twitter:title',
      content: 'Terrain Confus - trouvez votre terrain confus en un clic'
    },
    {
      name: 'twitter:description',
      content: 'Terrain Confus, un site de référencement des terrains confus.'
    },
    {
      name: 'twitter:image',
      content: 'https://terrainconfus.fr/twitter-image.png'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    },
    {
      httpEquiv: 'Content-Type',
      content: 'text/html; charset=utf-8'
    },
    {
      name: 'language',
      content: 'French'
    }
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    }
  ]
})
</script>