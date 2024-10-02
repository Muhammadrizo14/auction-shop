<template>
  <div
      class="rounded-xl max-w-[330px] w-full h-[448px] text-white relative flex flex-col justify-end "
      :style="{ backgroundColor: opportunity.color }"
  >
    <img :src="`/_nuxt/${opportunity.img}`" alt="opportunety" class="flex m-auto" :class="opportunity.title === 'Ноутбуки' ? '' :'w-[80%]'" />

    <h2 class="pb-9 pl-9 font-semibold text-2xl uppercase">{{opportunity.title}}</h2>
  </div>
</template>

<script setup>
const props = defineProps(['opportunity'])
</script>

<style lang="scss" scoped>
/* Your styles here */
</style>
