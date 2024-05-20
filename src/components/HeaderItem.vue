<script setup>
import { RouterLink, useRoute } from 'vue-router';

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

const route = useRoute();
</script>

<template>
  <RouterLink :to="to" :class="{ active: route.path === to }">{{ text }}</RouterLink>
</template>

<style scoped>
.active {
  color: #E23030;
}
</style>