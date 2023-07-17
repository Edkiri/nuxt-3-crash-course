<script setup>
const nuxt = useNuxtApp();
console.log(nuxt);
</script>

<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold">Event detail page</h1>
    <h3 class="text-xl">Event id {{ $route.params.id }}</h3>
  </div>
</template>