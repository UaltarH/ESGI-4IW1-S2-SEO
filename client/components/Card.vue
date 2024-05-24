<template>
  <article class="divide-y divide-gray-200 dark:divide-gray-800 rounded-md ring-1 ring-gray-200 dark:ring-gray-800 bg-secondary-light dark:bg-gray-900">
    <div class="xl:px-4 xl:py-5 sm:p-6 ">
      <header>
        <h2 class="font-medium mb-6">{{ title }}</h2>
      </header>
      <div class="text-gray-500 dark:text-gray-500 mb-2">
        <slot></slot>
      </div>
    </div>
    <footer class="xl:px-4 xl:py-2 sm:p-6">
      <a href="#" class="btn btn--primary">Lire la suite</a>
    </footer>
  </article>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
});

</script>
