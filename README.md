# GameHub

A modern game discovery app built with React, TypeScript, and Vite. GameHub lets users browse video games from the RAWG API, filter them by genre and platform, sort the results, search by name, and open detailed pages with descriptions, trailers, screenshots, and metadata.

Live Demo: https://game-hub-eta-eight-47.vercel.app/

## Overview

GameHub is a front-end application focused on game discovery and browsing. It uses RAWG as its data source and presents the data in a clean, responsive interface built with Chakra UI.

The app supports:

- Infinite scrolling game listings
- Genre filtering
- Platform filtering
- Sorting by multiple criteria
- Keyword search
- Individual game detail pages
- Trailer playback
- Screenshot galleries
- Dark mode support
- Route-level error handling
- Analytics via Vercel Analytics

## Features

### Home Page

- Displays a grid of games fetched from RAWG.
- Loads additional results automatically as the user scrolls.
- Shows a responsive skeleton state while data is loading.
- Uses a shared header and filter bar for search and browsing.

### Search

- Search input in the navbar allows users to search games by name.
- Search updates the game list using the global query store.
- Submitting the form returns the user to the home page and refreshes the results.

### Filters and Sorting

- Genre sidebar lets users narrow the list by genre.
- Platform dropdown lets users filter by parent platform.
- Sort dropdown supports multiple ordering modes:
  - Relevance
  - Name
  - Release Date
  - Date Added
  - Popularity
  - Average rating

### Game Cards

Each game card shows:

- Cover image
- Platform icons
- Metacritic score badge
- Game title
- Rating emoji indicator

### Game Detail Page

Each game detail page includes:

- Game title
- Expandable long description
- Platform list
- Metascore
- Genres
- Publishers
- Trailer video
- Screenshot gallery

### Responsive UI

- Sidebar genres appear only on larger screens.
- The layout adapts to mobile, tablet, and desktop.
- Chakra UI handles responsive spacing, grids, and component states.

### Theme and Color Mode

- Dark mode is the default theme.
- A color mode switch in the navbar lets users toggle the theme.
- Chakra color mode setup is handled at the app root.

### Error Handling

- Unknown routes render a custom error page.
- Detail-page query failures are surfaced through React Router error boundaries or thrown errors.

### Analytics

- Vercel Analytics is mounted in the shared layout to track site usage.

## Tech Stack

### Core

- React 18
- TypeScript
- Vite

### UI and Styling

- Chakra UI
- Emotion
- Chakra color mode support

### Data and State

- React Query for server state, caching, and infinite queries
- Zustand for client-side query/filter state
- Axios for API requests

### Routing and UX

- React Router
- react-infinite-scroll-component
- React Icons

### Deployment and Analytics

- Vercel
- @vercel/analytics

## How the App Works

### State Management

GameHub uses Zustand to store the current browsing query in a single global object:

- genreId
- platformId
- sortOrder
- searchText

When a user changes a filter or searches for a title, the store updates immediately. React Query then uses that store state as part of the query key, which automatically refreshes the game list.

### Server State

React Query handles all API data:

- `useGame` fetches paginated game lists with `useInfiniteQuery`
- `useGames` fetches a single game by slug
- `useGenres` fetches the genre list
- `usePlatforms` fetches parent platforms
- `useScreenshots` fetches game screenshots
- `useTrailer` fetches game trailers

This gives the app:

- request caching
- background refetching
- stale-time control
- infinite pagination
- loading and error state management

### RAWG API Integration

All RAWG requests go through a centralized Axios client. The client injects the API key from environment variables and points to the RAWG base URL.

Used RAWG endpoints:

- `GET /games`
- `GET /games/:slug`
- `GET /genres`
- `GET /platforms/lists/parents`
- `GET /games/:gameId/movies`
- `GET /games/:gameId/screenshots`

The home page list query uses these RAWG parameters:

- `genres`
- `parent_platforms`
- `ordering`
- `search`
- `page`

### Seed Data for Faster Initial Rendering

The app includes local fallback datasets for:

- genres
- platforms

These seed datasets are used to render the UI immediately, even before the network request completes. That gives the app faster first paint and avoids blank selector states.

## Project Structure

```text
src/
  assets/
  components/
  data/
  entites/
  hooks/
  pages/
  services/
  store/
```

### Folder Breakdown

- `assets/` stores local images like logos, placeholders, and emoji graphics.
- `components/` contains reusable UI pieces such as cards, selectors, lists, skeletons, and detail widgets.
- `data/` contains local fallback genre and platform data.
- `entites/` contains TypeScript interfaces for RAWG entities.
- `hooks/` contains React Query hooks and selector helpers.
- `pages/` contains route-level views.
- `services/` contains the RAWG API client and image helper utilities.
- `store/` contains the Zustand browsing-query store.

## Main Pages

### Layout

Shared application shell that renders:

- navbar
- page content outlet
- Vercel Analytics

### Home Page

The main browsing page. It shows:

- genre sidebar
- page heading
- platform and sort selectors
- infinite scrolling game grid

### Game Detail Page

Displays a single game using the slug from the URL. It fetches:

- the game record
- its trailer
- its screenshots

### Error Page

Fallback UI for invalid routes or unexpected routing errors.

## Main Components

### Navbar

Contains:

- app logo
- search box
- theme switch

### SearchInput

A controlled form that updates the global search state and navigates back to the home page.

### GenreList

Shows available genres in a vertical list with thumbnail images.

### PlatformsSelector

Menu for choosing a parent platform.

### SortSelector

Menu for changing the ordering parameter passed to RAWG.

### GameGrid

Renders the infinite-scroll grid of game cards.

### GameCard

Shows the game cover, platforms, score, title, and rating emoji.

### GameAttributes

Displays the selected game’s platform, metascore, genre, and publisher information.

### GameTrailer

Plays the first available RAWG trailer, preferring the 480p source and falling back to the maximum-quality source.

### GameScreenshots

Shows screenshots in a responsive grid.

### ExpandableText

Truncates long descriptions and allows toggling between collapsed and expanded views.

## Styling and Visual System

GameHub uses Chakra UI as the primary design system. The app theme is customized with:

- dark mode as the initial color mode
- a custom gray palette tuned for the UI
- responsive spacing and layout primitives from Chakra

Additional styling details:

- cover cards scale slightly on hover
- game images are cropped consistently
- placeholder images are used when RAWG image data is missing
- platform icons are mapped from platform slugs to React Icons

## Environment Variables

Create a `.env` file in the project root with your RAWG API key:

```env
VITE_RAWG_API_KEY=your_rawg_api_key_here
```

An example file is provided as `.env.example`.

## Getting Started

### Prerequisites

- Node.js
- npm

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file and add your RAWG API key:

```bash
VITE_RAWG_API_KEY=your_rawg_api_key_here
```

### Run the Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - type-check and build the app for production
- `npm run lint` - run ESLint across the codebase
- `npm run preview` - preview the production build locally

## Deployment

The app is deployed on Vercel:

https://game-hub-eta-eight-47.vercel.app/

For deployment, make sure the `VITE_RAWG_API_KEY` environment variable is configured in the hosting platform.

## RAWG API Notes

- Game data comes from the RAWG public API.
- The app depends on a valid RAWG API key.
- Search and filter results are driven entirely by RAWG query parameters.
- The UI uses local fallback genre and platform data so the app remains usable while the API loads.

## License

This project does not currently define a license.
