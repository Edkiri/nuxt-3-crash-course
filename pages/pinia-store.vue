<template>
  <main class="p-5">
    {{ store.name }}
    {{ store.count }}
    <div>
      <button @click="store.increment">Add</button>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useCounterStore } from '../stores/myStore';
const store = useCounterStore();
</script>