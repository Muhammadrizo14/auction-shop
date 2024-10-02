<template>
  <div class="pt-6">
    <div class="bg-brand-lightgrey py-10">
      <div class="container flex items-center justify-between gap-6">
        <div class="flex flex-col justify-between p-5 bg-white rounded-[20px] h-[290px] max-w-[332px] relative">
          <img src="../assets/img/home/dashboard.png" alt="dashboard" class="absolute w-[132px] bottom-[45px] right-[30px]">
          <div>
            <h2 class="pb-2 font-semibold text-2xl">Личный кабинет</h2>
            <p class="text-brand-black text-sm">Управляйте учетной записью, отслеживайте заказы и аукционы</p>
          </div>
          <div class="flex gap-5 items-center">
            <button class="bg-brand-lightgrey text-brand-black py-2 px-4 rounded-3xl">
              Войти
            </button>
            <NuxtLink to="/" class="border-b border-b-brand-black">
              Аукционы
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col justify-between p-5 bg-white rounded-[20px] h-[290px] max-w-[332px] relative">
          <img src="../assets/img/home/bonus.png" alt="dashboard" class="absolute w-[132px] bottom-[45px] right-[30px]">

          <div>
            <h2 class="pb-2 font-semibold text-2xl">Бонусный счет</h2>
            <p class="text-brand-black text-sm">1 Бонус = 1 Рубль. Пополняй свой баланс бонусами и используй их для участия  в аукционах</p>
          </div>
          <div class="flex gap-5 items-center">
            <button class="bg-brand-lightgrey text-brand-black py-2 px-4 rounded-3xl">
              Пополнить баланс
            </button>
          </div>
        </div>
        <div class="flex flex-col justify-between p-5 bg-white rounded-[20px] h-[290px] max-w-[332px] relative">
          <img src="../assets/img/home/price.png" alt="dashboard" class="absolute w-[186px] bottom-[45px] right-[20px]">

          <div class="z-10">
            <h2 class="pb-2 font-semibold text-2xl">Молоток</h2>
            <p class="text-brand-black text-sm">Покупайте товары аукционе по экстремально выгодным ценам</p>
          </div>
          <div class="flex gap-5 items-center z-10">
            <button class="bg-brand-lightgrey text-brand-black py-2 px-4 rounded-3xl">
              Перейти в аукцион
            </button>
          </div>
        </div>
        <div class="flex flex-col justify-between p-5 bg-white rounded-[20px] h-[290px] max-w-[332px] relative">
          <img src="../assets/img/home/news.png" alt="dashboard" class="absolute w-[194px] bottom-[45px] right-[30px]">

          <div>
            <h2 class="pb-2 font-semibold text-2xl">Новости</h2>
            <p class="text-brand-black text-sm">Больше чем просто магазин. Мы регулярно публикуем отчеты по завершённым битвам в аукционах</p>
          </div>
          <div class="flex gap-5 items-center">
            <button class="bg-brand-lightgrey text-brand-black py-2 px-4 rounded-3xl">
              Узнать подробнее
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-7">
      <div class="flex items-center justify-between">
        <h1 class="font-semibold">Аукционы которые вот вот начнутся!</h1>
        <div class="flex items-center gap-2">
          <NuxtLink to="#" class="border-b border-b-brand-black pb-1 text-sm">Посмотреть всё</NuxtLink>
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.40039 11.6955L10.5432 1.26074" stroke="#1F1F1F" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.59961 1.26074H10.5424V7.52161" stroke="#1F1F1F" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="flex gap-6 pt-7">
        <card supersoon/>
        <card supersoon/>
        <card supersoon/>
        <card supersoon/>
        <card supersoon/>
      </div>
    </div>
    <div class="container pt-12 pb-9">
      <div class="flex items-center justify-between">
        <h1 class="font-semibold">Аукционы которые недавно завершились</h1>
        <div class="flex items-center gap-2">
          <NuxtLink to="#" class="border-b border-b-brand-black pb-1 text-sm">Посмотреть всё</NuxtLink>
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.40039 11.6955L10.5432 1.26074" stroke="#1F1F1F" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.59961 1.26074H10.5424V7.52161" stroke="#1F1F1F" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="flex gap-6 pt-7">
        <card sold/>
        <card sold/>
        <card sold/>
        <card sold/>
        <card sold/>
      </div>
    </div>
    <div class="bg-brand-lightgrey pt-10 pb-16">
      <div class="container">
        <h1 class="font-semibold pb-6">Что можно выиграть на аукционах?</h1>
        <auction-opportunities/>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>