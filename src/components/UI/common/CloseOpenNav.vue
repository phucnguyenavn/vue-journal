<template>
  <div
    class="mt-6"
    :class="{ 'w-3/4 ml-40 ': isOpen, 'w-10/12 mx-auto': !isOpen }"
  >
    <div class="text-lg font-bold">
      <slot name="title" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: ["isOpen"],
  setup() {},
};
</script>
