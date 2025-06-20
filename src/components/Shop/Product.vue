<template>
    <div class="flex flex-col bg-[#F7F3EF] p-4 rounded-2xl">
        <div v-if="product.isBestSeller" class="best_tag cormorant-italic_sm text-white rounded-lg">Best Seller</div>
        <div class="w-full h-[240px] flex items-center justify-center">
            <img :src="product.image" :alt="product.name" class="max-w-full max-h-full object-contain" />
        </div>
        <div class="flex flex-col items-center">
            <p class="montserrat_small">{{ product.name }}</p>
            <p class="cormorant-italic_md">${{ product.price }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    product: {
        type: Object,
        required: true
    }
});
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

.montserrat_small {
    font-family: "Montserrat", sans-serif;
    font-weight: medium;
    font-size: 16px;
}

/* tailwindcss */
.best_tag {
    @apply flex justify-center w-20 h-6 bg-[#B4532A]
}

</style>