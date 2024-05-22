<template>
  <main-menu :menuItems="menuItems"/>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import MainMenu from "./components/MainMenu.vue";
import { useMenuItems} from "./composables/useMenuItems";
import {onMounted} from "vue";
import {useDarkMode} from "@/composables/useDarkMode";

const {menuItems} = useMenuItems();
const { loadDarkModePreference } = useDarkMode();
onMounted(() => {
  loadDarkModePreference();
});
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
</style>
