<script setup>
import { ref, computed } from 'vue';
import CardInCart from '../components/CardInCart.vue';

// Добавим данные для карточек товаров в корзине
const cartItems = ref([
  { name: 'Суши ролл 1', price: 10, quantity: 2 },
  { name: 'Суши ролл 2', price: 12, quantity: 1 },
]);

// Функция для расчета общей суммы
function calculateTotal() {
  return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Функция для изменения слова "товар" на "товара" или "товаров"
const itemsText = computed(() => {
  const count = cartItems.value.length;
  const lastTwoDigits = count % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return 'товаров';
  }
  const lastDigit = count % 10;
  if (lastDigit === 1) {
    return 'товар';
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'товара';
  }
  return 'товаров';
});
</script>

<template>
  <main>
    <h2>КОРЗИНА</h2>

    <div class="cart-container">
      <div class="cart-items">
        <h3>{{ cartItems.length }} {{ itemsText }}</h3>
        <!-- Используем компонент Card для отображения товаров в корзине -->
        <CardInCart v-for="item in cartItems" :key="item.name" :item="item" />
      </div>

      <div class="cart-total">
        <h3>Итого к оплате:</h3>
        <p>{{ calculateTotal() }}$</p>
        <button>Заказать</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>