<template>
    <Header />
    <div class="bg-white w-full h-full flex justify-center mt-14 mb-14">
        <h1 class="montserrat text-[35px]">ALL PRODUCTS</h1>
    </div>
    <div class="flex flex-row mb-[100px]">
        <div class="w-1/5 h-auto px-6">
            <h1 class="py-4 montserrat_nor text-[24px]">Browse by</h1>
            <hr>
            <div class="flex flex-col gap-4 py-4 montserrat_small">
            <a href="">All Products</a>
            <a href="">Best Sellers</a>
            <a href="">Bags</a>
            <a href="">Leather Belts</a>
            <a href="">Mini Leather Goods</a>
            </div>
            <h1 class="py-4 mt-4 montserrat_nor text-[24px]">Filter by</h1>
            <hr>
            <Filter/>
        </div>
        <div class="w-4/5 h-auto flex flex-col px-6">
            <div class="flex justify-between items-center">
                <p class="montserrat_small text-gray-400">40 products</p>
                <Options/>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Filter from '../components/Shop/Filter.vue';
import Options from '../components/Shop/Options.vue';

</script>

<style scoped>
/* custom css */
.montserrat {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    letter-spacing: 0.2em;
}

.montserrat_nor{
    font-family: "Montserrat", sans-serif;
    font-weight: medium;
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
</style>