<template>
  <div class="field">
    <label :for="id"><slot></slot></label>
    <input
        :type="type"
        :id="id"
        :value="modelValue"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script>
/**
 * @name AppField
 * @description Application field [text, mail, password...]
 */
export default {
  name: "AppField",
  props: {
    /**
     * model value
     */
    modelValue: {
      type: String,
      default: ''
    },
    /**
     * field label
     */
    label: {
      type: String,
      default: '',
    },
    /**
     * field type
     */
    type: {
      type: String,
      default: 'text',
    },
    /**
     * field id
     */
    id: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/app.scss";

.field {
  display: flex;
  flex-direction: column;

  label {
    @include text-body;

    width: fit-content;
    color: var(--text-secondary-color);
  }

  input {
    border: 1px solid var(--border-color);
    height: 5.4rem;
    border-radius: 1.2rem;
    padding: 0.8rem 1.6rem;
    transition: border-color $tr-default;

    @include text-body;

    &:focus {
      border-color: var(--accent-color);
    }

    @include placeholder-text {
      color: var(--disabled-color);
    }
  }

  &.error input {
    border-color: var(--error-color);
  }
}
</style>