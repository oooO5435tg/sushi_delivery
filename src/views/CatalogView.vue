<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
  <main>
    <h2>КАТАЛОГ</h2>
    <div class="catalog-container">
      <div class="catalog-instance">
        <div class="catalog-img">
          <img src="../assets/img/sushi.png" alt="СУШИ">
        </div>
        <div class="catalog-name">
          <h3>СУШИ</h3>
          <RouterLink to="/sushi">СМОТРЕТЬ</RouterLink>
        </div>
      </div>
      <div class="catalog-instance">
        <div class="catalog-img">
          <img src="../assets/img/drink.png" alt="НАПИТКИ">
        </div>
        <div class="catalog-name">
          <h3>НАПИТКИ</h3>
          <a href="#">СМОТРЕТЬ</a>
        </div>
      </div>
      <div class="catalog-instance">
        <div class="catalog-img">
          <img src="../assets/img/desert.png" alt="ДЕСЕРТЫ">
        </div>
        <div class="catalog-name">
          <h3>ДЕСЕРТЫ</h3>
          <a href="#">СМОТРЕТЬ</a>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main{
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.catalog-container{
  display: flex;
  justify-content: space-between;
  width: 77.5rem;
  margin-top: 3rem;
}

.catalog-instance{
  max-width: 18.75rem;
  height: 25rem;
  border: 1px solid #e23030;
  border-radius: 10px;
  background-color: #FFEFEF;
}

.catalog-img img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom: 1px solid #e23030;
  border-radius: 10px;
}

.catalog-name{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
}

.catalog-name a{
  font-size: 16px;
  color: #B61B1B;
  margin-top: 3%;
}
</style>