<template>
  <transition name="loading-indicator-transition">
    <div v-if="isActive" class="loading-indicator">
      <Spinner class="loading-indicator__spinner" />

      <div class="loading-indicator__text">
        {{ $serverConfig.lang['base.loading'] || 'Loading' }}...
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "LoadingIndicator"
}
</script>

<style scoped>

</style>