<template>
	
	<h1>{{post.blog_title}}</h1>
	<div v-html="post.blog_contentw"></div>
</template>

<script setup>
const { $directus, $readItem } = useNuxtApp()
const route = useRoute()
const slug = route.params.slug;

const { data: post } = await useAsyncData('post', () => {
  return $directus.request(
    $readItem('Blog', [blog_slug][_eq]={slug}, {
      fields: ['*', { '*': ['*'] }]
      // fields: ['blog_slug', 'blog_title', 'blog_short', 'date_created', 'blog_img', 'blog_contentw'],
    })
  )
})

</script>