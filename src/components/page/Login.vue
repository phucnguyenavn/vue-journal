<template>
  <div class="flex h-screen-85">
    <form class="m-auto" @submit.prevent="submitLogin">
      <div class="text-3xl font-bold border-b py-3">
        <div class="w-7/12 mx-auto">Login</div>
      </div>
      <email-input :isError="isError" v-model:value.trim="enteredEmail" />

      <password-input :isError="isError" v-model:value.trim="enteredPassword" />
      <spinner class="w-full" v-if="isLoading" />
      <auth-button>Log in</auth-button>
    </form>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import PasswordInput from "../UI/PasswordInput.vue";
import EmailInput from "../UI/EmailInput.vue";
import AuthButton from "../UI/AuthButton.vue";
import { actionTypes } from "../../store/store-types";

export default {
  components: { PasswordInput, EmailInput, AuthButton },
  name: "App",
  setup() {
    const store = useStore();
    let enteredEmail = ref("");
    let enteredPassword = ref("");
    let isError = ref(false);
    let isLoading = computed(() => store.getters.isLoading);
    const submitLogin = async () => {
      try {
        await store.dispatch(actionTypes.Login, {
          email: enteredEmail.value,
          password: enteredPassword.value,
        });
      } catch (err) {
        isError.value = true;
      }
    };

    return { submitLogin, enteredPassword, enteredEmail, isError, isLoading };
  },
};
</script>
