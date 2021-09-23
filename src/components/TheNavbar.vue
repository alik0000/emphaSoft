<template>
  <div class="navbar">
    <h2>Crypton Academy</h2>
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
  name: "TheNavbar"
}
</script>
