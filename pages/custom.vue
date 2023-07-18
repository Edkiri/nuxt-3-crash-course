<script setup>
definePageMeta({
  layout: "custom"
});
const counter = useCounter();
</script>

<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold">Custom Page</h1>
    {{ counter }}
  </div>
</template>