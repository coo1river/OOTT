<template>
  <main
    :class="`min-h-screen flex flex-col items-center justify-center bg-gradient-to-b px-4 py-8 sm:py-10 ${bgClass}`"
  >
    <!-- 날씨 탭-->
    <section class="text-center w-full max-w-xs sm:max-w-sm mb-6">
      <h1 :class="['text-2xl font-bold sm:text-3xl', txtClass]">오늘의 날씨</h1>
      <p :class="['text-base mt-1 sm:text-lg', txtClass]">서울, 맑음 ☀️</p>
      <p :class="['text-4xl font-bold mt-4 sm:text-5xl', txtClass]">24°C</p>
    </section>

    <!-- 옷차림 추천 탭 -->
    <article class="w-full max-w-xs sm:max-w-sm bg-white rounded-xl shadow-md p-6">
      <h2 class="text-lg font-semibold text-gray-800 mb-3 sm:text-xl">OOTT 👕</h2>
      <ul class="space-y-2 text-gray-600 text-sm sm:text-base">
        <li>👕 반팔 티셔츠</li>
        <li>🩳 얇은 반바지</li>
        <li>🧢 모자 (햇빛이 강할 때)</li>
      </ul>
    </article>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// 날짜 및 시간 가져오기
const now = new Date()
const hour = now.getHours()

// 배경색 바뀌는 함수
const bgClass = computed(() => {
  if (hour >= 0 && hour <= 6) return 'from-blue-900 to-slate-900' // 새벽
  if (hour <= 8) return 'from-indigo-800 to-yellow-100' // 일출 전
  if (hour <= 12) return 'from-sky-100 to-blue-300' // 아침~점심
  if (hour <= 17) return 'from-sky-500 to-yellow-100' // 낮
  if (hour <= 19) return 'from-blue-900 to-amber-600' // 석양
  return 'from-indigo-900 to-slate-800' // 밤
})

// 텍스트 색상 바뀌는 함수
const txtClass = computed(() => {
  if (hour >= 0 && hour <= 6) return 'text-white' // 새벽
  if (hour <= 8) return 'text-indigo-900' // 일출 전후
  if (hour <= 14) return 'text-blue-900' // 아침~점심
  if (hour <= 19) return 'text-yellow-900' // 오후~석양
  return 'text-white' // 밤
})
</script>
