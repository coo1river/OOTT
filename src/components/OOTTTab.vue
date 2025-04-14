<template>
  <article class="m-10 flex flex-col justify-center items-center txtClass">
    <h2 class="text-lg font-semibold text-gray-800 mb-3 sm:text-xl txtClass">OOTT 👕</h2>
    <ul class="space-y-2 text-gray-600 text-sm sm:text-base txtClass">
      <li>👕 반팔 티셔츠</li>
      <li>🩳 얇은 반바지</li>
      <li>🧢 모자 (햇빛이 강할 때)</li>
    </ul>

    <p v-if="isUmbrellaNeeded" class="text-red-500 mt-4">☂️ 우산을 챙기세요!</p>
  </article>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps<{
  icon: string | null
}>()

// 우산 필요 여부 계산
const isUmbrellaNeeded = computed(() => {
  if (!props.icon) return false
  return ['09d', '09n', '10d', '10n', '11d', '11n', '13d', '13n'].includes(props.icon)
})
</script>
