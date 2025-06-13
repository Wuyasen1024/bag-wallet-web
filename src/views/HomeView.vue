<template>
    <Header />
    <div class="bg-white w-full h-full">
        <div class="relative w-full h-[600px] bg-black">
            <div class="jumbo_wrapper">
                <h1 class="text-white montserrat font-bold text-5xl">CUE THE COLOR</h1>
                <button class="home_btn montserrat_small">Shop the collection</button>
            </div>
            <img class="jumbo" src="/home/pic/j1.png"
                alt="" />
        </div>
        <Bestseller/>
        <Fourcol/>
        <Threecol/>
        <div class="flex flex-col items-center bg-[#f6f3ef] w-full h-auto">
            <h3 class="text-center montserrat_medium mt-[100px] mb-[20px]">FOLLOW <br> ADALENE ON INSTAGRAM</h3>
            <a class="cormorant-italic_lg mb-[100px]" href="">@Adaleneshop</a>
            <div class="flex flex-row w-full mb-[50px]">
                <div v-for="f in fasions" :key="f.id" class="flex justify-center w-1/5 h-[280px] bg-slate-500">
                    <img :src="f.image" alt="" class="w-full h-auto object-cover">
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue'
import Bestseller from '../components/Home/BestSellers.vue';
import Fourcol from '../components/Home/BagGrid.vue';
import Threecol from '../components/Home/BagPageRouter.vue';
import Footer from '../components/Footer.vue';

const fasions = ref ([
    {
        id:'f1',
        image:'/home/pic/f1.jpg',
    },
    {
        id:'f2',
        image:'/home/pic/f2.jpg',
    },
    {
        id:'f3',
        image:'/home/pic/f3.jpg',
    },
    {
        id:'f4',
        image:'/home/pic/f4.jpg',
    },
    {
        id:'f5',
        image:'/home/pic/f5.jpg',
    },
])
</script>

<style scoped>
/* custom css */
.cormorant-italic {
    font-family: "Cormorant", serif;
    font-style: italic;
    color: #b4532a;
    font-size: 2.5rem;
}

.cormorant-italic_lg {
    font-family: "Cormorant", serif;
    font-style: italic;
    color: #b4532a;
    font-size: 2rem;
}

.montserrat {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    letter-spacing: 0.2em;
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

.montserrat_xs {
    font-family: "Montserrat", sans-serif;
    font-weight: medium;
    font-size: 12px;
}

.home_btn:hover {
    background-color: #fff;
    color: #b4532a;
}


/* tailwindcss */
.header {
    @apply flex items-center justify-between px-6 py-2 w-full bg-white;
}

.iconSetting {
    @apply w-[30px] h-auto object-cover;
}

.iconSetting:hover {
    @apply text-gray-600;
}

.jumbo_wrapper {
    @apply absolute inset-0 flex flex-col gap-10 items-center justify-center z-10;
}

.jumbo {
    @apply w-full h-full object-cover brightness-[0.7];
}

.home_btn {
    @apply text-white border border-solid border-white px-10 py-4 rounded-2xl duration-300
}

.home_btn_red {
    @apply text-[#B4532A] border border-solid border-[#B4532A] px-10 py-4 rounded-2xl duration-300
}


.grid_4 {
    @apply bg-[#F7F3EF] p-4 w-[240px] h-[300px] rounded-2xl
}

.grid_3 {
    @apply bg-slate-600 w-[300px] h-[360px]
}

.grid_2 {
    @apply bg-slate-400 h-[500px]
}

.best_tag {
    @apply flex justify-center w-20 h-6 bg-[#B4532A]
}
</style>
