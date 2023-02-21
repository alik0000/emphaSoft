<template>
  <header class="header">
    <Container>
      <div class="header__items">
        <router-link
            to="/"
            class="header__logo"
        >
          <img src="@/static/image/empha_soft-logo.png" alt="company logo">
        </router-link>
        <the-navbar></the-navbar>
      </div>
    </Container>
  </header>
</template>

<script>
import Container from "./Container";
import TheNavbar from "./TheNavbar";

/**
 * @name AppHeader
 * @description Application header of the pages
 */
export default {
  name: "AppHeader",
  components: { Container, TheNavbar },
}
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 8rem;
  border-radius: 0 0 4rem 4rem;
  overflow: hidden;
  background-color: var(--element-background);

  &__items {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: block;
    width: 20rem;
    height: auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>