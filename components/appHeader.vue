<template>
  <nav class="container p-3 mx-auto flex justify-between">
    <div class="logo">
      <!-- Header logo -->
      <div>
        <appLogo></appLogo>
      </div>
    </div>
    <div>
      <ul class="flex pt-3 font-bold">
        <li>
          <NuxtLink to="/" class="p-3">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="p-3">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" class="p-3">Blog</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script></script>
