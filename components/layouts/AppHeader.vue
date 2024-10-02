<template>
  <header class="container">
    <div class="py-2 flex items-center justify-between border-b-[1.5px] border-b-brand-grey">
      <div class="flex items-center gap-6">
        <a href="/"><img src="../../assets/img/logo.png" width="46px" alt="logo"></a>
        <div class="text-center">
          <div class="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M7.29238 4.4009C7.0581 1.85421 4.24669 0.604635 4.12771 0.553632C4.01648 0.504221 3.89183 0.488434 3.77076 0.508425C0.525136 1.0173 0.0369424 2.80241 0.0173166 2.8766C-0.00938527 2.97998 -0.00513834 3.08834 0.0295827 3.18957C3.90078 14.5401 11.9462 16.644 14.5907 17.336C14.7944 17.3893 14.9624 17.4322 15.09 17.4716C15.2356 17.5166 15.3937 17.5079 15.5328 17.4473C15.6137 17.4125 17.5248 16.5617 17.9922 13.7866C18.0129 13.6655 17.9923 13.5413 17.9333 13.4319C17.8916 13.3554 16.8919 11.5576 14.1197 10.9223C14.0257 10.8996 13.9272 10.8988 13.8328 10.92C13.7383 10.9412 13.6507 10.9838 13.5776 11.0441C12.703 11.75 11.4948 12.5023 10.9735 12.58C7.47883 10.9652 5.52728 7.86679 5.45368 7.2791C5.41075 6.94874 6.21173 5.78841 7.13292 4.84486C7.19082 4.78547 7.23492 4.71529 7.26238 4.63883C7.28985 4.56237 7.30006 4.48132 7.29238 4.4009Z"
                  fill="#1F1F1F"/>
            </svg>
            <a href="tel:+7 (095) 123-45-67" class="font-semibold">+7 (095) 123-45-67</a>
          </div>
          <p class="text-[#909090]">Позвонить мне</p>
        </div>
      </div>
      <ul class="flex items-center gap-6">
        <li>
          <NuxtLink class="font-semibold" to="/" activeClass="text-brand-orange">Главная</NuxtLink>
        </li>
        <li>
          <NuxtLink class="font-semibold" to="#" >Аукционы</NuxtLink>
        </li>
        <li>
          <NuxtLink class="font-semibold" to="/catalog" activeClass="text-brand-orange">Каталог</NuxtLink>
        </li>
        <li>
          <NuxtLink class="font-semibold" to="#">Контакты</NuxtLink>
        </li>
      </ul>
      <div v-if="!logged" class="flex items-center gap-6">
        <button class="border border-black rounded-xl py-3 px-6  w-[148px]">
          Войти
        </button>
        <button  class="text-white bg-brand-orange rounded-xl py-3 px-6  w-[148px]">
          Регистрация
        </button>
      </div>
      <div v-else class="flex items-center gap-3">
        <img src="../../assets/img/userpic.png" alt="userpic">
        <div>
          <h2 class="font-bold text-2lg">Ричард Церр</h2>
          <div class="flex items-center justify-between gap-3">
            <NuxtLink class="underline text-brand-blue"  to="/">Кабинет</NuxtLink>
            <NuxtLink  class="underline text-brand-pink" to="/">Выход</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <ul class="flex gap-8 pt-3 pb-7">
      <li>
        <NuxtLink class="pb-1" to="/" active-class="border-b border-b-brand-orange border-b-[3px]">
          Главная
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="pb-1" to="#">
          Как это работает
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="pb-1" to="#">
          Доставка
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="pb-1" to="#">
          FAQ
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="pb-1" to="#">
          Бонусы
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="pb-1" to="#">
          Секреты успеха
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="pb-1" to="#">
          Помощь
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="pb-1" to="#">
          О нас
        </NuxtLink>
      </li>
    </ul>
  </header>
</template>

<script setup>
const logged = ref(false)
</script>

<style lang="scss" scoped>
a {
  font-family: "OpenSans SemiBold", sans-serif;
}
</style>