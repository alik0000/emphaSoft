<template>
  <div class="navbar">
    <h2 class="logo" @click="$emit('show-modal')">Crypton Academy</h2>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Главная</router-link>
      </li>
      <li>
        <router-link to="/fav-heroes">Любимые герои</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  emits:['show-modal'],
  name: "TheNavbar"
}
</script>
