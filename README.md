# Bankar - Shipment Tracking Website

A modern shipment tracking website built with SvelteKit 5, Tailwind CSS v4, and shadcn-svelte components.

## Features

- 🎨 **Modern Design** - Clean, professional UI matching the uploaded design mockups
- 📦 **Package Tracking** - Track shipments in real-time with detailed timeline
- 🚢 **Multiple Services** - Sea, Air, and Train shipping options
- 📊 **Statistics Dashboard** - Display key business metrics
- 🗺️ **Location Finder** - Interactive map for container locations
- 📱 **Responsive** - Works seamlessly on all devices
- ⚡ **Fast** - Built with SvelteKit 5 and modern web technologies

## Tech Stack

- **Framework**: SvelteKit 5 with Svelte 5 runes
- **Styling**: Tailwind CSS v4
- **Components**: shadcn-svelte
- **Type Safety**: TypeScript
- **Development**: Vite

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, pnpm, yarn, or bun

### Installation

1. Install dependencies:
```bash
npm install
# or
bun install
```

2. Start the development server:
```bash
npm run dev
# or
bun run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Sample Tracking Codes

Try these tracking codes to see the system in action:

- **BNK123456** - In Transit (Air Shipping from LA to NY)
- **BNK789012** - Delivered (Sea Shipping from SF to Miami)
- **BNK345678** - Processing (Train Shipping from Seattle to Boston)

## Project Structure

```
src/
├── lib/
│   ├── components/ui/   # shadcn-svelte components
│   ├── data/tracking.ts # Mock tracking data
│   └── utils.ts         # Utility functions
├── routes/
│   ├── track/[code]/    # Dynamic tracking route
│   ├── +layout.svelte   # Root layout
│   ├── +page.svelte     # Homepage
│   └── +page.server.ts  # Form actions
└── app.html
```

## Modern Svelte 5 Features Used

- **Runes**: `$state`, `$props` for reactive state management
- **Enhanced Forms**: Progressive enhancement with `use:enhance`
- **Type Safety**: Full TypeScript support
- **Server Actions**: Form handling with SvelteKit actions

## License

This project is for demonstration purposes.


If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
