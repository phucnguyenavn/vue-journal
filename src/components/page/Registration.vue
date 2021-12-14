<template>
  <div class="flex h-screen-85">
    <form class="m-auto" @submit.prevent="submitRegistration">
      <div class="text-3xl font-bold border-b py-3">
        <div class="w-3/4 mx-auto">Signup</div>
      </div>
      <email-input :isError="isError" v-model:value.trim="enteredEmail" />
      <password-input :isError="isError" v-model:value.trim="enteredPassword" />
      <spinner class="w-full" v-if="isLoading" />
      <auth-button>Sign up</auth-button>
      <div class="text-xss opacity-70 float-right">
        Already have account ?
        <router-link class="underline" :to="{ name: 'login' }"
          >Login</router-link
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import PasswordInput from "../UI/auth/PasswordInput.vue";
import EmailInput from "../UI/auth/EmailInput.vue";
import AuthButton from "../UI/auth/AuthButton.vue";
import { actionTypes } from "../../store/store-types";
import { mailPattern, passwordPattern } from "../../common/patterns";

export default {
  components: { PasswordInput, EmailInput, AuthButton },
  setup() {
    const store = useStore();
    const router = useRouter();
    let enteredEmail = ref("");
    let enteredPassword = ref("");
    let isError = ref(false);
    let isLoading = computed(() => store.getters.isLoading);

    const submitRegistration = async () => {
      validate();
      try {
        await store.dispatch(actionTypes.Registration, {
          email: enteredEmail.value,
          password: enteredPassword.value,
        });
        router.push("login");
      } catch (err) {
        isError.value = true;
      }
    };
    const validate = () => {
      if (
        !mailPattern.test(enteredEmail.value) ||
        !passwordPattern.test(enteredPassword.value)
      ) {
        isError.value = true;
        return;
      }
    };

    return {
      submitRegistration,
      enteredPassword,
      enteredEmail,
      isError,
      isLoading,
    };
  },
};
</script>
