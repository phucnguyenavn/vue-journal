<template>
 <page />
  <div
    class="mt-6"
    :class="{ 'w-3/4 ml-40 ': isOpen, 'w-10/12 mx-auto': !isOpen }"
  >
    <div class="text-md font-bold">Journal - Put In Meaningful Cell</div>
    <div>
      <div class="grid grid-cols-7 text-center">
        <div class="border">Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>

      <div class="border grid grid-cols-7 text-center">
        <div v-for="a in 29" :key="a" class="border">
          
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
import { ref } from "vue";
import Page from './Page.vue';

export default {
  components: { Page },
  props: ["isOpen"],
  setup() {
    const temp = [];
  },
};
</script>

<style></style>
