<template>
  <div
    class="fixed top-0 left-0 h-screen  z-10 bg-gray-100"
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
import { $cookies } from "../../plugin/cookies";
import { useRouter } from "vue-router";

export default {
    props : ["isOpen","toggle"],
  setup() {
    const router = useRouter();
    const doubleArrowRight = ref(doubleArrowRightSvg);
    const doubleArrowLeft = ref(doubleArrowLeftSvg);
    const journalImg = ref(journalSvg);
    
    let isCurrent = ref(true);

    const logout = async () => {
      await $cookies.remove("token");
      await router.push({name : "login"});
    };
    const toJournal = () =>{};
    return {
      doubleArrowRight,
      doubleArrowLeft,
      journalImg,
      isCurrent,
      logout,
      toJournal
    };
  },
};
</script>
