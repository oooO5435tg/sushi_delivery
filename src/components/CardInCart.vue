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
  <div class="sushi-card-container">
    <img src="../assets/img/cart-card.png" alt="СУШИ">
    <div class="sushi-card">
      <div class="sushi-card-info">
        <p>{{ props.item.price }}$</p>
        <h4>{{ props.item.name }}</h4>
        <div class="sushi-card-quantity">
          <div class="quantity-reduce">-</div>
          <p>{{ props.item.quantity }} шт</p>
          <div class="quantity-increase">+</div>
        </div>
      </div>
      <div class="sushi-card-buttons">
<!--        кнопку добавления в избранное можно вынести в компонент?-->
        <button class="sushi-card-favourites">избранное</button>
        <button class="sushi-card-delete">удалить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sushi-card-container {
  width: 71.875rem;
  height: 15.625rem;
  border: 1px solid black;
  display: flex;
}

.sushi-card, .sushi-card-buttons{
  display: flex;
}

.sushi-card-buttons button{
  height: 3.125rem;
}

.sushi-card-quantity{
  display: flex;
  align-items: center;
}

.quantity-reduce, .quantity-increase{
  width: 2.5rem;
  height: 2.5rem;
  background-color: #323232;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>