<template>
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
</template>

<script setup>

</script>

<style scoped>
/* custom css */
.cormorant-italic_lg {
    font-family: "Cormorant", serif;
    font-style: italic;
    color: #b4532a;
    font-size: 2rem;
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


/* tailwindcss */
.footer{
    @apply  flex flex-row justify-between bg-white w-full h-auto pt-12 pb-12 pr-20 pl-20
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

</style>