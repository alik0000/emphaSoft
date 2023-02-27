<template>
  <keep-alive>
    <div class="login">
      <form @submit.prevent="login" class="login__form">
        <div :class="['field', {error}]">
          <label for="userName">
            Имя пользователя:
          </label>
          <input v-model.trim="username" type="text" name="userName">
        </div>

        <div :class="['field', {error}]">
          <label for="password">
            Пароль:
          </label>
          <input v-model.trim="password" type="password" name="password">
        </div>


        <button type="submit" :disabled="!isAble" class="btn login__btn _accent">
          Вход
        </button>

        <span v-show="error" class="login__error">Не правильный логин или пароль, пожалуйста, попробуйте ещё раз!</span>
      </form>
    </div>
  </keep-alive>
</template>

<script>
import { reactive, computed, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  setup() {
    const store = useStore()
    const router = useRouter()
    const data = reactive({
      username: '',
      password: '',
      error: '',
    })

    const login = () => {
      try {
        store.dispatch('login/logIn', {
          username: data.username,
          password: data.password
        })

        router.push({ name: 'users' })
      } catch(err) {
        data.error = err.response.data.non_field_errors[0]
      }
    }

    return {
      ...toRefs(data),
      isAble: computed(() => !!data.username && !!data.password),
      login,
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
  }
}
</style>