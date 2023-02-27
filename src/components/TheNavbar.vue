<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li>
        <router-link to="/" class="navbar__link">
          Главная
        </router-link>
      </li>
      <li>
        <router-link to="/users" class="navbar__link">
          Пользователи
        </router-link>
      </li>
      <li>
        <router-link to="/about" class="navbar__link">
          О нас
        </router-link>
      </li>
    </ul>
    <div class="navbar__btn-auth">
      <button v-if="token" type="button" @click="logOut" class="btn _danger navbar__link">
        Выход
      </button>
      <router-link v-else to="/login" tag="button" class="btn _accent navbar__link">
        Вход
      </router-link>
    </div>
  </nav>
</template>

<script>
import {mapGetters, useStore} from "vuex";
import {computed} from "vue";
import {useRouter} from "vue-router";

/**
 * @name TheNavbar
 * @description The navbar of the pages
 */
export default {
  name: "TheNavbar",
  setup() {
    const store = useStore()
    const router = useRouter()

    const logOut = () => {
      store.commit('login/CLEAR_TOKEN')
      router.push({ name: 'users' })
    }

    return {
      token: computed(() => store.getters["login/Token"]),
      logOut
    }
  },
}
</script>
<style lang="scss">
@import "@/scss/app.scss";

.navbar {
  display: flex;
  align-items: center;
  column-gap: 2.4rem;
  min-height: 100%;

  &__list {
    display: flex;
    align-items: center;
    column-gap: 1.2rem;
    height: 100%;
  }

  &__link {
    @include text-lg;

    color: var(--text-color);
    transition: color $tr-default;

    @include hover {
      color: var(--accent-color);
    }
  }

  li {

    a {
      display: flex;
      flex-direction: column;

      &::after {
        width: 100%;
        height: 2px;
        background: var(--accent-color);
        transform: scaleX(0);
        transition: transform $tr-default;
        transform-origin: right center;
        content: '';
      }

      &.active::after {
        transform: scaleX(1);
        transform-origin: left center;
      }
    }
  }
}
</style>
