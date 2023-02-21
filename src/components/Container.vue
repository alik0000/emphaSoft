<template>
  <div class="container" :style="{ maxWidth }">
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

  computed: {
    /**
     * Container size and gutters calculation.
     * @return {string}
     */

    maxWidth() {
      const { container, responsive } = config

      const gutters = parseFloat(
          container.gutters[responsive.viewport.size]
      )
      const size = ['lg', 'md', 'sm'].includes(this.size)
          ? container[this.size]
          : this.size
      let realSize = parseFloat(size)

      if (realSize + '' !== size) {
        realSize = (realSize / 100) * responsive.viewport.width
      }

      const hasGutters = gutters + realSize >= responsive.viewport.width

      if (hasGutters) {
        return `calc(100% - ${gutters / 10}rem)`
      } else {
        return realSize / 10 + 'rem'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.container {
  @include container;

  display: block;
  margin: 0 auto;
  padding: 0;
}
</style>