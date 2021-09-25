<template>
  <the-navbar @show-modal="modal = !modal"></the-navbar>

  <div class="container with-nav">
    <router-view></router-view>
    <teleport to="body">
      <app-modal v-if="modal" @close="modal = false"/>
    </teleport>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import AppModal from "./components/AppModal";
export default {
  data() {
    return {
      modal: false
    }
  },
  components: { TheNavbar, AppModal}
}
</script>
