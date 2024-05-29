<template>
  <header class="bg-primary w-full h-12 fixed z-10">
    <nav class="flex sm:w-full xl:w-xl sm:h-12 items-center flex-row m-auto">
      <h1 class="flex-1 text-left"><a href="/"><logo-with-text></logo-with-text></a></h1>
      <ul class="flex flex-row w-full flex-2 text-center font-bold">
        <li v-for= "(item, index) in menuItems" class="flex justify-center items-center h-12 text-center min-w-16">
          <ul v-if="item.route == '' ">
            <li v-for="(subItem, indexSub) in item.children" class="min-w-16 text-center"><NuxtLink :to="subItem.route" class="font-medium">{{ subItem.title }}</NuxtLink></li>
          </ul>
          <NuxtLink v-else :to="item.route" class="menu-link">{{ item.title }}</NuxtLink>
        </li>
      </ul>
      <div class="flex flex-0.5 gap-2 items-center">
        <NuxtLink to="/login" class="menu-link rounded-md hover:bg-primary-light px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700">Connexion</NuxtLink>
<!--        <dark-mode></dark-mode>-->
        <dark-mode-button></dark-mode-button>
      </div>
    </nav>
  </header>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import DarkMode from "@/components/DarkMode.vue";
import DarkModeButton from "./DarkModeButton.vue";
import LogoWithText from "~/components/icons/logoWithText.vue";

const props = defineProps(['menuItems']);
const menuItems = ref(props.menuItems);


</script>