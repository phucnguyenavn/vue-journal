<template>
  <close-open-nav :isOpen="isOpen">
    <template v-slot:title> Todo </template>

    <layout-to-do
      class="float-left"
      @toggleNewTask="toggleNewTask"
      :isNewTaskOpen="isNewTaskOpen"
    >
      <template v-slot:title>High intensity</template>
      
    </layout-to-do>
    <layout-to-do
      class="float-right"
      @toggleNewTask="toggleNewTask"
      :isNewTaskOpen="isNewTaskOpen"
    >
      <template v-slot:title>Low intensity</template>
    </layout-to-do>
  </close-open-nav>
</template>

<script lang="ts">
import { ref } from "vue";
import CloseOpenNav from "../../UI/common/CloseOpenNav.vue";

import { useRouter } from 'vue-router';
import LayoutToDo from "./LayoutToDo.vue";

export default {
  components: { CloseOpenNav, LayoutToDo },
  props: ["isOpen"],
  setup() {
    const router = useRouter();
    let isNewTaskOpen = ref(false);
    const toggleNewTask = () => {
      isNewTaskOpen.value = !isNewTaskOpen.value;
      if(!isNewTaskOpen.value){
        router.push({name : "todo"});
      }
      console.log("clicking");
      
    };

    return { isNewTaskOpen, toggleNewTask };
  },
};
</script>
