# Nuxt 3 & Directus

On this project, I'm using Nuxt 3 with Directus as a headless CMS.

## Nuxt 3

Nuxt is a framework for creating Vue.js applications. It is based on Vue.js, Vue Router and Vuex. It is designed to make the development of Vue.js applications easier and more performant. Nuxt.js comes with a lot of features to help you in your development such as Asynchronous Data, Middleware, Layouts, and more. Nuxt.js also gives you the possibility to create a Single Page Application (SPA) or a Static Generated Application (SSG).

See [Nuxt 3](https://nuxt.com/) for more information.
Nuxt Version: 3.4.2

## Directus

Directus is a headless CMS that allows you to manage your content and data. It is a self-hosted solution that can be installed on your own server. Directus is built with Node.js and uses a MySQL, MariaDB, PostgreSQL, SQLite, or MongoDB database. It is a headless CMS that allows you to manage your content and data. It is a self-hosted solution that can be installed on your own server. Directus is built with Node.js and uses a MySQL, MariaDB, PostgreSQL, SQLite, or MongoDB database.

See [Directus](https://directus.io/) for more information.

On this project I will use Directus self-hosted version.

## Railway

Railway is a platform for deploying and managing serverless applications. It is a serverless platform that allows you to deploy your applications without having to worry about the infrastructure. It is a serverless platform that allows you to deploy your applications without having to worry about the infrastructure. It is a serverless platform that allows you to deploy your applications without having to worry about the infrastructure.

See [Railway](https://railway.app?referralCode=6dYRC7) for more information.

I will use Railway to deploy my Directus application.

## Modules

I will use the following modules:

- [x] Headleass CMS [Directus](https://nuxt.com/modules/directus)
- [x] CSS UI [Tailwind CSS](https://nuxt.com/modules/tailwindcss)
- [x] Google Fonts [Google-fonts](https://nuxt.com/modules/google-fonts)
- [x] Icon [Nuxt Icon](https://nuxt.com/modules/icon)
- [ ] Image [Nuxt Image](https://nuxt.com/modules/image) or
- [ ] Image CDN service [Twicpics Module](https://nuxt.com/modules/twicpics)

## Project todo

- [x] Setup Directus on Railway
- [x] Setup Nuxt 3 on lacalhost
- [x] Basic header and footer components
- [x] Blog page use it with Directus/Nuxt module
- [x] Blog post page use it with Rest API
- [x] Blog categories with Directus
- [ ] Subpages for blog categories
- [x] Setup SMTP for Directus (postmarkapp)
- [x] Amazon S3 integration [Directus docs](https://docs.directus.io/self-hosted/config-options.html#file-storage)
- [ ] Mobile menu
- [ ] Hero components for main page use with Directus
- [ ] Services components for main page use with Directus
- [x] Basic deploy on Netlify
- [ ] SEO optimization

## Project issues

We will see :)

- [x] Losing Directus images after each deployment on Railway
- [ ] After Amazon S3 integration, images loading very slow.
