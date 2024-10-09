<template>
  <div class="loader-container" v-if="loading">
    <div class="loader">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
    <p class="loading-text">Loading...</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);

// Simulate loading time (remove this in production and use real loading state)
setTimeout(() => {
  loading.value = false;
}, 3000);
</script>

<style scoped>
.loader-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  width: 20px;
  height: 20px;
  background-color: #423939;
  border-radius: 50%;
  margin: 0 10px;
  animation: bounce 0.5s ease-in-out infinite;
}

.circle:nth-child(2) {
  animation-delay: 0.1s;
}

.circle:nth-child(3) {
  animation-delay: 0.2s;
}

.loading-text {
  margin-top: 20px;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  color: #423939;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}
</style>
