<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
  <main>
    <h2>РЕГИСТРАЦИЯ НОВОГО ПОЛЬЗОВАТЕЛЯ</h2>
    <form>
      <input type="text" id="fio" required placeholder="ФИО"/>
      <input type="tel" id="phone" required placeholder="Номер телефона"/>
      <input type="email" id="email" required placeholder="Email"/>
      <input type="text" id="login" required placeholder="Логин"/>
      <input type="text" id="password" required placeholder="Пароль"/>
      <input type="text" id="password_again" required placeholder="Подтверждение пароля"/>
      <button type="submit">Зарегистрироваться</button>
    </form>
    <RouterLink to="/authorization">Уже есть аккаунт?</RouterLink>
  </main>
</template>

<style scoped>
main{
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

form{
  width: 62rem;
  height: 52.5rem;
  background-color: #FFEFEF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 2rem 0;
}

input{
  width: 50rem;
  height: 3rem;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  padding-left: 1rem;
  margin-bottom: 3.5rem;
}

::placeholder{
  color: #BF7A7A;
}

button{
  width: 18.5rem;
  height: 3rem;
  background-color: #E23030;
  border: none;
  border-radius: 10px;
  color: #ffffff;
}

a:hover{
  text-decoration: underline;
}
</style>