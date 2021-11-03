<template>
  <svg viewBox="0 0 24 24" class="w-4 h-4">
    <path :d="dOne" fill="none" />
    <path :d="dTwo" />
  </svg>
</template>

<script>
export default {
  props: ["dOne", "dTwo"],
};
</script>
