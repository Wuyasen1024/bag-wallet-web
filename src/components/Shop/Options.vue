<template>
    <div class="relative w-[240px]">
        <button @click="sortOpen = !sortOpen" class=" sort montserrat_small focus:outline-none"
            :class="{ 'rounded-t-md': sortOpen, 'rounded-md': !sortOpen }" type="button">
            <span class="montserrat_small">Sort by: {{ sortOption }}</span>
            <span :class="['arrow', 'transition-transform', { '-rotate-90': !sortOpen, 'rotate-90': sortOpen }]">&#10094;</span>
        </button>
        <div v-if="sortOpen" class="sortopen">
            <ul>
                <li v-for="option in sortOptions" :key="option" @click="selectSort(option)"
                    class="px-4 py-3 cursor-pointer hover:bg-gray-100 montserrat_small"
                    :class="{ 'bg-gray-200': sortOption === option }">
                    {{ option }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  sortOption: String
});
const emit = defineEmits(['update-sort']);

const sortOptions = [
    'Recommended',
    'Newest',
    'Price (low to high)',
    'Price (high to low)',
    'Name A-Z',
    'Name Z-A'
]

const sortOpen = ref(false)

function selectSort(option) {
    emit('update-sort', option);
    sortOpen.value = false
}
</script>

<style scoped>
/* custom css */
.montserrat_small {
    font-family: "Montserrat", sans-serif;
    font-weight: medium;
    font-size: 16px;
}

.arrow {
    background-color: transparent;
    color: black;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
}

.-rotate-90 {
    transform: rotate(-90deg);
}

/* tailwindcss */
.sort {
    @apply w-full flex justify-between items-center px-4 py-3 bg-white text-lg
}

.sortopen {
    @apply absolute left-0 right-0 bg-white border-2 rounded-md shadow-lg z-10 
}
</style>