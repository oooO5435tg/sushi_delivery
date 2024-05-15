<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
  <main>
    <h2>АВТОРИЗАЦИЯ</h2>
    <form>
      <input type="text" id="login" required placeholder="Логин"/>
      <input type="text" id="password" required placeholder="Пароль"/>
      <button type="submit">Войти</button>
    </form>
    <RouterLink to="/registration">Зарегистрироваться</RouterLink>
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
  height: 27rem;
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