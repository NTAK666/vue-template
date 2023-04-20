<template>
  <button
      v-on:click='refetch()'
      :disabled='isFetching'
      class='rounded bg-red-500 px-4 py-2 font-semibold text-white'
  >
    Refetch
  </button>
  <div>
    <template v-if='isFetching'>
      <Loading/>
    </template>
    <template v-else>
      <template v-for='post in posts'>
        <PostItem :post='post'/>
      </template>
    </template>
  </div>
</template>

<script setup lang='ts'>
import { usePosts } from "@/services/PostService";
import Loading from "@/components/Loading/index.vue";
import PostItem from "@/components/Post/Item/index.vue";

const { data: posts, refetch, isFetching } = usePosts()

</script>

<style scoped>

</style>
