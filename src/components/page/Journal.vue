<template>
  <page :isPageOpen="isPageOpen" @togglePageOpen="togglePageOpen" />
  <div
    class="mt-6"
    :class="{ 'w-3/4 ml-40 ': isOpen, 'w-10/12 mx-auto': !isOpen }"
  >
    <div class="text-lg font-bold">Journal</div>
    <div class="mt-6">
      <div class="border-b">
        <datepicker
          placeholder="Show Entries"
          class="cursor-pointer outline-none rounded-md bg-gray-50 w-24 "
          v-model="dateSelected"
          minimumView="month"
          inputFormat="MM-yyyy"
          clearable
        />
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vue3-datepicker";
import Page from "./Page.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  components: { Page, Datepicker },
  props: ["isOpen"],
  setup() {
    const store = useStore();
    let isPageOpen = ref(false);
    let dateSelected = ref();
    const togglePageOpen = () => {
      isPageOpen.value = !isPageOpen.value;
    };

    return { isPageOpen, togglePageOpen, dateSelected };
  },
};
</script>
