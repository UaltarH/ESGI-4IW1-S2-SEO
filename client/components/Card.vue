<template>
  <article class="card">
    <div class="card--content">
      <header class="mb-4">
        <div class="flex items-end gap-4 mb-6 text-md uppercase">
          <component :is="icon" :width="iconWidth" :height="iconHeight"></component>
          <h2 class="font-medium">{{ title }}</h2>
        </div>
        <div class="flex flex-wrap gap-1">
          <tag v-for="tag in props.tags" :name="tag.name" :component="tag.icon" :color="tag.color"></tag>
        </div>
      </header>
      <div class="text-gray-500 dark:text-gray-500 mb-2">
        <slot></slot>
      </div>
    </div>
    <footer class="card--footer flex items-center justify-between">
      <div class="flex items-center gap-1">
        <date></date><time :datetime="props.date" class="text-gray-400 dark:text-gray-700">{{ dateText }}</time>
      </div>
      <NuxtLink :to="link" class="btn btn--primary">Lire la suite</NuxtLink>
    </footer>
  </article>
</template>
<script lang="ts" setup>
import {type Component, defineProps} from 'vue';
import date from '@/components/icons/date.vue';
import tag from '@/components/Tag.vue';
import {type Tag as tagtype} from '@/data/tag.dto'

const iconWidth = 50;
const iconHeight = 50;
const props = defineProps<{
  title: string;
  icon: Component;
  link: string;
  date: string;
  tags: tagtype[];
}>();
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const dateText = new Date(props.date).toLocaleDateString('fr-FR', options);

</script>
