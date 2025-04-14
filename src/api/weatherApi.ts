const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export async function fetchCurrentWeather(city = 'Seoul') {
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`
  const response = await fetch(url)
  if (!response.ok) throw new Error('API 요청 실패')
  return await response.json()
}
