<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  to: {
    type: [String, Object],
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
</script>

<template>
  <RouterLink :to="to">{{ text }}</RouterLink>
</template>

<style scoped>

</style>