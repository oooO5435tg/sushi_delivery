<script setup>

</script>

<template>
  <main>
    <h2>ДОСТАВКА И ОПЛАТА</h2>
    <div class="info-container">
      <div class="info-main">
        <div class="info-main-instance">
          <h3>Условия доставки</h3>
          <div class="info">
            <p>Доставка осуществляется:</p>
            <p>пн - пт 09:00 - 23:00</p>
            <p>сб - вс 11:00 - 21:00</p>
          </div>
        </div>
        <div class="info-main-instance">
          <h3>Цена доставки</h3>
          <div class="info">
            <p>По городу Томск - бесплатно</p>
            <p>По Томской области - 500 рублей</p>
          </div>
        </div>
        <div class="info-main-instance">
          <h3>Оплата</h3>
          <div class="info">
            <p>Оплата осуществляется:</p>
            <p>Курьеру при получении</p>
          </div>
        </div>
      </div>
      <div class="info-return">
        <h3>Возврат</h3>
        <p>В соответствии с законодательством РФ возврат продовольственных товаров надлежащего качества не допускается, возврат денежных средств за такой товар
          не производится.</p>
        <p>В случае если клиент обнаружит, что ему передан товар ненадлежащего качества, он вправе до истечения срока годности возвратить товар ненадлежащего
          качества продавцу и потребовать возврата уплаченной денежной суммы, либо потребовать замены товара ненадлежащего качества.</p>
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
  justify-content: center;
}

.info-main{
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  max-width: 83.5rem;
}

.info-main-instance{
  max-width: 17rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.info-main-instance h3{
  margin-bottom: 2rem;
}

.info-return{
  display: flex;
  flex-direction: column;
  max-width: 60rem;
}

.info-return h3{
  margin-bottom: 2rem;
}
</style>