<script setup>
import { ref } from 'vue';
import Card from '../components/Card.vue';

// Добавим данные для карточек товаров
const sushiItems = [
  { name: 'Суши ролл 1', price: 10},
  { name: 'Суши ролл 2', price: 12},
  { name: 'Суши ролл 3', price: 15},
];

// Добавим данные для фильтрации и сортировки
const filters = ['Фильтр 1', 'Фильтр 2', 'Фильтр 3'];
const sortOptions = ['Сортировка 1', 'Сортировка 2', 'Сортировка 3'];

// Добавим переменные для выбранных фильтров и сортировки
let selectedFilters = ref([]);
let selectedSort = ref('');
</script>

<template>
  <main>
    <h2>СУШИ</h2>

    <div class="sushi-container">
      <div class="sidebar">
        <!-- Блок фильтрации -->
        <div class="sidebar-filter">
          <h3>Фильтры</h3>
          <ul>
            <li v-for="filter in filters" :key="filter">
              <input type="checkbox" :id="filter" v-model="selectedFilters" :value="filter">
              <label :for="filter">{{ filter }}</label>
            </li>
          </ul>
        </div>

        <!-- Блок сортировки -->
        <div class="sidebar-sort">
          <h3>Сортировка</h3>
          <div>
            <input type="radio" id="sort1" v-model="selectedSort" value="Сортировка 1">
            <label for="sort1">Сортировка 1</label>
          </div>
          <div>
            <input type="radio" id="sort2" v-model="selectedSort" value="Сортировка 2">
            <label for="sort2">Сортировка 2</label>
          </div>
          <div>
            <input type="radio" id="sort3" v-model="selectedSort" value="Сортировка 3">
            <label for="sort3">Сортировка 3</label>
          </div>
        </div>
      </div>

      <!-- Карточки товаров -->
      <div class="sushi-cards">
        <Card v-for="item in sushiItems" :key="item.name" :item="item" />
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

.sushi-container{
  display: flex;
  margin-top: 3rem;
}

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 3rem;
}

.sidebar-filter, .sidebar-sort {
  width: 31.25rem;
  height: 12.5rem;
  border: 1px solid #ccc;
  margin-bottom: 3rem;
  padding: 1rem;
}

.sushi-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.sushi-card {
  width: 18.75rem;
  height: 25rem;
  border: 1px solid #ccc;
  margin: 0 3rem 3rem 0;
  padding: 1rem;
}
</style>