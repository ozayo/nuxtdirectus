<template>
  <div class="footer">
    <div class="container mx-auto">
      <div class="text-xs mb-3">
        <NuxtLink to="/" class="m-3">Home</NuxtLink>
        <NuxtLink to="/about" class="m-3">About</NuxtLink>
        <NuxtLink to="/blog" class="m-3">Blog</NuxtLink>
      </div>
      <p class="text-xs mb-2">Nuxt 3 & Directus testing by Ozay Ozdemir</p>
      <p class="text-xs">
        <a href="https://github.com/ozayo/nuxtdirectus" target="_blank"
          ><Icon name="uil:github" size="20"
        /></a>
      </p>
      <p class="text-xs mt-2">2023 - Stockholm</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  @apply w-full pt-10 pb-10 mt-10 bg-slate-800 text-slate-50 text-center;
}
</style>
