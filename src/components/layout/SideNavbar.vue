<template>
  <div
    class="fixed top-0 left-0 h-screen z-10 bg-gray-100"
    :class="{ 'w-32': isOpen, 'w-0': !isOpen }"
  >
    <base-svg
      v-if="isOpen"
      :d="doubleArrowLeft"
      class="float-right cursor-pointer"
      @click="toggle"
    />
    <base-svg
      v-else
      :d="doubleArrowRight"
      class="cursor-pointer"
      @click="toggle"
    />
    <div v-if="isOpen" class="border shadow-xl h-screen">
      <div class="underline text-xs cursor-pointer w-12" @Click="logout">
        Log out
      </div>
      <div class="mt-10 side-nav-bar" @click="toJournal">
        <div class="mx-4">
          <div class="inline-block">
            <img :src="journalImg" class="w-3.5" />
          </div>
          <div class="inline-block">&ensp;Journal</div>
        </div>
      </div>

      <div class="mt-2 side-nav-bar" @click="toToDo">
        <div class="mx-4">
          <div class="inline-block"><img :src="todoImg" class="w-3.5" /></div>
          <div class="inline-block">&ensp;ToDo</div>
        </div>
      </div>

      <div class="mt-2 side-nav-bar">
        <div class="inline-block opacity-50 px-0.5" @click="toggleSubPomodoro">
          <div v-if="!isSubPomodoroOpen" class="inline-block">+</div>
          <div class="inline-block text-xs" v-else>&mdash;</div>
        </div>

        <div class="inline-block" @click="toPomodoro">
          <div class="inline-block">
            <img :src="tomatoImg" class="w-3.5" />
          </div>
          <div class="inline-block">&ensp;Pomodoro</div>
        </div>
        <div class="mx-4 text-xs" v-if="isSubPomodoroOpen">
          <div class="inline-block border-b">&mdash;&ensp;Settings</div>
          <div class="inline-block border-b">&mdash;&ensp;History</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { doubleArrowRightSvg, doubleArrowLeftSvg } from "../../common/SvgPath";
import journalSvg from "../../assets/journal.svg";
import todo from "../../assets/todo.png";
import tomato from "../../assets/tomato.svg";
import { $cookies } from "../../plugin/cookies";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { actionTypes, mutationTypes } from "../../store/store-types";

export default {
  props: ["isOpen", "toggle"],
  setup() {
    const store = useStore();
    const router = useRouter();
    const doubleArrowRight = ref(doubleArrowRightSvg);
    const doubleArrowLeft = ref(doubleArrowLeftSvg);
    const journalImg = ref(journalSvg);
    const todoImg = ref(todo);
    const tomatoImg = ref(tomato);
    let isCurrent = ref(true);
    let isSubPomodoroOpen = ref(false);

    const toJournal = async () => {
      await router.push({ name: "journal" });
    };

    const toToDo = async () => {
      await router.push({ name: "todo" });
    };

    const toggleSubPomodoro = () => {
      isSubPomodoroOpen.value = !isSubPomodoroOpen.value;
      console.log("clicking");
    };

    const logout = async () => {
      await store.dispatch(actionTypes.PushJournal, {
        syncId: {
          userId: store.getters.userId,
          id: store.getters.userJournalId,
        },
        journals: store.getters.modifiedJournals.values(),
      });
      await $cookies.remove("token");
      localStorage.clear();
      store.commit(mutationTypes.SetActionJournalSync, "");
      await router.push({ name: "login" });
    };

    return {
      doubleArrowRight,
      doubleArrowLeft,
      journalImg,
      isCurrent,
      todoImg,
      tomatoImg,
      isSubPomodoroOpen,
      logout,
      toJournal,
      toToDo,
      toggleSubPomodoro,
    };
  },
};
</script>
