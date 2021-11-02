<template>
    <div class="py-1">
        <div class="opacity-50 text-xs py-1">Password</div>
        <input 
        type="password"
        class="input-auth"
        :class="{'bg-red-100' : isError}"
        placeholder="Enter password...."
        :value="value"
        @input="$emit('update:value', $event.target.value)"
        />
        <span/>
    </div>
</template>

<script>
export default {
    props : ["value","isError"]
}
</script>

