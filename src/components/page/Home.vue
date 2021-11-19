<template>
    <side-navbar :isOpen="isOpen" :toggle="toggle"/>
    <router-view :isOpen="isOpen"/>
</template>

<script>

import SideNavbar from "../layout/SideNavbar.vue";
import Journal from "./Journal.vue";
import { ref } from "vue";

export default {
  components: { SideNavbar, Journal },
  setup() {
    let isOpen = ref(false);
    const toggle = () => {
      isOpen.value = !isOpen.value;
    };

    return { isOpen, toggle };
  },
};
</script>

<style></style>
