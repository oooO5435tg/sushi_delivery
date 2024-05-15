<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="sushi-card">
    <h4>{{ props.item.name }}</h4>
    <p>{{ props.item.price }}$</p>
  </div>
</template>

<style scoped>
.sushi-card {
  width: 18.75rem;
  height: 25rem;
  border: 1px solid #ccc;
  margin: 0 3rem 3rem 0;
  padding: 1rem;
}
</style>