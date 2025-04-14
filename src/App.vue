<template>
  <div class="relative min-h-screen">
    <router-view />

    <!-- 하단 바 -->
    <nav
      class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-inner flex justify-around items-center h-16 z-50"
    >
      <router-link to="/ootd" class="nav-button text-base">
        <span>👕</span>
        <span>OOTD</span>
      </router-link>
      <router-link to="/" class="nav-button text-base">
        <span>🏠</span>
        <span>Home</span>
      </router-link>
      <router-link to="/thisWeek" class="nav-button text-base">
        <span>📅</span>
        <span>This Week</span>
      </router-link>
    </nav>
  </div>
</template>
