<template>
	<h1>Old Blog with new SDK</h1>
  <p>This is a new blog created with Directus SDK</p>
  <p>main page lastblog/index.vue and slug lastblog/[slug].vue</p>
	<ul class="mt-10">
		<li v-for="post in Blog" :key="post.id">
        <img :src="`${$directus.url}assets/${post.blog_img.filename_disk}?width=600`" :alt="`${post.blog_img.title}`" />
        <p>Credit : {{post.blog_img.title}}</p>
				<h2>{{post.blog_title}}</h2>
        <p>{{ post.blog_short }}</p>
        <!-- <span>{{ new Date(post.date_created).toLocaleDateString() }}</span> -->
        <!-- <NuxtLink :href="`/lastblog/${post.blog_slug}`">Read more</NuxtLink> -->
        <nuxt-link
              :to="`/lastblog/${post.blog_slug}`"
              class="text-sky-950 hover:text-sky-900 transition-colors duration-200">Read more</nuxt-link>
		</li>
	</ul>
</template>

<script setup>
const { $directus, $readItems } = useNuxtApp()

const { data: Blog } = await useAsyncData('Blog', () => {
  return $directus.request(
	$readItems('Blog', {
		// fields: ['blog_slug', 'blog_title', 'blog_short', 'date_created', 'blog_img'],
    fields: ['*', { '*': ['*'] }],
		sort: ['-date_created']
	})
  )
})
</script>