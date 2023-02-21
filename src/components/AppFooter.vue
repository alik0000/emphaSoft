<template>
  <footer id="footer" class="footer">
    <Container>
      <div class="footer__inner">
        <h1>Footer</h1>
      </div>
    </Container>
  </footer>
</template>

<script>
import Container from "./Container";

/**
 * @name AppFooter
 * @description Application footer of the pages
 */
export default {
  name: "AppFooter",
  components: { Container }
}
</script>

<style lang="scss" scoped>
.footer {
  border-radius: 4rem 4rem 0 0;
  overflow: hidden;
  background-color: var(--element-background);
}
</style>