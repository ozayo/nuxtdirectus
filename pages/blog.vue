<template>
  <div>
    <div class="container p-5 mx-auto">
      <div class="max-w-screen-sm sm:text-center sm:mx-auto">
        <h2
          class="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
        >
          My Directus Blog
        </h2>
        <div class="text-base text-gray-700 md:text-lg sm:px-4">
          <p>
            On this page I am following the tutorial from directus nuxt-blog
            sample.
          </p>
          <p>
            Problem is that sample is use id for each blog post. I want to use
            slug for each blog post.
          </p>
          <p>
            File name blog.vue and for blog item root is
            pages>aritcles>[...id].vue
          </p>
        </div>
        <hr class="w-full my-8 border-gray-300" />
      </div>
      <div
        class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <div class="blogcard py-5" v-for="post in posts">
          <div class="blogimage">
            <!-- <p class="mb-4 text-gray-700">Image ID:{{ post.content_image }}</p> -->
            <!-- <p>Orginal image</p>
            <img :src="img(post.content_image)" alt="original" /> -->

            <!-- <p>300px x 300px image</p>
            <img
              :src="
                img(post.content_image, {
                  width: 300,
                  height: 300,
                  fit: 'cover',
                })
              "
              alt="square"
            /> -->
            <img
              :src="
                img(post.blog_img, {
                  width: 400,
                  height: 240,
                  format: 'webp',
                })
              "
              alt="webp"
            />
          </div>
          <p class="mb-2 mt-1 text-xs font-semibold text-gray-600">
            {{ new Date(post.date_created).toLocaleDateString() }}
          </p>
          <NuxtLink
            :to="`/articles/${post.id}`"
            class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            ><p class="text-2xl font-bold leading-5 text-blue-800">
              {{ post.blog_title }}
            </p></NuxtLink
          >
          <!-- <NuxtLink
            :to="`/articles/${post.blog_slug}`"
            class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            ><p class="text-2xl font-bold leading-5 text-blue-800">
              {{ post.title }}
            </p></NuxtLink
          > -->
          <p class="mb-4 text-gray-700">{{ post.blog_short }}</p>
          <p class="mb-4 text-gray-700">
            User Created Date:{{ post.user_created }}
          </p>
          <p>Author:{{ post.blog_userName }}</p>
        </div>
      </div>
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
  },
});

const { getThumbnail: img } = useDirectusFiles();

//const posts = await getItems({ collection: "blog", fields: ["title"] });
//const posts = await getItems({ collection: "blog", fields: ["title", "content"] });
//get directus users
//const { getItems: getUsers } = useDirectusItems();
//const users = await getUsers({ collection: "directus_users" });
//get directus blog users by name and email
//const { getItems: getUsers } = useDirectusItems();

// show directus collection by created date
//const posts = await getItems({ collection: "blog", sort: ["-date_created"] });
// show directus collection by created date and limit 2
//const posts = await getItems({ collection: "blog", sort: ["-date_created"], limit: 2 });

//const fileId = "b9212e19-c360-4de8-9faa-25ab20d87193";
</script>
