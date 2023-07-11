<template>
  <form class="user-form fab-background" @submit.prevent="submitForm">
    <div class="user-form__fields">
      <AppField
          v-model="username"
          id="new-user-name"
          placeholder="Введите ваше имя"
          maxLength="150"
      >
        Ник
      </AppField>
      <AppField
          v-model="password"
          type="password"
          id="new-user-password"
          placeholder="Введите ваш пароль"
          maxLength="128"
      >
        Пароль
      </AppField>
      <AppField
          v-model="last_name"
          id="new-user-last-name"
          placeholder="Введите ваше фамилия"
          maxLength="150"
      >
        Фамилия
      </AppField>
      <AppField
          v-model="first_name"
          id="new-user-first-name"
          placeholder="Введите ваше имя"
          maxLength="150"
      >
        Имя
      </AppField>
    </div>
    <AppCheckbox v-model="is_active">активный</AppCheckbox>
    <div class="user-form__controls">
      <button type="submit" class="btn _accent">Создать</button>
      <button type="button" class="btn _danger" @click="closeForm">Закрыть</button>
    </div>
  </form>
</template>

<script>
import {reactive, toRefs} from "vue";
import {useStore} from "vuex";
import AppField from "./AppField";
import AppCheckbox from "./AppCheckbox";

/**
 * @name CreateForm
 * @description Form creation user
 */
export default {
  name: "CreateForm",
  components: {AppField, AppCheckbox},
  setup() {
    const store = useStore()
    const form = reactive({
      username: '',
      password: '',
      'first_name': '',
      'last_name': '',
      'is_active': false
    })

    const toggleModalVisible = (flag) => {
      store.commit('modal/TOGGLE_MODAL_VISIBLE', flag)
    }

    const submitForm = async() => {
      await store.dispatch('user/createUser', {...form})
    }

    return {
      ...toRefs(form),
      closeForm: () => toggleModalVisible(false),
      submitForm,
    }
  },
}
</script>
