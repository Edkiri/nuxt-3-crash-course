# Learning Nuxt 3
  * [X] Create an app.
    * Base template app using `npx nuxi@latest init`.
    * Set root '@' alias on `nuxt.config.ts`.
    * Install and config tailwind following [framework guide](https://tailwindcss.com/docs/guides/nuxtjs#3).
  * [X] Pages & Routing.
    * Every Vue file inside the `pages/` directory creates a corresponding URL (or route) that displays the contents of the file. (it's based on vue-router).
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
  * [X] Composable.
    * Used like hooks in React.
    * Like componenets and pages, all composables are auto-imported from `composables/` folder.
    * [VueUse](https://vueuse.org/guide/) is a collection of utility functions based on Composition API. It has `onClickOutside` for example.
  * [X] Plugins.
    * Automatically reads `plugins/` folder to register and load plugins at the creation of the app.
    * Use `.server` or `.client` suffix in the file name to load a plugin only on the server or client side.
    * You can provide helpers on the `NuxtApp` instance, return it from the plugin under a `provide` key. [example](https://nuxt.com/docs/guide/directory-structure/plugins#automatically-providing-helpers).
  * [X] Middlewares.
    * Route middleware run within the Vue part of your Nuxt app. Despite the similar name, they are completely different from server middleware, which are run in the Nitro server part of your app.
    * [When middlewares runs?](https://nuxt.com/docs/guide/directory-structure/middleware#when-middleware-runs)
    * [Adding Middleware Dynamically](https://nuxt.com/docs/guide/directory-structure/middleware#adding-middleware-dynamically).
  * [X] Modules.
    * Available [list](https://nuxt.com/modules) of modules created by Nuxt team and community. See his individual docs for how to use.
    * You can also [create](https://nuxt.com/docs/guide/directory-structure/modules) your own modules.
  * [X] Install and config content module.
    * .md file must be named equals to component.
  * [ ] State managment.
    * `useState` is an SSR-friendly `ref` replacement. Its value will be preserved after server-side rendering (during client-side hydration) and shared across all components using a unique key.
    * `const counter = useState('counter', () => 0)`
    * ## [Pinia vs useState](https://www.vuemastery.com/blog/nuxt-3-state-mangement-pinia-vs-usestate/)
    * ### `ref` vs `useState`
      * ##### Cross-Request State Pollution
        * When using server-side rendering (SSR), each new request is executed inside of the same application.
        * And because we only have one singleton state object, every request will share the same state.
        * It creates the potential for leaked data, security vulnerabilities, and hard-to-pin-down bugs.
        * We can use `useState` and get around that issue.
      * ##### State Hydration
        * When using server-side rendering with Nuxt, our app is first executed on the server to generate the initial HTML.
        * There’s a good chance we might want to use a `ref` during that initialization of our components: `const count = ref(getStoredCount())`
        * Once the app is booted up on the client, we’ll have to re-run all of this initialization code.
        * None of these variables are set, so we have to execute the code to figure out what they should be.
        * This is where hydration comes in.
        * We take the state we’ve already computed on the server and send it along with the app’s HTML, CSS...
        * Then, instead of re-calculating everything, we can pick up where we left off!
        * `useState` will automatically perform this optimization without us even thinking about it.
      * ##### Easier state sharing
        * As your app grows, you’ll find that some state needs to be accessed in almost every component.
        * Things like: A user’s unique id or accountId. A list of features or permissions the current user can access...
        * Instead of passing props around endlessly, we turn to global state management libraries like `Vuex` or `Pinia…` or even `useState`.
        * ```ts 
          // No matter where we are, this state will be the same
          const theme = useState<string>('activeFeatures', () => 'dark')
        * This is something that `ref` can’t do!
    * ### So why use something like `Pinia`?
      * Pinia is what you get if you took `useState` and kept adding more and more practical features.
      * If you don’t use Pinia, there’s a good chance you’ll find yourself re-inventing it and building your own state management library. 
      * ##### Devtools integration
        * With Pinia, we get first-class Vue Devtools support.
        * We get a timeline of state changes, so we can see how our state updates over time.
        * We can see all the stores at once, or we can also see the stores alongside any component that is using it.
        * We get time-travel debugging. This lets us go back in history and replay the state changes in our application.
      * ##### Stores for organization
        * A store in Pinia is a reactive object along with actions and getters.
        * Stores in Pinia can also use other stores.
        * ```ts
            import { defineStore } from 'pinia'
            import { useThemeStore } from './theme'

            export const useUserStore = defineStore('user', {
              state: () => {
                return {
                  name: 'User'
                  theme: useThemeStore(),
                };
              },
            })
        * Here we can use our theme store inside of our user store.
        * Something that `useState` doesn’t offer unless you build it yourself.
      * ##### Actions and Getters
        * State is never static, and it’s nice to be able to define specific ways that our state can change through methods.
        * Pinia also lets us define getters, which are convenient functions for dealing with our state.
        ```ts
          import { defineStore } from 'pinia'

          export const useUserStore = defineStore('user', {
            state: () => {
              return {
                firstName: 'First',
                lastName: 'Last',
              };
            },
            actions: {
              updateFirstName(firstName) {
                if (firstName !== '') {
                  this.firstName = firstName;
                }
              },
            },
            getters: {
              fullName() {
                return `${this.firstName} ${this.lastName}`;
              }
            },
          })
        * And use it
          ```ts
            const store = useUserStore();
            store.updateFirstName('Edu');
            console.log(store.fullName);
  * [ ] SSR, SWR & Hybrid.
  * [ ] Server.
  * [ ] Nitro.
  * [ ] useFetch, useLazyFetch.
  * [ ] useAsyncData.
  * [ ] SEO & Metas.
  * [ ] Lifecycles hooks.
  * [ ] Config.
  * [ ] Nuxt-content.
  * [ ] Full-Stack app: docs + API.
  * [ ] Read about [useNuxtApp](https://nuxt.com/docs/api/composables/use-nuxt-app#usenuxtapp)
  * [ ] See more nuxt plugins examples.

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
