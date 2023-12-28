<template>
	<h1>New Blog with SDK</h1>
  <p>This is a new blog created with Directus SDK</p>
  <p>main page blog/index.vue and slug blog/[slug].vue</p>
	<ul>
		<li v-for="post in posts" :key="post.id">
			<NuxtLink :href="`/blog/${post.slug}`">
				<h2>{{post.title}}</h2>
			</NuxtLink>
			<span>{{post.publish_date}} &bull; {{post.author.name}}</span>
		</li>
	</ul>
</template>

<script setup>
const { $directus, $readItems } = useNuxtApp()

const { data: posts } = await useAsyncData('posts', () => {
  return $directus.request(
	$readItems('posts', {
		fields: ['slug', 'title', 'publish_date', { 'author': [ 'name' ] }],
		sort: ['-publish_date']
	})
  )
})
</script>