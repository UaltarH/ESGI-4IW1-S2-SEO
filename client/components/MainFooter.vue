<template>
  <footer class="w-full border-t border-gray-200 dark:border-[#3a3960] py-4">
    <div class="flex flex-col sm:w-full xl:w-xl sm:h-12 items-center m-auto">
      <div class="row flex flex-row w-full">
        <div class="flex-1 text-left">
          <p>© 2024. Terrain Confus - All Rights Reserved.</p>
        </div>
        <div class="flex-1 text-right">
          <ul>
            <li>
              <a class="flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 hover:bg-gray-50 dark:hover:bg-dark-blue-dark inline-flex items-center" aria-label="Terrain Confus sur X" href="https://x.com/TerrainConfus" rel="noopener noreferrer" target="_blank">
                <x class="fill-black dark:fill-white"></x>
              </a>
              <a class="flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 hover:bg-gray-50 dark:hover:bg-dark-blue-dark inline-flex items-center" aria-label="Terrain Confus sur instagram" href="https://www.instagram.com/terrain.confus/" rel="noopener noreferrer" target="_blank">
                <instagram class="fill-black dark:fill-white"></instagram>
              </a>
              <a class="flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 hover:bg-gray-50 dark:hover:bg-dark-blue-dark inline-flex items-center" aria-label="Terrain Confus sur Facebook" href="https://www.facebook.com/groups/terrainconfus" rel="noopener noreferrer" target="_blank">
                <facebook class="fill-black dark:fill-white"></facebook>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

</template>
<script setup lang="ts">
import X from "@/components/icons/x.vue";
import Facebook from "~/components/icons/facebook.vue";
import Instagram from "~/components/icons/instagram.vue";
</script>