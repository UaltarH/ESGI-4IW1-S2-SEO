<template>
  <header class="bg-primary flex flex-row w-full h-12 items-center">
    <h1 class="flex-1 text-center"><a href="/">Terrain Confus</a></h1>
    <nav class="flex-2">
      <ul class="flex flex-row w-full">
        <li v-for= "(item, index) in menuItems" class="flex text-center min-w-16">
          <ul v-if="item.route == '' ">
            <li v-for="(subItem, indexSub) in item.children"><router-link :to="subItem.route">{{ subItem.title }}</router-link></li>
          </ul>
          <router-link v-else :to="item.route">{{ item.title }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="flex flex-0.5 gap-2 items-center">
      <router-link to="/login">Login</router-link>
      <dark-mode></dark-mode>
    </div>
  </header>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import DarkMode from "@/components/DarkMode.vue";

const props = defineProps(['menuItems']);
const menuItems = ref(props.menuItems);


</script>