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
import { ref } from "vue";
import PasswordInput from "../UI/PasswordInput.vue";
import EmailInput from "../UI/EmailInput.vue";
import AuthButton from "../UI/AuthButton.vue";

export default {
  components: { PasswordInput, EmailInput, AuthButton },
  name: "App",
  setup() {
    const store = useStore();
    let enteredEmail = ref("");
    let enteredPassword = ref("");
    let isError = ref();
    let isLoading = ref();
    const submitLogin = () => {
      isError.value = false;
      isLoading.value = true;
      try {
        store.dispatch("login", {
          email: enteredEmail.value,
          password: enteredPassword.value,
        });
        isLoading.value = false;
      } catch (err) {
        isError.value = true;
      }
    };

    return { submitLogin, enteredPassword, enteredEmail, isError, isLoading };
  },
};
</script>
