<template>
  <label class="app-checkbox">
    <input type="checkbox" :checked="modelValue" @input="$emit('update:modelValue', $event.target.checked)" />
    <span>
      <slot></slot>
    </span>
  </label>
</template>

<script>
/**
 * @name AppCheckbox
 * @description Application checkbox
 */
export default {
  name: "AppCheckbox",
  props: {
    /**
     * model value
     */
    modelValue: {
      type: Boolean,
    },
  }
}
</script>

<style lang="scss">
@import "@/scss/app.scss";

.app-checkbox {
  @include text-body-small;

  position: relative;
  display: block;
  width: fit-content;
  padding-left: 3.2rem;
  border: 0;
  color: var(--text-color);
  font-weight: 500;
  background: transparent;

  > span {
    &::before {
      @include box(1.7rem);

      position: absolute;
      top: 50%;
      left: 2px;
      border-radius: 4px;
      box-shadow: inset 0 0 0 1px var(--border-color);
      transform: translateY(-50%);
      transition: box-shadow 0.3s ease, background 0.3s ease, opacity 0.3s ease;
      content: '';
    }

    &::after {
      @include box(1.7rem);

      position: absolute;
      top: 50%;
      left: 2px;
      background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.4446 3.6665L5.33344 9.77762L2.55566 6.99984' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-size: 100%;
      transform: translateY(-50%);
      transition: clip-path 0.3s ease;
      content: '';
      clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    }
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);

    &:checked + span {
      &::before {
        background: var(--accent-color);
        box-shadow: inset 0 0 0 1px transparent;
      }

      &::after {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
    }
  }

  @include hover {
    cursor: pointer;

    > input:checked + span {
      &::before {
        opacity: 0.8;
      }
    }

    &:active {
      > input + span {
        &::before {
          box-shadow: inset 0 0 0 1px var(--text-secondary-color);
        }
      }

      > input:checked + span {
        &::before {
          opacity: 0.6;
        }
      }
    }
  }
}
</style>