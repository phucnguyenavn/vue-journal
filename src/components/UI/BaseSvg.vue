<template>
  <svg viewBox="0 0 24 24" class="w-5 h-5">
    <path :d="d"/>
  </svg>
</template>

<script>
export default {
  props: ["d"]
};
</script>
