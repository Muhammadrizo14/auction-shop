<template>
  <div>
    <div class="flex items-center gap-2 container pb-4">
      <NuxtLink class="text-sm text-brand-grey" to="/">Главная</NuxtLink>
      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9L5 5L1 1" stroke="#C5BDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <NuxtLink class="text-sm text-brand-grey" to="/">Ноутбуки</NuxtLink>
      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9L5 5L1 1" stroke="#C5BDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <p class="text-sm font-bold text-brand-orange">Ноутбук ASER Swift SF314</p>
    </div>
    <div class="bg-brand-lightgrey">
      <div class="container py-10 flex gap-6 ">
        <client-only>
          <div class="flex items-stretch w-full h-full max-h-[600px] gap-3">
            <div class="w-[100%] max-w-[210px] flex flex-col gap-2">
              <a v-for="(thumb, index) in thumbs" :key="index" @click="goToSlide(index)"
                 class="rounded-xl flex-1 cursor-pointer flex">
                <img :src="thumb.src" alt="image" class="rounded-xl flex-1"/>
              </a>
            </div>
            <div class="w-[100%] max-w-[589px]">
              <swiper
                  ref="mainSwiper"
                  :spaceBetween="10"
                  :navigation="true"
                  :modules="[Navigation, Thumbs]"
                  class="mySwiper2"
                  @swiper="onSwiper"
              >
                <swiper-slide v-for="(slide, index) in slides" :key="index">
                  <a :href="slide.src" data-fancybox="gallery">
                    <img :src="slide.src" alt="image" class="rounded-xl cursor-pointer h-[100%]">
                  </a>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </client-only>
        <div class="flex flex-col gap-5 min-w-[553px] hidden">
          <div class="bg-white  rounded-xl py-6 px-7">
            <h2 class="pb-2 font-bold text-2xl">Аукцион</h2>
            <div class="w-full h-px bg-brand-grey"></div>
            <div class="flex items-center justify-between pt-3">
              <p class="font-bold text-xl">45 250 ₽ </p>
              <p class="text-lg">Начальная цена</p>
            </div>
            <div class="flex items-center justify-between pt-3">
              <p class="font-bold text-xl">4 850 ₽ </p>
              <p class="text-lg">Цена регистрации</p>
            </div>
            <div class="flex items-center justify-between pt-3 pb-6">
              <p class="font-bold text-xl">450 ₽ </p>
              <p class="text-lg">Цена ставки</p>
            </div>
            <AppButton green filled>Стать участником</AppButton>
          </div>
          <div class="bg-white  rounded-xl py-6 px-7">
            <h2 class="pb-2 font-bold text-2xl">Интернет магазин</h2>
            <div class="w-full h-px bg-brand-grey"></div>
            <div class="flex items-center justify-between pt-3 pb-6">
              <p class="font-bold text-xl">45 250 ₽ </p>
              <p class="text-lg">Цена товара</p>
            </div>
            <AppButton green>Купить</AppButton>
          </div>
        </div>

        <div class="min-w-[553px] bg-white  rounded-xl py-6 px-7 flex flex-col justify-between hidden">
          <div>
            <h2 class="text-brand-green font-bold text-2xl pb-6 uppercase">Аукцион</h2>
            <div class="flex flex-col gap-8">
              <div class="border rounded-tl-none rounded-[20px] border-[#E1E5ED] py-2 px-3"
                   style="background: linear-gradient(to bottom, #fff 0%, #EDF0F7 98%);">
                <p><span class="font-bold">Igor294</span> в <span class="font-bold">14:35</span> делает ставку</p>
                <div class="flex items-end justify-between w-full pb-3">
                  <h2 class="text-brand-orange text-3xl pt-2">45 250 ₽ </h2>
                  <div>
                    <p class="text-brand-orange font-medium text-xs pb-1">80 сек</p>
                    <div class="w-[100px] rounded bg-[#C5CDE0] h-[4px] relative">
                      <div class="w-[60%]  rounded bg-brand-orange absolute h-full">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border rounded-tl-none rounded-[20px] border-[#E1E5ED] py-2 px-3"
                   style="background: linear-gradient(to bottom, #fff 0%, #EDF0F7 98%);">
                <p><span class="font-bold">Igor294</span> в <span class="font-bold">14:35</span> делает ставку</p>
                <div class="flex items-end justify-between w-full pb-3">
                  <h2 class="text-brand-orange text-3xl pt-2">45 250 ₽ </h2>

                </div>
              </div>
            </div>
          </div>

          <div>
            <AppButton green filled>Выкупить товар</AppButton>
            <div class="flex justify-between items-center pt-6">
              <p class="font-bold text-2xl">450 ₽ </p>
              <AppButton filled class="max-w-[266px]">Сделать ставку</AppButton>
            </div>
          </div>

        </div>
        <div class="min-w-[553px] bg-white  rounded-xl py-6 px-7 flex flex-col justify-between">
          <div>
            <h2 class="text-brand-green font-bold text-2xl pb-6 uppercase">Аукцион</h2>
            <div class="flex flex-col gap-8">
              <div class="border rounded-tl-none rounded-[20px] border-[#E1E5ED] py-2 px-3"
                   style="background: linear-gradient(to bottom, #fff 0%, #EDF0F7 98%);">
                <p><span class="font-bold">Igor294</span> в <span class="font-bold">14:35</span> делает ставку</p>
                <div class="flex items-end justify-between w-full pb-3">
                  <h2 class="text-brand-orange text-3xl pt-2">45 250 ₽ </h2>
                  <div>
                    <p class="text-brand-orange font-medium text-xs pb-1">80 сек</p>
                    <div class="w-[100px] rounded bg-[#C5CDE0] h-[4px] relative">
                      <div class="w-[60%]  rounded bg-brand-orange absolute h-full">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="pb-6">
                  <p class="text-brand-orange font-medium text-xs pb-1">180 сек</p>
                  <div class="w-full rounded bg-[#C5CDE0] h-[4px] relative">
                    <div class="w-[60%]  rounded bg-brand-orange absolute h-full">
                    </div>
                  </div>
                </div>
                <AppButton filled class="max-w-[236px]">Сделать ставку</AppButton>
              </div>
              <div class="border rounded-tl-none rounded-[20px] border-[#E1E5ED] py-2 px-3"
                   style="background: linear-gradient(to bottom, #fff 0%, #EDF0F7 98%);">
                <p><span class="font-bold">Igor294</span> в <span class="font-bold">14:35</span> делает ставку</p>
                <div class="flex items-end justify-between w-full pb-3">
                  <h2 class="text-brand-orange text-3xl pt-2">45 250 ₽ </h2>

                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-between items-center pt-6">
            <p class="font-bold text-2xl">450 ₽ </p>
            <AppButton green filled class="max-w-[266px]">Выкупить товар</AppButton>
          </div>

        </div>

      </div>
    </div>
    <div class="container pt-10 pb-16">
      <div class="flex items-center gap-4 pb-6">
        <button class="bg-brand-green text-white w-[216px] py-3 text-base font-normal font font-['OpenSans']">Описание
        </button>
        <button class="bg-brand-lightgrey text-black w-[216px] py-3 text-base font-normal font font-['OpenSans']">
          Характериститки
        </button>
      </div>
      <h2 class="text-brand-orange font-bold text-2xl pb-3">14" Ноутбук HUAWEI MateBook D 14 MDF-X серый</h2>
      <p class="text-xl">1920x1200, IPS, Intel Core i3-1215U, ядра: 2 + 4 х 1.2 ГГц + 0.9 ГГц, RAM 8 ГБ, SSD 256 ГБ,
        Intel UHD Graphics, без ОС</p>
      <p class="max-w-[981px] font-xl pt-6">Ноутбук HUAWEI MateBook D 14 MDF-X в алюминиевом корпусе серого цвета
        оборудован сканером, который аутентифицирует личность по отпечатку пальца. Веб-камера с разрешением матрицы 1 Мп
        обладает защитной шторкой, повышающей конфиденциальность пользователя. HDMI-разъем делает возможным подключение
        дополнительного монитора. Модуль TPM служит для шифрования личной информации и отражения вредоносных атак.</p>
    </div>
  </div>
</template>

<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Fancybox} from '@fancyapps/ui';
import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const mainSwiper = ref(null);
const slides = [
  {src: '/img/product1.jpg'},
  {src: '/img/product2.jpg'},
  {src: '/img/product3.jpg'},
];
const thumbs = [
  {src: '/img/product1.jpg'},
  {src: '/img/product2.jpg'},
  {src: '/img/product3.jpg'},
];
const onSwiper = (swiper) => {
  mainSwiper.value = swiper;
};
const goToSlide = (index) => {
  if (mainSwiper.value) {
    mainSwiper.value.slideTo(index);
  }
};
onMounted(() => {
  Fancybox.bind("[data-fancybox='gallery']", {
    afterClose: () => {
      if (mainSwiper.value) {
        mainSwiper.value.update();
      }
    },
  });
});
</script>

<style lang="scss" scoped>
.mySwiper2 {
  height: 100%;
}
</style>