<template>
  <div class="py-2">
    <div class="opacity-50 text-xs py-1">Email</div>
    <input
      type="search"
      class="input-auth"
      :class="{ 'bg-red-100 border-red-300': isError }"
      placeholder="Enter email address..."
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["value", "isError"],
};
</script>
