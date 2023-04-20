<template>
  <div class='flex flex-col items-center space-y-2'>
    <h1>{{ count }}</h1>
    <div class='btn-group flex gap-5'>
      <button
          v-on:click='increment()'
          class='rounded bg-slate-900 px-6 py-2 text-white transition duration-200 hover:bg-slate-600'
      >
        Increment
      </button>
      <button
          v-on:click='decrement()'
          class='rounded bg-slate-900 px-6 py-2 text-white transition duration-200 hover:bg-slate-600'
      >
        Decrement
      </button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useCounterStore } from "@/stores/CouterStore";
import { storeToRefs } from "pinia";

const counterStore = useCounterStore()

const { count } = storeToRefs(counterStore)
const { decrement, increment } = counterStore

</script>

<style scoped>

</style>
