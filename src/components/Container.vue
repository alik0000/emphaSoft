<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
import config from "../config";

/**
 * @name AppContainer
 * @description Application container
 */
export default {
  name: "Container",

  props: {
    /**
     * Container size. Can have: preset values (lg, md, sm),
     * relative values (100%), absolute values (1000).
     * The unit of measure for absolute values is pixels.
     */
    size: {
      type: String,
      default: config.container.default,
    },
  },
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