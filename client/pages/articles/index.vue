<template>
  <div class="py-16">
    <h1>Articles</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
      <Card v-for="(article) in articles"
            :title="article.title"
            :icon="article.icon"
            :link="article.url"
            :date="article.date"
            :updateDate="article.hasOwnProperty('updateDate') ? article.updateDate : undefined"
            :tags="article.tags"
      >
        <div v-html="getArticleDescription(article.content)" class="article-preview max-h-12 min-h-12 overflow-hidden"></div>
      </Card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Card from "@/components/Card.vue";
import {articles} from "~/composables/data";
import {useArticleDescription} from "~/composables/useArticleDescription";

const {getArticleDescription} = useArticleDescription();
useSeoMeta({
  title: 'Articles - Terrain Confus',
  description: 'Retrouvez tous les articles de Terrain Confus',
  ogTitle: 'Articles - Terrain Confus',
  ogUrl: 'https://terrainconfus.fr/articles',
  ogDescription: 'Retrouvez tous les articles de Terrain Confus',
  twitterTitle: 'Articles - Terrain Confus',
  twitterDescription: 'Retrouvez tous les articles de Terrain Confus',
})
</script>