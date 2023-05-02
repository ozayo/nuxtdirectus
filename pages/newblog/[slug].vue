<template>
  <div>
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <div v-else>
      <h1>{{ post.blog_title }}</h1>
      <div v-if="post.blog_img">
        <img
          :src="
            img(post.blog_img.id, {
              width: 1280,
              height: 600,
              format: 'webp',
              quality: 60,
            })
          "
          alt="{{post.blog_img.title}}"
          width="1280"
          height="600"
        />
      </div>
      <div class="text-xs text-right">Credit: {{ post.blog_img.title }}</div>
      <div class="mb-4">
        <span
          v-for="cat in post.blog_cat"
          :key="cat.category_id.id"
          class="bg-sky-950 px-4 py-1 mr-1 rounded-2xl text-white text-xs"
        >
          {{ cat.category_id.category_name }}
        </span>
      </div>
      <p
        v-if="post.user_created"
        class="mb-2 mt-3 text-sm font-light text-gray-600"
      >
        {{ new Date(post.date_created).toLocaleDateString() }} - by
        {{ post.user_created.first_name }} {{ post.user_created.last_name }} -
        {{ post.user_created.location }}
      </p>

      <div v-html="post.blog_contentw"></div>
    </div>
    <div class="mt-5">
      <nuxt-link to="/apitest" class="text-slate-900"
        ><Icon name="mdi:arrow-left" /> Back to blog page</nuxt-link
      >
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const API_URL = "https://directus.ozayozdemir.com/items/Blog/";
const post = ref({});
const isLoading = ref(true);

onMounted(async () => {
  const route = useRoute();
  const slug = route.params.slug;
  const fields = [
    // "*.*.*",
    "id",
    "blog_title",
    "blog_img",
    "blog_img.id",
    "blog_img.title",
    "blog_img.filename_download",
    "blog_slug",
    "date_created",
    "blog_contentw",
    "blog_img",
    "user_created.first_name",
    "user_created.last_name",
    "user_created.location",
    "blog_cat.category_id.category_name",
  ].join(",");

  try {
    const response = await fetch(
      `${API_URL}?filter[blog_slug][_eq]=${slug}&fields=${fields}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    post.value = data.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    isLoading.value = false;
  }
});
const { getThumbnail: img } = useDirectusFiles();
</script>
