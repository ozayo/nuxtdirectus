<template>
	<img :src="`${$directus.url}assets/${post.image.filename_disk}?width=1200`" alt="" />
  <div class="text-xs text-right">Credit: {{ post.image.title }}</div>
	<h1>{{post.title}}</h1>
	<div v-html="post.content"></div>
</template>

<script setup>
const { $directus, $readItem } = useNuxtApp()
const route = useRoute()

const { data: post } = await useAsyncData('post', () => {
  return $directus.request(
    $readItem('posts', route.params.slug, {
      fields: ['*', { '*': ['*'] }]
    })
  )
})

if (!post.value) throw createError({
  statusCode: 404,
  statusMessage: 'Post Not Found'
})
</script>