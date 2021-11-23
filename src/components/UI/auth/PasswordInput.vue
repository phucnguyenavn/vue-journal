<template>
  <div class="py-1">
    <div class="opacity-50 text-xs py-1">Password</div>
    <div class="relative">
      <input
        :type="[isOn ? 'text' : 'password']"
        class="input-auth"
        :class="{ 'bg-red-100 border-red-300': isError }"
        placeholder="Enter password...."
        :value="value"
        @input="$emit('update:value', $event.target.value)"
      />
      <span class="absolute z-10 top-1 right-px" @click="toggle">
        <base-svg v-if="isOn" :d="visibilityOn" />
        <base-svg v-else-if="!isOn" :d="visibilityOff" />
      </span>
    </div>
  </div>
</template>

<script>
import { visibilityOffSvg, visibilityOnSvg } from "../../../common/SvgPath";
import { ref } from "vue";

export default {
  props: ["value", "isError"],
  setup() {
    const isOn = ref(false);
    const toggle = () => {
      isOn.value = !isOn.value;
    };
    const visibilityOn = ref(visibilityOnSvg);
    const visibilityOff = ref(visibilityOffSvg);

    return {
      visibilityOn,
      visibilityOff,
      isOn,
      toggle,
    };
  },
};
</script>
