<template>
  <router-view />
</template>

<script>
import { getDB } from "./store/db/indexedDB";

export default {
  setup() {
    getDB();
  },
};
</script>
