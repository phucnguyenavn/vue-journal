<template>
  <close-open-nav :isOpen="isOpen">
    <template v-slot:title> Todo </template>
    <draggable v-model="ar" item-key="id">
      <template #item="{ element }">
        <div>{{ element.name }}</div>
      </template>
    </draggable>
  </close-open-nav>
</template>

<script>
import draggable from "vuedraggable";

import { ref } from "vue";
import CloseOpenNav from "../UI/common/CloseOpenNav.vue";

export default {
  components: { draggable, CloseOpenNav },
  props: ["isOpen"],
  setup() {
    let ar = ref([
      { id: 1, name: "love" },
      { id: 2, name: "like" },
      { id: 3, name: "lo" },
    ]);

    return { ar };
  },
};
</script>

<style></style>
