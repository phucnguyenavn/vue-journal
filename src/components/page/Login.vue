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
      <div class="text-xss opacity-70 float-right">
        Dont have account ?
        <router-link class="underline" :to="{ name: 'signup' }"
          >Signup</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import PasswordInput from "../UI/auth/PasswordInput.vue";
import EmailInput from "../UI/auth/EmailInput.vue";
import AuthButton from "../UI/auth/AuthButton.vue";
import { actionTypes } from "../../store/store-types";
import { useRouter } from "vue-router";
import { getJournals } from "../../store/db/indexedDB";

export default {
  components: { PasswordInput, EmailInput, AuthButton },
  setup() {
    const store = useStore();
    const router = useRouter();
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
        await store.dispatch(
          actionTypes.FindUserJournalId,
          store.getters.userId
        );
        await store.dispatch(actionTypes.InstructJournalSync, {
          syncId: {
            userId: store.getters.userId,
            id: store.getters.userJournalId,
          },
          journalLength: await getJournals().then((res) => res.length),
        });
        await router.push({ name: "home" });
      } catch (err) {
        isError.value = true;
      }
    };

    return { submitLogin, enteredPassword, enteredEmail, isError, isLoading };
  },
};
</script>
