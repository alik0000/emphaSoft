<template>
  <transition name="loading-indicator-transition">
    <div v-if="Loading" class="loading-indicator">
      <div class="loading-indicator__block">
        <Spinner class="loading-indicator__spinner" />

        <div class="loading-indicator__text">
          Загрузка...
        </div>
      </div>

    </div>
  </transition>
</template>

<script>
import {useStore} from 'vuex'
import Spinner from "./Spinner";
import {computed} from "vue";

export default {
  name: "LoadingIndicator",
  components: {Spinner},

  /**
   * Loading indicator visibility.
   * @return {any}
   */
  setup() {
    return {
      Loading: computed(() => useStore().getters['modal/Loading'])
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/app.scss";

.loading-indicator {
  @include box(100%);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--overlay-color);
  opacity: 1;
  user-select: none;

  &__block {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1.8rem;
    width: fit-content;
    padding: 2rem 3.2rem;
    border-radius: 1rem;
    color: var(--text-black-color);
    background-color: var(--app-background);
    box-shadow: 0 2px 2px rgb(0 0 0 / 25%);
  }

  &__spinner {
    @include box(2rem);

    flex-shrink: 0;
    color: var(--accent-color);
  }

  &__text {
    @include text-body-small;
  }
}

.loading-indicator-transition {
  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active {
    transition-delay: 0.15s;
  }

  &-leave-active {
    transition: opacity 0.35s ease;
  }
}
</style>