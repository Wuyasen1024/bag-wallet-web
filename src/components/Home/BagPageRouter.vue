<template>
    <div class="grid grid-cols-3 gap-16 pl-16 pr-16 mb-[100px]">
        <div v-for="(banner, index) in banners" :key="index" class="three">
            <img class="banner_img" :src="banner.image" :alt="banner.title">
            <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                <h3 class="cormorant-italic_md">{{ banner.subtitle }}</h3>
                <h2 class="montserrat text-2xl mb-3">{{ banner.title }}</h2>
                <div class="w-6 h-1 bg-white mb-8"></div>
                <RouterLink :to="banner.linkPath" class="montserrat_small hover:underline underline-offset-4 duration-300">{{ banner.linkText }}</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const banners = ref([
    {
        title: 'BRAND',
        subtitle: 'Family Owned',
        image: '/home/pic/brand.jpg',
        linkText: 'Read our story.',
        linkPath: '/story'
    },
    {
        title: 'PRODUCTS',
        subtitle: 'Hand Crafted',
        image: '/home/pic/product.jpg',
        linkText: 'About our leather',
        linkPath: '/craft'
    },
    {
        title: 'USA',
        subtitle: 'Created in the',
        image: '/home/pic/usa.jpg',
        linkText: 'Learn our process',
        linkPath: '/craft'
    }
]);
</script>

<style scoped>
/* custom css */
.cormorant-italic_lg {
    font-family: "Cormorant", serif;
    font-style: italic;
    color: #fff;
    font-size: 2.5rem;
}

.cormorant-italic_md {
    font-family: "Cormorant", serif;
    font-style: italic;
    color: #fff;
    font-size: 1.5rem;
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

/* tailwindcss */
.three{
    @apply relative w-full h-[360px] rounded-2xl overflow-hidden
}

.banner_img{
    @apply absolute inset-0 w-full h-full object-cover brightness-[0.7]
}
</style>