<template>
  <div>
    <h1>New Blog Test</h1>
    <p>This is new blog test that use it just Directus Nuxt module.</p>
    <p>
      And my target is use slug for each blog items like
      www.site.com/tests/blog-slug-here
    </p>
  </div>
  <div class="bg-gray-50 mt-4 p-3" v-for="post in posts">
    <h2>{{ post.blog_title }}</h2>
    <!-- Blog Categories -->
    <div class="mb-4">
      <span
        v-for="cat in post.blog_cat"
        :key="cat.category_id.id"
        class="bg-sky-950 px-4 py-1 mr-1 rounded-2xl text-white text-xs"
      >
        {{ cat.category_id.category_name }}
      </span>
    </div>
    <!-- Blog Image -->
    <div>
      <img
        :src="img(post.blog_img, { width: 300, format: 'webp' })"
        :alt="post.blog_title"
      />
    </div>
    <!-- Blog author info -->
    <p class="mb-2 mt-1 text-xs font-light text-gray-600">
      {{ new Date(post.date_created).toLocaleDateString() }} -
      {{ post.user_created.first_name }} {{ post.user_created.last_name }} -
      {{ post.user_created.location }}
    </p>
    <!-- Blog content -->
    <!-- <div class="blogcontent mt-5" v-html="post.blog_contentw"></div> -->
    <div class="blogcontent mt-5" v-html="post.blog_short"></div>

    <!-- Blog read more link -->
    <!-- <div class="mt-5">
      <nuxt-link :to="'/tests/' + post.blog_slug">Read More</nuxt-link>
    </div> -->
    <div class="mt-5">
      <!-- <NuxtLink :to="`/test/${post.id}`"> Read more </NuxtLink> -->
      <nuxt-link :to="`/test/${post.blog_slug}`"> Read more</nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { getItems } = useDirectusItems();
const posts = await getItems({
  collection: "Blog",
  params: {
    limit: 12,
    page: 1,
    sort: ["-date_created"],
    status: "published",
    fields: [
      "id",
      "blog_title",
      "blog_slug",
      "blog_contentw",
      "blog_short",
      "date_created",
      "blog_img",
      "user_created.first_name",
      "user_created.last_name",
      "user_created.location",
      "blog_cat.category_id.category_name",
    ],
  },
});
const { getThumbnail: img } = useDirectusFiles();
</script>
<style>
p {
  margin-bottom: 10px;
}
.blogcontent a {
  @apply text-blue-700;
}
.blogcontent ul {
  @apply list-disc list-inside mb-2 mt-1;
}
</style>
