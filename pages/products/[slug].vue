<template>
  <img
    :src="`${$directus.url}assets/${post.prd_img.filename_disk}?width=600`"
    :alt="`${post.prd_title}`"
  />
  <h2>{{ post.prd_title }}</h2>
  <div v-html="post.prd_info"></div>
</template>

<script setup>
const { $directus, $readItem } = useNuxtApp();
const route = useRoute();

const { data: post } = await useAsyncData("post", () => {
  return $directus.request(
    $readItem("products", route.params.slug, {
      fields: ["*", { "*": ["*"] }],
    })
  );
});

if (!post.value)
  throw createError({
    statusCode: 404,
    statusMessage: "Post Not Found",
  });
</script>
