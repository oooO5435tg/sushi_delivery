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
  <div class="card-instance">
    <div class="card-img">
      <img src="../assets/img/sushi.png" alt="СУШИ">
    </div>
    <div class="card-name">
      <h3>{{ props.item.name }}</h3>
      <p>{{ props.item.price }}$</p>
    </div>
  </div>
</template>

<style scoped>
.card-instance {
  max-width: 18.75rem;
  height: 25rem;
  border: 1px solid #E23030;
  border-radius: 10px;
  background-color: #FFEFEF;
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.card-name {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
}

.card-name h3 {
  font-size: 20px;
  color: #E23030;
}

.card-name p {
  font-size: 16px;
  color: #B61B1B;
  margin-top: 3%;
}
</style>