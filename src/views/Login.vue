<template>
  <keep-alive>
    <div class="login">
      <form @submit.prevent="login" class="login__form">
        <div :class="['field', {error}]">
          <label for="userName">
            Имя пользователя:
          </label>
          <input v-model.trim="userName" type="text" name="userName">
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
export default {
  name: "Login",
  data () {
    return {
      userName: '',
      password: '',
      error: null
    }
  },
  computed: {
    isAble() {
      return !!this.userName && !!this.password
    }
  },
  methods: {
    login() {
      this.$store
          .dispatch('login', {
            username: this.userName,
            password: this.password
          })
          .then(() => {
            this.$router.push({ name: 'users' })
          })
          .catch(err => {
            this.error = err.response.data.non_field_errors[0]
          })
    }
  }
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