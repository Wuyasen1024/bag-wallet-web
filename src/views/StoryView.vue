<template>
    <Header />
    <div class="bg-white w-full h-full flex justify-center mt-14 mb-14">
        <h1 class="montserrat text-[35px]">OUR STORY</h1>
    </div>
    <div class="grid grid-cols-2">
        <div v-for="intro in intros" :key="intro.id" class="grid_2">
            <div v-if="intro.type === 'text'" class="flex flex-col items-center justify-center h-full p-16">
                <h2 class="montserrat_lg">{{ intro.name }}</h2>
                <div class="w-5 h-0.5 bg-black mt-8 mb-8"></div>
                <p class="montserrat_small">I'm a paragraph. Click here to add your own text and edit me. It's easy. click "Edit Text" or double click me to add your own content and make changes to the font.
                <br><br>Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
            <div v-else-if="intro.type === 'intr'">
                <div :style="{ backgroundImage: 'url(' + intro.image + ')' }" class="w-full h-[480px] photo_set"></div>
            </div> 
        </div>
    </div>
        <Footer />
</template>

<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue';


const intros = ref([
    {
        id: 't1',
        type: 'text',
        name: 'THE BRAND',
    },
    {
        id: 'i1',
        type: 'intr',
        image: '/home/pic/i1.jpg',
    },
    {
        id: 'i2',
        type: 'intr',
        image: '/home/pic/i2.jpg',
    },
    {
        id: 't2',
        type: 'text',
        name: 'THE DESIGNERS',
    },
]);

</script>

<style scoped>
/* custom css */
.montserrat_lg {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.2em;
}

.montserrat {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    letter-spacing: 0.2em;
}

.montserrat_small {
    font-family: "Montserrat", sans-serif;
    font-weight: medium;
    font-size: 16px;
}

.photo_set {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

/* tailwindcss */
.grid_2 {
    @apply bg-[#F7F3EF] h-[480px]
}
</style>