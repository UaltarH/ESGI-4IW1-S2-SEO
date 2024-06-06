<template>
  <section class="py-24 sm:py-32 relative">
    <h2 class="text-5xl mb-10 font-medium text-center">Derniers articles</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
      <Card v-for="(article) in articles"
            :title="article.title"
            :icon="article.icon"
            :link="article.url"
            :date="article.date"
            :updateDate="article.hasOwnProperty('updateDate') ? article.updateDate : undefined"
            :tags="article.tags"
      >
        <!--<div v-html="getArticleDescription(article.content)" class="article-preview max-h-12 min-h-12 overflow-hidden"></div>-->
      </Card>
    </div>
  </section>
</template>
<script setup lang="ts">
import {articles as a} from "~/composables/data";
import {type Article, getLatestArticles} from "~/data/article.dto";
import {useArticleDescription} from "~/composables/useArticleDescription";
import {onMounted} from "vue";
import Card from "~/components/Card.vue";

onMounted(() => {
  loadLatestArticles();
});
const {getArticleDescription} = useArticleDescription();
const articles = ref<Article[]>();
function loadLatestArticles() {
  articles.value = getLatestArticles(a, 3);
}
</script>