<template>
  <component :is="tag" :class="['app-section', {className}]">
    <Container>
      <div
          v-if="$slots.head"
          class="app-section__head"
      >
        <slot name="head" />
      </div>

      <div class="app-section__content">
        <slot/>
      </div>

    </Container>
  </component>
</template>

<script>
import Container from "./Container";

/**
 * @name AppSection
 * @description Application section
 */
export default {
  name: "AppSection",
  components: { Container },

  props: {
    /**
     * Element tag.
     */
    tag: {
      type: String,
      default: 'div',
    },

    /**
     * Element class.
     */
    className: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
@import "@/scss/app.scss";

.app-section {
  margin-bottom: 12rem;

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 2.4rem;
    margin-bottom: 3.2rem;

    > * {
      margin: 0;
    }
  }
}
</style>