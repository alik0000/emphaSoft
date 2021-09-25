<template>
  <div class="modal-background" @click="$emit('close')"></div>
  <div class="modal">
    <h3>Crypton Academy</h3>
    <p>Компания Crypton Studio за 5 лет на рынке стала одной из самых компетентных российских
      компаний в области блокчейн разработки. Мы запускаем собственную Crypton
      Academy и открываем набор на программы стажировок для желающих сделать успешную карьеру
      в мировом криптосообществе.</p>
  </div>
</template>

<script>
export default {
  emits:['close'],
  name: "AppModal"
}
</script>

<style scoped>

</style>