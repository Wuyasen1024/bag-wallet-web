<template>
    <Header />
    <div class="bg-white w-full h-full">
        <div class="relative w-full h-[600px] bg-black">
            <div class="jumbo_wrapper">
                <h1 class="text-white montserrat font-bold text-6xl">CUE THE COLOR</h1>
                <button class="home_btn montserrat_small">Shop the collection</button>
            </div>
            <img class="jumbo" src="/home/pic/jumbotron.jpg"
                alt="" />
        </div>
        <Bestseller/>
        <Fourcol/>
        <Threecol/>
        <div class="flex flex-col items-center bg-[#f6f3ef] w-full h-auto">
            <h3 class="text-center montserrat_medium mt-[100px] mb-[20px]">FOLLOW <br> ADALENE ON INSTAGRAM</h3>
            <a class="cormorant-italic_lg mb-[100px]" href="">@Adaleneshop</a>
            <div class="flex flex-row w-full mb-[50px]">
                <div v-for="i in 5" :key="i" class="w-1/5 h-[280px] bg-slate-500 border">
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="flex flex-col items-center gap-1">
                <RouterLink to="/" class="cormorant-italic_lg">Adalene.</RouterLink>
                <div class="flex flex-row gap-2">
                    <img class="social" src="/home/pic/letter-f.png" alt="">
                    <img class="social" src="/home/pic/instagram.png" alt="">
                    <img class="social" src="/home/pic/twitter.png" alt="">
                </div>
                <p class="montserrat_xs mt-2">2025 Monica Inc. All rights reserved</p>
            </div>
            <div class="flex flex-col gap-2">
                <h4 class="montserrat_small">CONTACT US</h4>
                <a class="montserrat_xs" href="">adalene@gmail.com</a>
                <a class="montserrat_xs" href="">456 Oak Avenue New York, NY 10001</a>
                <a class="montserrat_xs" href="">+1 (555) 987-6543</a>
            </div>
            <div class="flex flex-col gap-2">
                <h4 class="montserrat_small">SUBSCRIBE</h4>
                <P class="montserrat_xs">Enter your email to get notified about <br> our new products</P>
                <div class="relative">
                    <input type="email" placeholder="Email" class="email montserrat_small">
                    <img class="mail_icon" src="/home/pic/mail.png" alt="Email icon">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Bestseller from '../components/Home/BestSellers.vue';
import Fourcol from '../components/Home/BagGrid.vue';
import Threecol from '../components/Home/BagPageRouter.vue';
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

.social {
    @apply w-auto h-[30px] object-cover
}

.email{
    @apply w-full h-8 pl-4 pr-10 py-2 bg-slate-200 focus:outline-none rounded-lg
}

.mail_icon{
    @apply absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6
}

.footer{
    @apply  flex flex-row justify-between bg-white w-full h-auto pt-12 pb-12 pr-20 pl-20
}
</style>
