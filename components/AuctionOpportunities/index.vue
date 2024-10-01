<template>
  <div class="flex items-center justify-between">
    <opportunities-card v-for="opportunity in opportunities" :opportunity="opportunity" />
  </div>
</template>

<script setup>

import OpportunitiesCard from "~/components/AuctionOpportunities/opportunitiesCard.vue";

const opportunities = ref([
  {
    title: 'Ноутбуки',
    img: 'assets/img/opportunities/laptop.png',
    color: '#017CC4'
  },
  {
    title: 'Телефоны',
    img: 'assets/img/opportunities/phones.png',
    color: '#01C495'
  },
  {
    title: 'Наушники',
    img: 'assets/img/opportunities/headphones.png',
    color: '#C4016A'
  },
  {
    title: 'Часы',
    img: 'assets/img/opportunities/watch.png',
    color: '#5701C4'
  },
])
</script>

<style lang="scss" scoped>

</style>