<template>
  <h2 class="text-5xl mb-10 font-medium text-center">Derniers articles</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
    <Card v-for="(article) in articles"
          :title="article.title"
          :icon="article.icon"
          :link="article.url"
          :date="article.date"
          :tags="article.tags"
    >
      <div v-html="article.content" class="article-preview max-h-12 min-h-12 overflow-hidden"></div>
    </Card>
  </div>
</template>
<script setup lang="ts">
import {articles as a} from "~/composables/data";
import {type Article, getLatestArticles} from "~/data/article.dto";
import {onMounted} from "vue";

onMounted(() => {
  loadLatestArticles();
});
const articles = ref<Article[]>();
function loadLatestArticles() {
  articles.value = getLatestArticles(a, 3);
}
</script>