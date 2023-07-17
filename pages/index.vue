<script>
const { sayHello } = useUtils();
sayHello();
</script>

<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold">Index Page</h1>
    <ProfileHeaderAvatar />

    <img src="@/assets/ve.png" alt="Venezuelano">
    <!-- <img src="/profile-pic.jpg" alt="Edu"> -->
    <IconsBell />
  </div>
</template>