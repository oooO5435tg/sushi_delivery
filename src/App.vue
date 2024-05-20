<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderList from './components/HeaderList.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="wrapper">
    <HeaderList />
    <main class="content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>