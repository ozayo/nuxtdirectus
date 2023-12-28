<template>
  <NuxtLayout :name="errorpage">
    <div></div>
    <h1>
      <Icon name="bx:bxs-error-alt" color="red" size="60" />{{
        error.statusCode
      }}
    </h1>
    <h2 class="mb-8">Opps, something is wrong.</h2>
    <p class="mb-8">
      It's probably your fault, because we did everything right.
      <Icon name="carbon:face-wink" size="24" />
    </p>
    <button @click="handleError">
      <Icon name="ic:outline-subdirectory-arrow-left" /> Back to homepage
    </button>
  </NuxtLayout>
</template>
<script setup>
const props = defineProps({
  error: Object,
});
const handleError = () => clearError({ redirect: "/" });
</script>
