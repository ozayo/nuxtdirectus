<template>
  <div>
    <h1>Blog Posts</h1>
    <p>Used basic Restapi for fetch Directus data</p>
    <p>
      File name is: apitest.vue and for slug root is pages>newblog>[slug].vue
    </p>
    <div class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      <div
        class="mb-5 rounded-xl bg-gray-100 shadow-xl"
        v-for="post in posts"
        :key="post.id"
      >
        <div class="blogimage rounded-t-lg overflow-hidden">
          <img
            :src="
              img(post.blog_img, {
                width: 400,
                height: 240,
                format: 'webp',
                quality: 60,
              })
            "
            :alt="post.blog_title"
            width="400"
            height="240"
          />
        </div>
        <!-- Blog Categories -->
        <div class="mb-8 -mt-9 pl-4">
          <span
            v-for="cat in post.blog_cat"
            :key="cat.category_id.id"
            class="bg-sky-950 px-4 py-1 mr-1 rounded-2xl text-white text-xs"
          >
            {{ cat.category_id.category_name }}
          </span>
        </div>
        <div class="px-5 pb-5">
          <div class="title">
            <nuxt-link
              :to="`/newblog/${post.blog_slug}`"
              class="text-sky-950 hover:text-sky-900 transition-colors duration-200"
            >
              <h2>{{ post.blog_title }}</h2>
            </nuxt-link>
          </div>
          <div class="mb-2 mt-1 text-xs font-light text-gray-600">
            {{ post.user_created.first_name }}
            {{ post.user_created.first_name }} -
            {{ post.user_created.location }} -
            {{ new Date(post.date_created).toLocaleDateString() }}
          </div>
          <div class="mt-4">{{ post.blog_short }}</div>
          <div class="readmore">
            <nuxt-link :to="`/newblog/${post.blog_slug}`">
              <span>Read more</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const API_URL =
  "https://directus.ozayozdemir.com/items/Blog?fields=id,blog_title,blog_slug,blog_short,date_created,blog_img,user_created.first_name,user_created.last_name,user_created.location,blog_cat.category_id.category_name&filter[status][_eq]=published&sort=-date_created";
// const API_URL = "https://directus.ozayozdemir.com/items/Blog";

const posts = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
    });
    const data = await response.json();
    posts.value = data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
const { getThumbnail: img } = useDirectusFiles();
</script>
