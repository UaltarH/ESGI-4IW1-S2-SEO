<template>
  <label class="switch">
    <input type="checkbox" id="dark-mode-toggle" @change="toggleDarkMode">
    <span class="slider round"></span>
  </label>
</template>
<script lang="ts" setup>
import {useDarkMode} from "@/composables/useDarkMode";

const { toggleDarkMode } = useDarkMode();


</script>