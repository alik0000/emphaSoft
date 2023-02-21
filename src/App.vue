<template>
  <div class="app-content">
    <AppHeader></AppHeader>

    <main id="main" class="main">
      <router-view></router-view>
    </main>

    <AppFooter></AppFooter>

    <LoadingIndicator />
    <AppModal>
      <component :is="ModalComponent"></component>
    </AppModal>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import AppModal from "./components/AppModal";
import LoadingIndicator from "./components/LoadingIndicator";
import CreateForm from "./components/CreateForm";

export default {
  components: { AppHeader, AppFooter, AppModal, LoadingIndicator, CreateForm},
  computed: {
    ...mapGetters(['ModalComponent'])
  }
}
</script>

<style lang="scss">
.app-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .main {
    padding-top: 6.4rem;
  }
}
</style>
