<template>
  <div
    class="fixed top-0 left-0 h-full z-10 bg-gray-100"
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
    <div v-if="isOpen" class="cursor-pointer">
      <div class="underline text-xs " @Click="logout">
        Log out
      </div>
      <div class="m-7 font-medium" @click="toJournal">
        <div class="inline-block"><img :src="journalImg" class="w-3.5" /></div>
        <div class="inline-block">Journal</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { doubleArrowRightSvg, doubleArrowLeftSvg } from "../../common/SvgPath";
import journalSvg from "../../assets/journal.svg";

export default {
  setup() {
    const doubleArrowRight = ref(doubleArrowRightSvg);
    const doubleArrowLeft = ref(doubleArrowLeftSvg);
    const journalImg = ref(journalSvg);
    let isOpen = ref(true);
    let isCurrent = ref(true);
    const toggle = () => {
      isOpen.value = !isOpen.value;
    };
    const logout = () => {};
    const toJournal = () =>{};
    return {
      doubleArrowRight,
      doubleArrowLeft,
      journalImg,
      isOpen,
      isCurrent,
      toggle,
      logout,
      toJournal
    };
  },
};
</script>
