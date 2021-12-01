<template>
  <close-open-nav :isOpen="isOpen">
    <template v-slot:title> Todo </template>
    <div class="text-xs opacity-60 mt-4 hover:text-red-600">
      <button
        @click.prevent="toggleNewTask"
        
      >
        + New
      </button>
    </div>
    <new-task />
  </close-open-nav>
</template>

<script lang="ts">
import { ref } from "vue";
import CloseOpenNav from "../../UI/common/CloseOpenNav.vue";

import { useRouter } from "vue-router";
import NewTask from "./NewTask.vue";

export default {
  components: { CloseOpenNav, NewTask },
  props: ["isOpen"],
  setup() {
    const router = useRouter();
    let isNewTaskOpen = ref(false);
    const toggleNewTask = () => {
      isNewTaskOpen.value = !isNewTaskOpen.value;
      /* if(!isNewTaskOpen.value){
        router.push({name : "todo"});
      }
      console.log("clicking"); */
    };

    return { isNewTaskOpen, toggleNewTask };
  },
};
</script>
