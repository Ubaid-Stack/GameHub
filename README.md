# 🎮 GameHub

A modern game discovery application built with **React**, **TypeScript**, and **Vite**. Browse thousands of games using the RAWG API, search by title, filter by genre and platform, sort results, and explore detailed game pages with trailers, screenshots, and metadata.

## 🌐 Live Demo

👉 https://game-hub-eta-eight-47.vercel.app/

---

# ✨ Features

- 🔍 Search games by name
- 🎮 Browse thousands of games
- ♾️ Infinite scrolling
- 🎯 Filter by genre
- 💻 Filter by platform
- 📊 Sort by:
  - Relevance
  - Name
  - Release Date
  - Date Added
  - Popularity
  - Average Rating
- 📄 Detailed game pages
- ▶️ Game trailers
- 🖼️ Screenshot gallery
- 🌙 Dark mode support
- 📱 Fully responsive design
- ⚡ Skeleton loading states
- 🚨 Route-level error handling
- 📈 Vercel Analytics

---

# 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite

### UI

- Chakra UI
- Emotion
- React Icons

### Data Fetching

- React Query (TanStack Query)
- Axios

### State Management

- Zustand

### Routing

- React Router

### Infinite Scroll

- react-infinite-scroll-component

### Deployment

- Vercel
- @vercel/analytics

---

# 📂 Project Structure

```text
src/
│
├── assets/
├── components/
├── data/
├── entites/
├── hooks/
├── pages/
├── services/
└── store/
```

### Folder Overview

| Folder | Purpose |
|---------|----------|
| assets | Images, logos, placeholders, emojis |
| components | Reusable UI components |
| data | Local fallback datasets |
| entites | TypeScript interfaces |
| hooks | React Query hooks |
| pages | Route pages |
| services | API client & utilities |
| store | Zustand global store |

---

# 🚀 Application Overview

## Home Page

- Infinite scrolling game grid
- Genre sidebar
- Platform selector
- Sort selector
- Search support
- Loading skeletons

## Game Details

Each game page displays:

- Game title
- Expandable description
- Platforms
- Genres
- Publishers
- Metacritic score
- Trailer
- Screenshot gallery

---

# ⚙️ State Management

GameHub uses **Zustand** for client-side state.

The global query state stores:

- genreId
- platformId
- sortOrder
- searchText

Whenever these values change, React Query automatically refetches the appropriate game list.

---

# 📡 Server State

React Query manages all server data.

Hooks include:

- useGame
- useGames
- useGenres
- usePlatforms
- useScreenshots
- useTrailer

Benefits:

- Request caching
- Background refetching
- Infinite pagination
- Loading states
- Error handling
- Stale time management

---

# 🎮 RAWG API Integration

GameHub uses the RAWG Video Games Database API.

Endpoints used:

- GET /games
- GET /games/:slug
- GET /genres
- GET /platforms/lists/parents
- GET /games/:gameId/movies
- GET /games/:gameId/screenshots

Game list requests support:

- genres
- parent_platforms
- ordering
- search
- page

---

# ⚡ Performance

To improve perceived loading speed, the application includes local fallback datasets for:

- Genres
- Platforms

These datasets render immediately while fresh data is fetched from the API.

---

# 🎨 UI Highlights

- Dark mode by default
- Responsive layout
- Responsive Chakra UI Grid
- Hover animations
- Platform icons
- Placeholder images
- Consistent image cropping
- Skeleton loading components

---

# 🔐 Environment Variables

Create a `.env` file in the project root.

```env
VITE_RAWG_API_KEY=your_rawg_api_key_here
```

An example file is included as:

```
.env.example
```

---

# 🚀 Getting Started

## Prerequisites

- Node.js
- npm

## Installation

```bash
npm install
```

## Configure Environment Variables

```env
VITE_RAWG_API_KEY=your_rawg_api_key_here
```

## Start Development Server

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

---

# 📜 Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Builds the production version.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint.

---

# 🌍 Deployment

The application is deployed on **Vercel**.

Live Site:

https://game-hub-eta-eight-47.vercel.app/

Remember to configure:

```
VITE_RAWG_API_KEY
```

inside your hosting platform.

---

# 📖 Learning Goals

This project was built to practice and demonstrate:

- React Router
- React Query
- Zustand
- Infinite Queries
- API Integration
- TypeScript
- Component Architecture
- Responsive Design
- Chakra UI
- Modern React Patterns

---

# 🙏 Acknowledgements

- RAWG Video Games Database API
- Chakra UI
- TanStack Query
- React Router
- Zustand
- Vercel

---

# 📄 License

This project currently does not include a license.
