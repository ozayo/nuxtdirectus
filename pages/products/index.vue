<template>
	<h1>Products</h1>
  <p>This is a new product page created with Directus SDK</p>
  <p>main page products/index.vue and slug products/[slug].vue</p>
  
	<ul>
		<li v-for="post in products" :key="post.id">
			<NuxtLink :href="`/products/${post.slug}`">
				<h2>{{post.prd_title}}</h2>
        <img :src="`${$directus.url}assets/${post.prd_img}?width=600`" alt="" />
        <p>{{post.prd_shortInfo}}</p>
        <p>{{post.prd_price}}</p>
			</NuxtLink>
		</li>
	</ul>
</template>

<script setup>
const { $directus, $readItems } = useNuxtApp()

const { data: products } = await useAsyncData('products', () => {
  return $directus.request(
	// $readItems('products', {
	// 	fields: ['slug', 'status', 'prd_title', 'prd_shortInfo', 'prd_price', 'prd_img'],
	// 	sort: ['-date_created']
	// })
  $readItems('products')
  )
})
</script>