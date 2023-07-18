<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
  <div>
    <h1>{{ data?.hello }}</h1>
  </div>
</template>