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
            <div class="flex justify-between items-center mb-8">
                <p class="montserrat_small text-gray-400">{{ products.length }} products</p>
                <Options/>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <Product v-for="product in productList" :key="product.id" :product="product" />
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import { ref, computed } from 'vue';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Filter from '../components/Shop/Filter.vue';
import Options from '../components/Shop/Options.vue';
import Product from '../components/Shop/Product.vue';
import { useProducts } from '../data/products.js';

const { products } = useProducts();

// 只顯示 type 不是 'banner' 的商品
const productList = computed(() => products.value.filter(p => p.type !== 'banner'));

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