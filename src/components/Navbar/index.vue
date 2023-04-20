<template>
  <ul class='flex gap-5'>
    <li class='text-2xl font-semibold'>
      <router-link exact-active-class='active' to='/'>Home</router-link>
    </li>
    <li class='text-2xl font-semibold'>
      <router-link exact-active-class='active' to='/about'>About</router-link>
    </li>
    <li class='text-2xl font-semibold'>
      <router-link exact-active-class='active' to='/stack'>Stack</router-link>
    </li>
    <li class='text-2xl font-semibold'>
      <router-link exact-active-class='active' to='/counter'>Counter</router-link>
    </li>
    <li class='text-2xl font-semibold'>
      <router-link exact-active-class='active' to='/fetch'>Fetch</router-link>
    </li>
  </ul>
</template>

<script setup lang='ts'>
</script>
<style scoped>

</style>
