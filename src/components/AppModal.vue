<template>
  <div v-show="ModalVisible" class="modal">
    <div class="modal__overlay" @click="handlerClose"></div>
    <div class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

/**
 * @name AppModal
 * @description Application modal
 */
export default {
  name: "AppModal",
  computed: {
    ...mapGetters(['ModalVisible'])
  },
  methods: {
    ...mapMutations(['TOGGLE_MODAL_VISIBLE']),
    handlerClose() {
      this.TOGGLE_MODAL_VISIBLE(false)
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/app.scss';

.modal {
  @include box(100%);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;

  &__overlay {
    @include box(100%);

    position: absolute;
    top: 0;
    left: 0;
    background: var(--overlay-color);
  }

  &__content {
    position: relative;
    z-index: 2;
    display: block;
    pointer-events: auto;
  }
}
</style>