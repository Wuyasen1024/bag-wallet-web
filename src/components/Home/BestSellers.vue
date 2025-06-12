<template>
    <div class="flex flex-col items-center w-full h-auto bg-white">
        <h2 class="montserrat_medium text-black mt-[100px] mb-[100px]">BEST SELLERS</h2>
        <div class="grid grid-cols-4 gap-6 mb-[50px]">
            <div v-for="bag in bags" :key="bag.id" class="flex flex-col grid_4">
                <div class="flex flex-col ">
                    <div class="best_tag cormorant-italic_sm text-white rounded-lg">Best Seller</div>
                    <img :src="bag.image" alt="" class="w-auto h-[240px] object-cover">
                </div>
                <div class="flex flex-col items-center mt-8">
                    <p class="montserrat_small">{{ bag.name }}</p>
                    <p class="cormorant-italic_md">${{ bag.price }}</p>
                </div>
            </div>
        </div>
        <button class="home_btn_red mt-12 mb-[100px]">Shop All Bags</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const bags = ref([
    {
        id: 'b1',
        name: 'Ember Glow Tote',
        price: 150,
        image: '/home/pic/b1.png'
    },
    {
        id: 'b2',
        name: 'Celestial Clutch',
        price: 200,
        image: '/home/pic/b2.png'
    },
    {
        id: 'b3',
        name: 'Voyager Crossbody',
        price: 350,
        image: '/home/pic/b3.png'
    },
    {
        id: 'b4',
        name: 'Whisperwood Satchel',
        price: 400,
        image: '/home/pic/b4.png'
    },
])
</script>

<style scoped>
/* custom css */
.cormorant-italic_md {
    font-family: "Cormorant", serif;
    font-style: italic;
    color: #b4532a;
    font-size: 1.5rem;
}

.cormorant-italic_sm {
    font-family: "Cormorant", serif;
    font-style: italic;
    font-size: 16px;
}

.montserrat_medium {
    font-family: "Montserrat", sans-serif;
    font-weight: bolder;
    font-size: 20px;
    letter-spacing: 0.2em;
}

.montserrat_small {
    font-family: "Montserrat", sans-serif;
    font-weight: medium;
    font-size: 16px;
}

.home_btn_red:hover {
    background-color: #b4532a;
    color: #fff;
}


/* tailwindcss */
.best_tag {
    @apply flex justify-center w-20 h-6 bg-[#B4532A]
}

.grid_4 {
    @apply bg-[#F7F3EF] p-4 w-[240px] h-[300px] rounded-2xl
}

.home_btn_red {
    @apply text-[#B4532A] border border-solid border-[#B4532A] px-10 py-4 rounded-2xl duration-300
}
</style>