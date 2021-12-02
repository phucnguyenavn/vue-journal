<template>
  <close-open-nav :isOpen="isOpen">
    <template v-slot:title> Todo </template>
    <div class="text-xs opacity-60 mt-4 hover:text-red-600 w-10">
      <button
        @click.prevent="toggleNewTask"     
      >
        + New
      </button>
    </div>
    <new-task v-if="isNewTaskOpen"/>
    <task v-for="task in tasks" :key="task" :task="task"/>
  </close-open-nav>
</template>

<script lang="ts">
import { ref } from "vue";
import CloseOpenNav from "../../UI/common/CloseOpenNav.vue";
import { useRouter } from "vue-router";
import NewTask from "./NewTask.vue";
import Task from './Task.vue';
import { getToDos } from "../../../store/db/indexedDB";

export default {
  components: { CloseOpenNav, NewTask, Task },
  props: ["isOpen"],
  setup() {
    const router = useRouter();
    let tasks = ref();
    let isNewTaskOpen = ref(false);
    const toggleNewTask = () => {
      isNewTaskOpen.value = !isNewTaskOpen.value;
    };

    
    let getTasks = async () =>{
      await getToDos().then(res => tasks.value= res);      
    }

    getTasks();
    return { isNewTaskOpen, toggleNewTask, tasks };
  },
};
</script>
