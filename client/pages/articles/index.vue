<template>
  <h1>Articles</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
    <Card title="Article 1">
      <p>Contenu de l'article 1</p>
    </Card>
    <Card title="Article 2">
      <p>Contenu de l'article 2</p>
    </Card>
    <Card title="Article 3">
      <p>Contenu de l'article 3</p>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import Card from "@/components/Card.vue";

</script>