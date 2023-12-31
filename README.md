# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### initialization
```bash
npx nuxi@latest init <project-name>
```

### [install tailwind](https://nuxt.com/modules/tailwindcss) 
```bash
npm install --save-dev @nuxtjs/tailwindcss
npx tailwindcss init
```

### [install pinia](https://pinia.vuejs.org/)
```bash
npm install pinia @pinia/nuxt
```

### [pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html)
```bash
npm i -D @pinia-plugin-persistedstate/nuxt
```

### [install formkit](https://formkit.com/getting-started/installation#with-nuxt)
```bash
npm install @formkit/nuxt
```

### [formkit genesis theme](https://formkit.com/essentials/styling)
```bash
npm install @formkit/themes
```

## Setup


## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev -- -o
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

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
