<template>
  <div class="container">
    <div class="pt-4 pb-16">
      <auction-opportunities/>
    </div>
    <div class="pb-10">
      <div class="flex justify-between items-center ">
        <multiselect v-model="filterValue" :options="filter" :searchable="false" :close-on-select="true" :show-labels="false"
                     placeholder="Выбрать."></multiselect>
        <multiselect v-model="sortValue" :options="type" :searchable="false" :close-on-select="true" :show-labels="false"
                     placeholder="Выбратью"></multiselect>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-x-6 gap-y-8 pb-16">
      <card avaliable filled/>
      <card soon filled/>
      <card soon filled/>
      <card soon filled/>
      <card sold filled/>
      <card failure/>
      <card soon filled/>
      <card soon filled/>
    </div>
    <AppButton outlined black class="w-fit m-auto flex px-11 mb-11">Загрузить еще</AppButton>
  </div>
</template>

<script setup>
import Multiselect from 'vue-multiselect'

const filter = ref(['Ноутбуки', 'Телефоны', 'Наушники', 'Часы',])
const filterValue = ref(filter.value[0])

const type = ref(['По умолчанию', 'Сначала Дороже', 'Сначала Дешевле',])
const sortValue = ref(type.value[0])
</script>
<style lang="scss" scoped>

</style>