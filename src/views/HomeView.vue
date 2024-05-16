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
        <img src="../assets/img/welcome.jpg" alt="welcome img">
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
  position: relative;
  width: 100%;
  height: 37.5rem;
}

.background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/bambuk.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(60%);
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
  top: 3rem;
  left: 33rem;
  padding: 10px;
  border-radius: 5px;
}

.search-box input {
  height: 40px;
  width: 250px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
}

.search-box button {
  height: 40px;
  width: 90px;
  background-color: #E23030;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.home-sale {
  margin-top: 3rem;
  text-align: center;
}

.cart-container{
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}

.cart-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>