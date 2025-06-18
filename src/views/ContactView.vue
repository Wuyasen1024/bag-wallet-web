<template>
    <Header />
    <div class="bg-white w-full h-full flex justify-center mt-14 mb-14">
        <h1 class="montserrat text-[35px]">GET IN TOUCH</h1>
    </div>
    <div class="bg-[#F7F3EF] w-full h-full flex flex-col items-center">
        <h2 class="montserrat_lg mt-[100px]">CUSTOMER SERVICE</h2>
        <div class="w-5 h-0.5 bg-black mt-8 mb-14"></div>
        <div class="flex flex-col items-center">
            <h3 class="cormorant-italic_lg mb-4">Inquiries</h3>
            <p class="montserrat_small text-center mb-[40px]">For questions regarding our products and services you can
                also<br>contact us by filling out the form below.</p>
            <Form />
            <div class="flex flex-row gap-20 mb-[100px]">
                <div class="flex flex-col items-center">
                    <h3 class="cormorant-italic_lg mb-4">Flagship Store</h3>
                    <p class="montserrat_small text-center">500 Terry Francine St.<br>San Francisco, CA 94158</p>
                </div>
                <div class="flex flex-col items-center">
                    <h3 class="cormorant-italic_lg mb-4">Opening Hours</h3>
                    <p class="montserrat_small text-center">Monday-Friday<br>9:00am - 7:00pm EST </p>
                </div>
                <div class="flex flex-col items-center">
                    <h3 class="cormorant-italic_lg mb-4">Contact Us</h3>
                    <p class="montserrat_small text-center">+1 (555) 987-6543<br>adalene@gmail.com</p>
                </div>
                <div class="flex flex-col items-center">
                    <h3 class="cormorant-italic_lg mb-4">Stockist</h3>
                    <p class="montserrat_small text-center">500 Terry Francine St.<br>San Francisco, CA 94158</p>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue';
import Form from '../components/Contact/Form.vue';

</script>

<style scoped>
/* custom css */
.cormorant-italic_lg {
    font-family: "Cormorant", serif;
    font-style: italic;
    color: #b4532a;
    font-size: 2rem;
}

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

/* tailwindcss */
</style>