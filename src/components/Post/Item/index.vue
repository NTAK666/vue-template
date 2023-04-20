<template>
  <div class='flex max-w-[450px] flex-col items-center space-y-10 md:max-w-[1000px]'>
    <h1 class='text-center text-2xl font-semibold'>{{ post.title }}}</h1>
    <p class='text-center'>{{ post.body }}}</p>
  </div>
</template>

<script setup lang='ts'>

import { defineProps } from 'vue'
import { Post } from "@/entities/Post";

const { post } = defineProps<{
  post: Post
}>()

</script>
<script lang='ts'>
export default {
  name: 'PostItem',
};
</script>
<style scoped>

</style>
