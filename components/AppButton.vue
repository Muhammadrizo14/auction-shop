<template>
  <button
      class="rounded-xl py-3 px-6 w-full"
      :class="buttonClasses"
  >
    <slot/>
  </button>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
  outlined: {
    type: Boolean,
    default: false,
  },
  green: {
    type: Boolean,
    default: false,
  },
  black: {
    type: Boolean,
    default: false,
  },
  filled: {
    type: Boolean,
    default: false,
  },

});

const buttonClasses = computed(() => {
  let baseClasses = 'border rounded-xl py-3 px-6 w-full';


  if (props.filled) {
    return `${baseClasses} bg-brand-${props.green ? 'green' : 'orange'} text-brand-green text-white`;
  }

  if (props.green) {
    return `${baseClasses} border-brand-green text-brand-green hover:bg-brand-green hover:text-white`;
  } if (props.black) {
    return `${baseClasses} border-brand-black text-brand-black`;
  } else {
    return `${baseClasses} border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white hover:border-[#A7501B]`;
  }

});
</script>
