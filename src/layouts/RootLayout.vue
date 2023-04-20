<template>
  <div class='container mx-auto flex flex-col items-center space-y-5 py-20'>
    <router-view name='Navbar'></router-view>
    <router-view></router-view>
    <div class='sticky bottom-0 w-full bg-white py-10 text-center'>
      <router-view name='Footer'></router-view>
    </div>
  </div>
</template>

<script setup lang='ts'></script>
<script>
export default {
  name: 'RootLayout',
};
</script>
<style scoped>

</style>
