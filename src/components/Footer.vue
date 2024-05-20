<script setup>

</script>

<template>
  <footer class="footer">
    <div class="header-underline"></div>
    <div class="footer-content">
      <div class="footer-logo">Лого Название</div>
      <div class="footer-contact">
        <p>Телефон горячей линии: +7 (800) 333-33-23</p>
      </div>
      <div class="footer-disclaimer">
        <p>Информация на сайте носит справочный характер. Внешний вид и состав блюд могут отличаться от представленных на сайте.</p>
        <p>Подробности у операторов. Акции и скидки не суммируются и не распространяются на наборы, десерты, напитки</p>
      </div>
      <div class="footer-copyright">
        &copy; Название, 2024. Все права защищены.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  bottom: 0;
  color: black;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer-logo {
  font-size: 24px;
}
</style>