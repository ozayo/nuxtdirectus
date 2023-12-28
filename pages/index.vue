<template>
  <div>
    <h1>{{global.title}}</h1>
    <p>{{global.description}}</p>
  </div>
</template>


<script setup>
const { $directus, $readItems } = useNuxtApp();

const { data: global } = await useAsyncData('global', () => {
  return $directus.request($readItems('global'))
})


console.log($directus);
</script>