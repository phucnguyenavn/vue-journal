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
        <auth-svg v-if="isOn" :dOne="visibilityOnOne" :dTwo="visibilityOnTwo" />
        <auth-svg
          v-else-if="!isOn"
          :dOne="visibilityOffOne"
          :dTwo="visibilityOffTwo"
        />
      </span>
    </div>
  </div>
</template>

<script>
import { visibilityOffSvg, visibilityOnSvg } from "../../../common/SvgPath";
import { ref } from "vue";
import AuthSvg from "./AuthSvg.vue";

export default {
  components: { AuthSvg },
  props: ["value", "isError"],
  setup() {
    const isOn = ref(false);
    const toggle = () => {
      isOn.value = !isOn.value;
    };
    const visibilityOnOne = ref(visibilityOnSvg[0]);
    const visibilityOnTwo = ref(visibilityOnSvg[1]);
    const visibilityOffOne = ref(visibilityOffSvg[0]);
    const visibilityOffTwo = ref(visibilityOffSvg[1]);
    return {
      visibilityOnOne,
      visibilityOnTwo,
      visibilityOffOne,
      visibilityOffTwo,
      isOn,
      toggle,
    };
  },
};
</script>
