<template>
  <div class="p-5 bg-brand-lightgrey rounded-xl flex flex-col items-center relative">
    <div v-if="sold" class="absolute top-[12px] left-[12px] bg-brand-green py-[10px] px-[18px] rounded-[30px]">
      <p class="uppercase font-semibold text-sm text-white">ЕСТЬ ПОБЕДИТЕЛЬ!</p>
    </div>

    <img src="../assets/img/card.png" alt="Product image of ASER Swift SF314 laptop" />

    <h3 class="font-semibold text-sm pt-3 pb-2">Ноутбук ASER Swift SF314</h3>
    <p class="font-bold text-sm" :class="{ 'text-brand-orange': supersoon, 'text-black': !supersoon, 'pb-4': !supersoon }">112 250 ₽</p>

    <div v-if="available" class="flex items-center justify-between w-full pb-3">
      <p class="text-brand-green font-bold text-sm">Evgen487</p>
      <div>
        <p class="text-brand-orange font-medium text-xs pb-1">80 сек</p>
        <div class="w-[100px] rounded bg-[#C5CDE0] h-[4px] relative">
          <div class="w-[60%] rounded bg-brand-orange absolute h-full"></div>
        </div>
      </div>
    </div>

    <div v-if="soon" class="flex items-center justify-between w-full pb-3">
      <p class="text-brand-orange text-sm">Начало через</p>
      <div>
        <p class="text-brand-orange font-medium text-xs pb-1">2 часа</p>
        <div class="w-[100px] rounded bg-[#C5CDE0] h-[4px] relative">
          <div class="w-[60%] rounded bg-brand-orange absolute h-full"></div>
        </div>
      </div>
    </div>

    <p v-if="supersoon" class="text-[#C5BDBD] pt-2 pb-1 text-sm">Начало через</p>
    <p v-if="failure" class="text-[#474444] pb-3 text-sm">Аукцион не состоялся!</p>

    <div v-if="sold" class="flex items-center pb-4">
      <p class="text-sm"><span class="text-brand-green font-bold">Evgen487</span> стал победителем!</p>
    </div>

    <div v-if="supersoon" class="flex items-center gap-1 text-center justify-center pb-4">
      <div class="w-[58px] bg-white py-2 px-3">
        <p class="font-semibold">00</p>
        <p class="font-semibold">Мин</p>
      </div>
      <div class="w-[58px] bg-white py-2 px-3">
        <p class="font-semibold">00</p>
        <p class="font-semibold">Сек</p>
      </div>
    </div>

    <AppButton
        :outlined="failure"
        :black="failure"
        :filled="filled"
        :green="sold || available"
    >
      {{ buttonText }}
    </AppButton>
  </div>
</template>

<script setup>
const props = defineProps({
  sold: {
    type: Boolean,
    default: false,
  },
  soon: {
    type: Boolean,
    default: false,
  },
  supersoon: {
    type: Boolean,
    default: false,
  },
  available: {
    type: Boolean,
    default: false,
  },
  filled: {
    type: Boolean,
    default: false,
  },
  failure: {
    type: Boolean,
    default: false,
  },
});

// Button text logic
const buttonText = computed(() => {
  if (props.sold) return 'Посмотреть битву';
  if (props.available) return 'Сделать ставку';
  if (props.soon || props.supersoon) return 'Стать участником';
  if (props.failure) return 'Посмотреть битву';
  return '';
});
</script>

<style lang="scss" scoped>
/* Add any necessary styles here */
</style>
