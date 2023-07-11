<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
/**
 * @name AppContainer
 * @description Application container
 */
export default {
  name: "Container",
}
</script>

<style lang="scss">
@import "@/scss/app.scss";

.container {
  @include container;

  display: block;
  margin: 0 auto;
  padding: 0;
}
</style>
