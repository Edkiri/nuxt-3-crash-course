<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold">Index Page</h1>
    <ProfileHeaderAvatar />
    <p>{{ $hello("Perrito") }}</p>

    <img src="@/assets/ve.png" alt="Venezuelano">
    <!-- <img src="/profile-pic.jpg" alt="Edu"> -->
    <IconsBell />
  </div>
</template>

<script setup>
const { sayHello } = useUtils();
sayHello();

const { $hello } = useNuxtApp();
console.log($hello("there"));
</script>