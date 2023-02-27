<template>
  <AppSection tag="section">
    <template #head>
      <h1>Список пользователей</h1>
      <button v-if="token" type="button" class="btn _accent" @click="openModal">Создать</button>
    </template>
    <user-list :items="userItems"/>
  </AppSection>
</template>

<script>
import { onMounted, computed } from "vue";
import {useStore} from "vuex";
import AppSection from "../components/AppSection";
import UserList from "../components/UserList";

export default {
  name: "Users",
  components: {AppSection, UserList},
  setup() {
    const store = useStore()
    const token = computed(() => store.getters["login/Token"])

    const changeLoading = (flag) => {
      store.commit('modal/CHANGE_LOADING', flag)
    }

    onMounted(async () => {
      if (!!token.value) {
        changeLoading(true)
        await store.dispatch('user/getData', token.value)
        changeLoading(false)
      }
    })

    return {
      token,
      userItems: computed(() => store.getters["user/UserItems"]),
      openModal: () => store.commit('modal/TOGGLE_MODAL_VISIBLE', true),
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