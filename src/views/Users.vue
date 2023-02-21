<template>
  <AppSection tag="section">
    <template #head>
      <h1>Список пользователей</h1>
      <button type="button" class="btn _accent" @click="openModal">Создать</button>
    </template>
    <user-list :items="Users"/>
  </AppSection>
</template>

<script>
import AppSection from "../components/AppSection";
import UserList from "../components/UserList";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "users",
  components: {AppSection, UserList},
  computed: {
    ...mapGetters(['Token', 'Users'])
  },
  async mounted() {
    if (!!this.Token) {
      await this.$store.dispatch('getData', this.Token)
    }
  },
  methods: {
    ...mapMutations(['TOGGLE_MODAL_VISIBLE']),
    openModal() {
      this.TOGGLE_MODAL_VISIBLE(true)
    }
  },
}
</script>
<style lang="scss">
@import "@/scss/app.scss";

.users {
  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;

  &__filter {
    display: block;
    width: 100%;
    border-radius: 2.4rem;
    padding: 2.4rem;
    background-color: var(--element-background);
  }

  &__btn-edit {
    margin: auto;
  }

  &__undefined {
    border-bottom: 1px solid var(--border-color);
  }

  &__not-able {
    text-align: center;

    a {
      color: var(--accent-color);
      text-decoration: underline;
      opacity: 1;
      transition: opacity $tr-default;

      @include hover {
        opacity: 0.8;
      }
    }
  }
}
</style>