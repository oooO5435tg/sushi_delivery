<script setup>
import HeaderItem from "@/components/HeaderItem.vue";
</script>

<template>
  <header>
    <div class="header">
      <nav>
        <HeaderItem to="/" text="Главная" />
        <HeaderItem to="/catalog" text="Каталог" />
        <HeaderItem to="/info" text="Доставка и оплата" />
        <HeaderItem to="/cart" text="Корзина" />
        <HeaderItem to="/" text="Профиль" />
        <HeaderItem to="/registration" text="Регистрация" />
        <HeaderItem to="/authorization" text="Войти" />
      </nav>
      <div class="header-underline"></div>
    </div>
  </header>
</template>

<style scoped>
</style>