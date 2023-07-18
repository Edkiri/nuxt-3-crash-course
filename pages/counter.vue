<script lang="ts" setup>
// const counter = useState<number>('counter', () => Math.round(Math.random() * 1000))
const counter = useCounter();
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button class="px-3 py-2 text-3xl" @click="counter++">
      +
    </button>
    <button class="px-3 py-2 text-3xl" @click="counter--">
      -
    </button>
  </div>
</template>
