<template>
  <div class="bg-gray-50 mt-4 p-3">
    <div>
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
      <!-- Author info -->
      <p class="mb-2 mt-1 text-xs font-light text-gray-600">
        {{ new Date(post.date_created).toLocaleDateString() }} -
        {{ post.user_created.first_name }} {{ post.user_created.last_name }} -
        {{ post.user_created.location }}
      </p>
      <!-- Content -->
      <div v-html="post.blog_contentw"></div>
      <!-- Feature image -->
      <img
        :src="img(post.blog_img, { width: 300, format: 'webp' })"
        alt="webp"
      />
    </div>
    <div class="mt-5">
      <NuxtLink to="/test/">Back to blog</NuxtLink>
      <NuxtLink to="/">Back to home</NuxtLink>
    </div>
  </div>
</template>
<script setup>
const { getItemById } = useDirectusItems();
const route = useRoute();
const post = await getItemById({
  collection: "Blog",
  id: route.params.id,
  params: {
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
if (!post) throwError("No article found, 404");

const { getThumbnail: img } = useDirectusFiles();
</script>
