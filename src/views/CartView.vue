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

const showModal = ref(false);

function toggleModal() {
  showModal.value = !showModal.value;
}
</script>

<template>
  <main>
    <h2>КОРЗИНА</h2>

    <div class="cart-container">
      <div class="cart-items">
        <h3>{{ cartItems.length }} {{ itemsText }}</h3>
        <CardInCart v-for="item in cartItems" :key="item.name" :item="item"/>
      </div>

      <div class="cart-total">
        <h3>Итого к оплате:</h3>
        <p>{{ calculateTotal() }}$</p>
        <button @click="toggleModal">Заказать</button>
      </div>
    </div>

    <!-- Модальное окно -->
    <div class="modal" v-if="showModal"
         v-bind:class="{ 'modal-enter-active': showModal, 'modal-leave-active': !showModal }">
      <div class="modal-content" style="width: 1300px; height: 500px;">
        <div class="form-container">
          <button class="close-button" @click="toggleModal">X</button>
          <div class="address-form-caption">
            <h3>Доставка на адрес</h3>
          </div>
          <form>
            <div class="address-form-input">
              <label for="city">Город</label>
              <input type="text" id="city"/>
            </div>
            <div class="address-form-input">
              <label for="street">Улица</label>
              <input type="text" id="street"/>
            </div>
            <div class="address-form-input">
              <label for="home">Дом</label>
              <input type="text" id="home"/>
            </div>
            <div class="address-form-input">
              <label for="entrance">Подъезд</label>
              <input type="number" id="entrance"/>
            </div>
            <div class="address-form-input">
              <label for="floor">Этаж</label>
              <input type="number" id="floor"/>
            </div>
            <div class="address-form-input">
              <label for="apartment">Квартира</label>
              <input type="number" id="apartment"/>
            </div>
            <button type="submit">Заказать</button>
          </form>
        </div>
        <div class="map-container">
          <h3>КАРТА</h3>
        </div>
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

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modal-content {
  width: 1300px;
  height: 500px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.modal-enter-active,
.modal-leave-active {
  opacity: 1;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.form-container,
.map-container {
  padding: 30px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-container form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-container input,
.form-container button {
  padding: 10px;
  font-size: 16px;
}

.close-button {
  position: absolute;
  top: 245px;
  left: 320px;
  cursor: pointer;
}
</style>