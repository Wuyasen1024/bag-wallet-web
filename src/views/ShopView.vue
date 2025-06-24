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
            <a class="cate" :class="{ 'active-cate': selectedCategory === 'All Products' }" href="#" @click.prevent="selectedCategory = 'All Products'">All Products</a>
            <a class="cate" :class="{ 'active-cate': selectedCategory === 'Best Sellers' }" href="#" @click.prevent="selectedCategory = 'Best Sellers'">Best Sellers</a>
            <a class="cate" :class="{ 'active-cate': selectedCategory === 'Bags' }" href="#" @click.prevent="selectedCategory = 'Bags'">Bags</a>
            <a class="cate" :class="{ 'active-cate': selectedCategory === 'Leather Belts' }" href="#" @click.prevent="selectedCategory = 'Leather Belts'">Leather Belts</a>
            <a class="cate" :class="{ 'active-cate': selectedCategory === 'Mini Leather Goods' }" href="#" @click.prevent="selectedCategory = 'Mini Leather Goods'">Mini Leather Goods</a>
            </div>
            <h1 class="py-4 mt-4 montserrat_nor text-[24px]">Filter by</h1>
            <hr>
            <Filter/>
        </div>
        <div class="w-4/5 h-auto flex flex-col px-6">
            <div class="flex justify-between items-center mb-8">
                <p class="montserrat_small text-gray-400">{{ productList.length }} products</p>
                <Options :sortOption="sortOption" @update-sort="val => sortOption = val" />
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
const selectedCategory = ref('All Products');
const sortOption = ref('Recommended');

const productList = computed(() => {
  let filtered = products.value.filter(p => p.type !== 'banner');

  if (selectedCategory.value === 'Best Sellers') {
    filtered = filtered.filter(p => p.isBestSeller);
  } else if (selectedCategory.value === 'Bags') {
    filtered = filtered.filter(p => p.isBags);
  } else if (selectedCategory.value === 'Leather Belts') {
    filtered = filtered.filter(p => p.isBelts);
  } else if (selectedCategory.value === 'Mini Leather Goods') {
    filtered = filtered.filter(p => p.isWallets);
  } 

  if (sortOption.value === 'Newest') {
    return filtered.slice().sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
  } else if (sortOption.value === 'Price (low to high)') {
    return filtered.slice().sort((a, b) => a.price - b.price);
  } else if (sortOption.value === 'Price (high to low)') {
    return filtered.slice().sort((a, b) => b.price - a.price);
  } else if (sortOption.value === 'Name A-Z') {
    return filtered.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption.value === 'Name Z-A') {
    return filtered.slice().sort((a, b) => b.name.localeCompare(a.name));
  }
  
  // Default sort for 'Recommended': BestSellers first, then by newest
  return filtered.slice().sort((a, b) => {
      const bestSellerSort = Number(b.isBestSeller || false) - Number(a.isBestSeller || false);
      if (bestSellerSort !== 0) {
          return bestSellerSort;
      }
      return new Date(b.dateAdded) - new Date(a.dateAdded);
  });
});
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

.cate {
    color: black;
    transition: color 0.2s;
    font-weight: 400;
}
.cate:hover {
    color: #b4532a;
    font-weight: 500;
}
.active-cate {
    color: #b4532a;
    font-weight: 500;
}

/* tailwindcss */
</style>