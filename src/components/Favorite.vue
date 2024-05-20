<script setup>

</script>

<template>
  <button @click="toggleFavorite">
    <img src="../assets/img/favorite.png" alt="Добавить в избранное">
  </button>
</template>

<style scoped>
button {
  width: 50px;
  height: 50px;
  border: 1px solid #E23030;
  border-radius: 10px;
  background: none;
  cursor: pointer;
}
</style>