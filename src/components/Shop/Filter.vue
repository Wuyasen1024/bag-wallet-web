<template>
  <!-- Price 區塊 -->
  <div class="py-4">
    <div class="flex justify-between items-center">
      <span class="montserrat_small">Price</span>
      <button class="text-2xl font-light">−</button>
    </div>
    <div class="flex flex-col mt-4 mb-2">
      <input type="range" min="50" max="800" v-model="minPrice" :max="maxPrice" class="w-full accent-black mb-2" />
      <input type="range" min="50" max="800" v-model="maxPrice" :min="minPrice" class="w-full accent-black" />
    </div>
    <div class="flex justify-between text-sm text-gray-700">
      <span>${{ minPrice }}</span>
      <span>${{ maxPrice }}</span>
    </div>
  </div>
  <hr class="mb-4">
  <!-- Size 區塊 -->
  <div class="mb-4">
    <div class="flex justify-between items-center">
      <span class="montserrat_small">Size</span>
      <button class="text-2xl font-light" @click="sizeOpen = !sizeOpen" aria-label="Toggle Size" type="button">
        {{ sizeOpen ? '−' : '+' }}
      </button>
    </div>
    <transition name="slide-fade">
      <div v-show="sizeOpen" class="flex flex-col gap-3 mt-4 mb-2">
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" v-model="sizes" value="Large" class="w-3 h-3 border-gray-400 rounded" />
          <span class="montserrat_small">Large</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" v-model="sizes" value="Medium" class="w-3 h-3 border-gray-400 rounded" />
          <span class="montserrat_small">Medium</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" v-model="sizes" value="Small" class="w-3 h-3 border-gray-400 rounded" />
          <span class="montserrat_small">Small</span>
        </label>
      </div>
    </transition>
  </div>
  <hr>
</template>

<script setup>
import { ref } from 'vue'

const minPrice = ref(50)
const maxPrice = ref(800)
const sizes = ref([]) // 綁定選中的尺寸
const sizeOpen = ref(false) // 控制展開/收起
</script>

<style scoped>
/* custom css */
.montserrat_small {
  font-family: "Montserrat", sans-serif;
  font-weight: medium;
  font-size: 16px;
}

/* 軌道 */
input[type="range"] {
  height: 16px;
  width: 100%;
  background: transparent;
}

input[type="range"]::-webkit-slider-runnable-track {
  height: 1%;
  background: #e5e5e5;
}

input[type="range"]::-moz-range-track {
  height: 1%;
  background: #e5e5e5;
}

input[type="range"]::-ms-fill-lower,
input[type="range"]::-ms-fill-upper {
  height: 1%;
  background: #e5e5e5;
}

/* 滑塊 */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 28px;
  height: 28px;
  background: #000;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  margin-top: -8px;
  /* 讓 thumb 垂直置中 */
}

input[type="range"]::-moz-range-thumb {
  width: 28px;
  height: 28px;
  background: #000;
  border-radius: 50%;
  cursor: pointer;
  border: none;
}

input[type="range"]::-ms-thumb {
  width: 28px;
  height: 28px;
  background: #000;
  border-radius: 50%;
  cursor: pointer;
  border: none;
}

/* 移除預設外觀 */
input[type="range"]:focus {
  outline: none;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: max-height 0.3s cubic-bezier(.25,.8,.25,1), opacity 0.3s cubic-bezier(.25,.8,.25,1);
  overflow: hidden;
  will-change: max-height, opacity;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  max-height: 200px; /* 設大一點 */
  opacity: 1;
}

/* tailwindcss */
</style>