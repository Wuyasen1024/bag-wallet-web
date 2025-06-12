<template>
    <div class="grid grid-cols-2 mb-[100px]">
        <div v-for="item in pics" :key="item.id" class="grid_2 group relative">
            <div v-if="item.type === 'product'" class="flex flex-col items-center justify-center h-full">
                <img :src="item.image" alt="" class="w-[400px] h-auto object-cover ">
                <div class="item_wrap group-hover:opacity-0 transition-opacity duration-300">
                    <p class="montserrat_small">{{ item.name }}</p>
                    <p class="cormorant-italic_md">${{ item.price }}</p>
                </div>
                <button class="view_btn opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Product</button>
            </div>
            <div v-else-if="item.type === 'banner'" class="relative w-full h-full">
                <img :src="item.image" alt="" class="w-full h-full object-cover brightness-[0.7]">
                <p class="banner montserrat_lg hover:underline underline-offset-4 duration-300">{{ item.text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const pics = ref([
    {
        id: 'p1',
        type: 'product',
        name: 'Lunafold Wallet',
        price: 100,
        image: '/home/pic/p1.png',
    },
    {
        id: 'b1',
        type: 'banner',
        text: 'MINI LEATHER GOODS',
        image: '/home/pic/B1.jpg',
    },
    {
        id: 'b2',
        type: 'banner',
        text: 'LEATHER BELTS',
        image: '/home/pic/B2.jpg',
    },
    {
        id: 'p2',
        type: 'product',
        name: 'Terra Cinch Belt',
        price: 50,
        image: '/home/pic/p2.png',
    },
]);
</script>

<style scoped>
/* custom css */
.cormorant-italic_md {
    font-family: "Cormorant", serif;
    font-style: italic;
    color: #b4532a;
    font-size: 1.5rem;
}

.montserrat_small {
    font-family: "Montserrat", sans-serif;
    font-weight: medium;
    font-size: 16px;
}

.montserrat_lg {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.2em;
}

.view_btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 12%;
    width: 200px;
    height: auto;
    border: 1px solid #b4532a;
    padding: 10px 20px;
    color: #b4532a;
    border-radius: 14px;
    font-family: "Montserrat", sans-serif;
    font-weight: medium;
    font-size: 16px;
    cursor: pointer;
}

/* tailwindcss */
.grid_2 {
    @apply bg-[#F7F3EF] h-[480px]
}

.banner {
    @apply absolute inset-0 flex items-center justify-center text-white cursor-pointer
}

.item_wrap {
    @apply absolute inset-x-0 bottom-12 flex flex-col items-center opacity-100
}
</style>