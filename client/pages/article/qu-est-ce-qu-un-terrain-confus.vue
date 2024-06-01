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
          <date></date>
          <time v-if="article.updateDate === undefined" :datetime="article.date" class="text-gray-400 dark:text-gray-700">Publié le {{ dateText(article.date) }}</time>
          <time v-else :datetime="article.updateDate" class="text-gray-400 dark:text-gray-700">Mis à jour le {{ dateText(article.updateDate) }}</time>
        </div>
      </div>
    </header>
    <div v-html="article.content"></div>
  </article>
</template>
<script setup lang="ts">
import {articles} from '~/composables/data';
import type {Article} from "~/data/article.dto";
import date from '@/components/icons/date.vue';
import {useArticleDescription} from "~/composables/useArticleDescription";

const {dateText} = useArticleDescription();

const article: Article = articles.find((article) => article.url === '/article/qu-est-ce-qu-un-terrain-confus');
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
let articleDate:Date = new Date(article.date);

const description = 'Qu\'est-ce qu\'un terrain confus ? Découvrez la réponse dans cet article.';
useSeoMeta({
  title: article.title,
  description: description,
  ogTitle: article.title,
  ogUrl: `https://terrainconfus.fr${article.url}`,
  ogDescription: description,
  twitterTitle: article.title,
  twitterDescription: description,
});
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': article.title,
  'datePublished': articleDate.toISOString(),
  'dateModified': article.updateDate ? new Date(article.updateDate).toISOString() : articleDate.toISOString(),
});
</script>