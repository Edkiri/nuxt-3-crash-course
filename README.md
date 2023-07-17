# Learning Nuxt 3
  * [X] Create an app.
    * Base template app using `npx nuxi@latest init`.
    * Set root '@' alias on `nuxt.config.ts`.
    * Install and config tailwind following [framework guide](https://tailwindcss.com/docs/guides/nuxtjs#3).
  * [X] Pages & Routing.
    * Every Vue file inside the pages/ directory creates a corresponding URL (or route) that displays the contents of the file. (it's based on vue-router).
    * Create nested routes by creting folders.
    * Create nested details by [id] then access `{{ $routes.params.id }}` on template.
    * To access route in script use `const route = useRoute()`.
    * `<NuxtLink to="/">Home</NuxtLink>` built in component to navigate.
  * [X] Components.
    * Components auto-imported through all app from components/ folder.
    * Nested components like `components/Profile/Header/index.vue` accessible by `<ProfileHeader />`.
    * Remember that nesting many components means very long names.
  * [X] Layouts.
    * layouts/default.vue is the default layout.
    * `<slot />` used as React {children} prop.
    * `definePageMeta({ layout: "custom" })` on script to choose 'custom' layout.
  * [X] Images & assets.
    * The `public/` directory is used as a public server for static assets publicly available at a defined URL of your application.
    * The `assets/` directory contains by convention every asset that you want the build tool (Vite or webpack) to process.
    * For svgs icons go to [icones.js](https://icones.js.org/) and copy it as vue component.
  * [ ] Composable.
  * [ ] Plugins.
  * [ ] Middlewares.
  * [ ] Modules.
  * [ ] State managment.
  * [ ] SSR, SWR & Hybrid.
  * [ ] Server.
  * [ ] Nitro.
  * [ ] useFetch, useLazyFetch.
  * [ ] useAsyncData.
  * [ ] Read about [useNuxtApp](https://nuxt.com/docs/api/composables/use-nuxt-app#usenuxtapp)
  * [ ] SEO & Metas.
  * [ ] Lifecycles hooks.
  * [ ] Config.
  * [ ] Nuxt-content.
  * [ ] Full-Stack app: docs + API.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
