<template>
  <div class="bg-gray-50 mt-4 p-3">
    <h2>{{ post.blog_title }}</h2>
    <!-- Blog Categories -->
    <!-- <div class="mb-4">
      <span
        v-for="cat in post.blog_cat"
        :key="cat.category_id.id"
        class="bg-sky-950 px-4 py-1 mr-1 rounded-2xl text-white text-xs"
      >
        {{ cat.category_id.category_name }}
      </span>
    </div> -->
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
    <div class="blogcontent mt-5" v-html="post.blog_contentw"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const API_URL = "https://directus.ozayozdemir.com/items/Blog";
const post = ref({});

onMounted(async () => {
  const route = useRoute();
  const slug = route.params.slug;

  try {
    const response = await fetch(`${API_URL}?filter[blog_slug][_eq]=${slug}`);
    const data = await response.json();
    post.value = data.data[0];
  } catch (error) {
    console.log(error);
  }
});
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
