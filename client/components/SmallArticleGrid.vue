<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
    <Card v-for="(article) in articles"
          :title="article.title"
          :icon="article.icon"
          :link="article.url"
          :date="article.date"
          :tags="article.tags"
    >
      <p v-html="article.content" class="max-h-12 text-ellipsis overflow-hidden whitespace-nowrap"></p>
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