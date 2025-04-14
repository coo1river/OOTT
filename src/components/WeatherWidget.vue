<template>
  <section class="text-center w-full max-w-xs sm:max-w-sm mb-6">
    <div v-if="weatherData">
      <!-- 날씨 이미지 -->
      <img
        v-if="weatherIcon"
        :src="weatherIcon"
        :alt="weatherData.weather[0].description"
        class="mx-auto w-30 h-30 mt-2"
      />
      <p class="text-base mt-1 sm:text-lg">{{ weatherData.name }}</p>
      <p class="text-4xl font-bold mt-4 sm:text-5xl">
        {{ Math.floor(weatherData.main.temp * 10) / 10 }}°C
      </p>
      <p>{{ translatedDescription }}</p>
    </div>

    <div v-else>
      <p>Loading weather data...</p>
    </div>

    <div v-if="error" class="error mt-2">
      <p>Error: {{ error }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { fetchCurrentWeather } from '@/api/weatherApi'

// 날씨 정보 및 에러
const weatherData = ref<WeatherData | null>(null)
const error = ref<unknown>(null)

const city = 'Seoul'
const emit = defineEmits(['updatedData'])

interface WeatherData {
  main: {
    temp: number
  }
  weather: {
    description: string
    icon: string
  }[]
  name: string
}

// 날씨 가져오기
onMounted(async () => {
  try {
    const data = await fetchCurrentWeather(city)
    weatherData.value = data
    console.log(data)
    emit('updatedData', data.weather[0].icon)
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = err.message
    } else {
      error.value = '알 수 없는 오류 발생'
    }
  }
})

// 영어 => 한글로 번역
const weatherTranslationMap: Record<string, string> = {
  'clear sky': '맑음',
  'few clouds': '구름 조금',
  'scattered clouds': '흩어진 구름',
  'broken clouds': '구름 많음',
  'shower rain': '소나기',
  rain: '비',
  'light rain': '약한 비',
  'moderate rain': '보통 비',
  thunderstorm: '천둥번개',
  snow: '눈',
  mist: '안개',
  'overcast clouds': '흐림',
}

const translatedDescription = computed(() => {
  if (!weatherData.value) return ''
  const desc = weatherData.value.weather[0].description
  return weatherTranslationMap[desc.toLowerCase()] || desc
})

// 날씨 아이콘 불러오기
const weatherIcon = computed(() => {
  if (!weatherData.value) return ''
  const iconCode = weatherData.value.weather[0].icon
  return `https://openweathermap.org/img/wn/${iconCode}.png`
})
</script>
