<script setup>
import { ref } from 'vue';
import Card from '../components/Card.vue';

// Добавим данные для карточек товаров в корзине
const cartItems = ref([
  { name: 'Суши ролл 1', price: 10},
  { name: 'Суши ролл 2', price: 12},
]);
</script>

<template>
  <main>
    <div class="background">
      <div class="hero">
        <img src="../assets/img/welcome.png" alt="welcome img">
        <div class="search-box">
          <input type="text" placeholder="Поиск товара">
          <button>Найти</button>
        </div>
      </div>
    </div>

    <div class="home-sale">
      <h2>АКЦИИ</h2>
      <div class="cart-container">
        <div class="cart-items">
          <!-- Используем компонент Card для отображения товаров в корзине -->
          <Card v-for="item in cartItems" :key="item.name" :item="item" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.background{
  background-color: rgba(248, 78, 23, 0.05);
  width: 100%;
  height: 600px;
}

.hero {
  position: relative;
  width: 100%;
  height: 37.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero img{
  max-width: 100%;
  max-height: 37.5rem;
  object-fit: cover;
}

.search-box {
  position: absolute;
  top: 3.125rem;
  left: 31.25rem;
  padding: 10px;
  border-radius: 5px;
}

.search-box input {
  padding: 5px;
  border: none;
  border-radius: 3px;
  margin-right: 5px;
}

.search-box button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

.home-sale {
  margin-top: 3rem;
}

.cart-container{
  display: flex;
  justify-content: center;
}

.cart-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>