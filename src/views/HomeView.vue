<template>
  <main
    :class="`weather-container min-h-screen bg-white flex flex-col items-center justify-center bg-gradient-to-b px-4 py-8 sm:py-10 ${bgClass}`"
  >
    <section class="w-full max-w-xs sm:max-w-sm bg-white/80 rounded-xl shadow-md p-10">
      <h2 class="a11y-hidden">오늘의 날씨</h2>
      <!-- 날씨 위젯 -->
      <WeatherWidget @updatedData="handleIconUpdate" />
      <!-- OOTT 탭 -->
      <OOTTTab :icon="icon" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import WeatherWidget from '@/components/WeatherWidget.vue'
import OOTTTab from '@/components/OOTTTab.vue'

// 날짜 및 시간 가져오기
const now = new Date()
const hour = now.getHours()

const icon = ref<string | null>(null)

const handleIconUpdate = (newIcon: string) => {
  icon.value = newIcon
}

// 배경색 바뀌는 함수
const bgClass = computed(() => {
  if (hour >= 0 && hour <= 6) return 'from-blue-900 to-slate-900' // 새벽
  if (hour <= 8) return 'from-indigo-800 to-yellow-100' // 일출 전
  if (hour <= 12) return 'from-sky-100 to-blue-300' // 아침~점심
  if (hour <= 17) return 'from-sky-500 to-yellow-100' // 낮
  if (hour <= 19) return 'from-blue-900 to-amber-600' // 석양
  return 'from-indigo-900 to-slate-800' // 밤
})
</script>
