<template>
    <div class="header">
        <RouterLink to="/" class="cormorant-italic">Adalene.</RouterLink>
        <div class="flex gap-8 montserrat_small text-gray-600">
            <RouterLink class="hover:text-[#b4532a]" to="/shop">Shop All</RouterLink>
            <RouterLink class="hover:text-[#b4532a]" to="/story">Our Story</RouterLink>
            <RouterLink class="hover:text-[#b4532a]" to="/craft">Our Craft</RouterLink>
            <RouterLink class="hover:text-[#b4532a]" to="/contact">Contact</RouterLink>
        </div>
        <div class="flex items-center gap-6">
            <RouterLink to="/cart">
                <img class="iconSetting" src="/home/icons/cart.png" alt="" />
            </RouterLink>
            <RouterLink to="/login">
                <img class="iconSetting" src="/home/icons/profile.png" alt="" />
            </RouterLink>
        </div>
    </div>
</template>


<script setup>
import { RouterLink } from "vue-router";


</script>

<style scoped>
/* custom css */
.cormorant-italic {
    font-family: "Cormorant", serif;
    font-style: italic;
    color: #b4532a;
    font-size: 2.5rem;
}


.montserrat_small {
    font-family: "Montserrat", sans-serif;
    font-weight: medium;
    font-size: 16px;
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

</style>
