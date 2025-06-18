<template>
  <form class="max-w-4xl mx-auto mt-8 mb-[100px] space-y-8">
    <div class="flex space-x-8 w-[700px]">
      <div class="flex-1">
        <label class="block mb-2 montserrat_small">First Name *</label>
        <input type="text" class=" input" required>
      </div>
      <div class="flex-1">
        <label class="block mb-2 montserrat_small">Last Name *</label>
        <input type="text" class="input" required>
      </div>
    </div>
    <div>
      <label class="block mb-2 montserrat_small">Email *</label>
      <input type="email" class="input" required>
    </div>
    <div>
      <label class="block mb-2 montserrat_small">Subject</label>
      <input type="text" class="input">
    </div>
    <div>
      <label class="block mb-2 montserrat_small">Message</label>
      <textarea class="input" rows="4"></textarea>
    </div>
    <div class="flex justify-center">
      <button type="submit" class="home_btn_red montserrat_small">Submit</button>
    </div>
  </form>
</template>

<script setup>
</script>

<style scoped>
/* custom css */
.submit_btn:hover{
    color: white;
    background-color: #b4532a;
}

.home_btn_red:hover {
    background-color: #b4532a;
    color: #fff;
}

.montserrat_small {
    font-family: "Montserrat", sans-serif;
    font-weight: medium;
    font-size: 16px;
}

/* tailwindcss */
.input{
    @apply w-full border-b-[1px] border-[#b4532a] bg-transparent outline-none py-2 resize-none
}

.home_btn_red {
    @apply text-[#B4532A] border border-solid border-[#B4532A] px-10 py-4 rounded-2xl duration-300
}
</style>