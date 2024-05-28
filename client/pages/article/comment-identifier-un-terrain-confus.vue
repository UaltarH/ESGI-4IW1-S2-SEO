<template>
  <article class="py-24">
    <header>
      <div class="flex items-center gap-4 mb-6 text-md uppercase">
        <component :is="article.icon" :width="80" :height="80"></component>
        <h1 class="text-5xl">{{ article.title }}</h1>
      </div>
      <div class="mb-8">
        <div class="flex flex-wrap gap-4 mb-4">
          <tag v-for="tag in article.tags" :name="tag.name" :component="tag.icon" :color="tag.color"></tag>
        </div>
        <div class="flex items-center gap-1">
          <date></date><time :datetime="article.date" class="text-gray-400 dark:text-gray-700">Publié le {{ dateText }}</time>
        </div>
      </div>
    </header>
    <div>
      <p v-html="article.content"></p>
    </div>
  </article>
</template>
<script setup lang="ts">
import {articles} from '~/composables/data';
import type {Article} from "~/data/article.dto";
import date from '@/components/icons/date.vue';

const article: Article = articles.find((article) => article.url === '/article/comment-identifier-un-terrain-confus');
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
let articleDate:Date = new Date(article.date);
const dateText = articleDate.toLocaleDateString('fr-FR', options);

const description = 'Découvrez comment identifier un terrain confus dans cet article';
useSeoMeta({
  title: article.title,
  description: description,
  ogTitle: article.title,
  ogUrl: `https://terrainconfus.fr${article.url}`,
  ogDescription: description,
  twitterTitle: article.title,
  twitterDescription: description,
});
</script>