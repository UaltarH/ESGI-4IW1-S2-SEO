<template>
  <article class="card">
    <div class="card--content">
      <header class="mb-4">
        <div class="flex items-end gap-4 mb-6 text-md uppercase">
          <component :is="icon" :width="iconWidth" :height="iconHeight"></component>
          <h2 class="font-medium">{{ title }}</h2>
        </div>
        <div class="flex flex-wrap gap-1">
          <tag v-for="tag in tags" :name="tag.name" :component="tag.icon" :color="tag.color"></tag>
        </div>
      </header>
      <div class="text-gray-500 dark:text-gray-500 mb-2">
        <slot></slot>
      </div>
    </div>
    <footer class="card--footer flex items-center justify-between">
      <div class="flex items-center gap-1">
        <date></date>
        <time v-if="updateDate === undefined" :datetime="props.date" class="text-gray-400 dark:text-gray-700">Publié le {{ dateText(props.date) }}</time>
        <time v-else :datetime="props.updateDate" class="text-gray-400 dark:text-gray-700">Mis à jour le {{ dateText(props.updateDate!) }}</time>
      </div>
      <NuxtLink :to="link" class="btn btn--primary">Lire la suite</NuxtLink>
    </footer>
  </article>
</template>
<script lang="ts" setup>
import {type Component} from 'vue';
import date from '@/components/icons/date.vue';
import {type Tag as tagtype} from '@/data/tag.dto'
import {useArticleDescription} from "~/composables/useArticleDescription";

const {dateText} = useArticleDescription();

const iconWidth = 50;
const iconHeight = 50;
const props = defineProps<{
  title: string;
  icon: Component;
  link: string;
  date: string;
  updateDate?: string;
  tags: tagtype[];
}>();

</script>
