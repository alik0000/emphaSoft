<template>
  <keep-alive>
    <div class="login">
      <form @submit.prevent="login" class="login__form">
        <AppField v-model.trim="username" id="login-user-name">
          Имя пользователя:
        </AppField>

        <AppField type="password" v-model.trim="password" id="login-user-password">
          Пароль:
        </AppField>

        <button type="submit" :disabled="!isAble" class="btn login__btn _accent">
          Вход
        </button>

        <span class="login__error">{{ errorMessage }}</span>
      </form>
    </div>
  </keep-alive>
</template>

<script>
import {computed, ref} from "vue";
import { useStore } from "vuex";
import AppField from "../components/AppField.vue";
import {useRouter} from "vue-router";

export default {
  name: "Login",
  components: {AppField},
  setup() {
    const store = useStore()
    const router = useRouter()
    const username = ref('test_super')
    const password = ref('Nf<U4f<rDbtDxAPn')

    const errorMessage = computed(() => store.getters['login/GetErrorMessage'])

    const login = async () => {
      if (!!errorMessage) {
        store.commit('login/CLEAR_ERROR_MESSAGE')
      }

      await store.dispatch('login/logIn', {
        username: username.value,
        password: password.value
      })

      await router.push({name: 'users'})
    }

    return {
      username,
      password,
      isAble: computed(() => !!username.value && !!password.value),
      login,
      errorMessage,
    }
  },
}
</script>

<style lang="scss">
.login {
  display: block;
  width: 50rem;
  padding: 2.4rem;
  border-radius: 3.2rem;
  margin: 8rem auto 0;
  background-color: var(--element-background);

  &__form {
    .field:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }

  &__btn {
    margin-top: 3.2rem;
  }

  &__error {
    display: inline-block;
    margin-top: 2.4rem;
    color: var(--error-color);

    &:empty {
      display: none;
    }
  }
}
</style>
