<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import HeaderItem from "@/components/HeaderItem.vue";

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
}

const handleClickOutside = (event) => {
  if (!event.target.closest('.profile-dropdown')) {
    isDropdownOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <header>
    <div class="header">
      <nav>
        <HeaderItem to="/" text="Главная" class="nav-first-child"/>
        <HeaderItem to="/catalog" text="Каталог" />
        <HeaderItem to="/info" text="Доставка и оплата" />
        <HeaderItem to="/cart" text="Корзина" />
        <div class="profile-dropdown" @click="toggleDropdown">
          <HeaderItem to="" text="Профиль" />
          <ul class="dropdown-menu" :class="{ 'show': isDropdownOpen }">
            <li><HeaderItem to="/orders" text="Заказы" /></li>
            <li><HeaderItem to="/favorites" text="Избранное" /></li>
          </ul>
        </div>
        <HeaderItem to="/registration" text="Регистрация" />
        <HeaderItem to="/authorization" text="Войти" />
      </nav>
      <div class="header-underline"></div>
    </div>
  </header>
</template>

<style scoped>
.profile-dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.dropdown-menu {
  min-width: 300px;
  display: none;
  position: absolute;
  top: 100%;
  right: 20%;
  background-color: #f1f1f1;
  z-index: 1;
  margin-top: 19px;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-menu li {
  height: 75px;
  text-decoration: none;
  display: block;
  border-bottom: 1px solid #ccc;
}

.dropdown-menu li:last-child {
  border-bottom: none;
}

.dropdown-menu li a {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  line-height: 70px;
}
</style>