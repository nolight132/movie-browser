# My Movie & TV Show Database

Welcome to the **Movie Browser** (looking for a name)! This is a web application where you can explore popular movies and TV shows, search for specific content, and switch between languages. It's built with Next.js and is designed to be user-friendly.

## Features

- **Search for Movies and TV Shows**: Easily search for movies or TV shows by name or genre.
- **Popular Content**: Discover the most popular movies and shows.
- **Language Support**: Switch between multiple languages (listed below).
- **Dark & Light Themes**: Toggle between a light and dark theme.
- **Filters**: Use filters to narrow down results. (WIP)

## Tech Stack

- **Next.js** (React framework)
- **ShadCN UI Components** for modern UI (favorite component library)
- **TMDB API** for movie and TV show data (they let you have posters in different languages, how cool is that?!)

## Getting Started

### Prerequisites

Before getting started, make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn (for package management)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nolight132/movie-browser.git && cd movie-browser
 ```
2.  Install dependencies
   ```bash
   npm install
   ```
3. Set up environment variables:

- Create a .env.local file in the root (movie-browser/) of the project and add your TMDB API key.
```bash
TMDB_API_KEY=your_api_key_here
```
4. Running the Project
To start the development server:

```bash
npm run dev
```
By default, the app will be available at http://localhost:3000.

### Languages Supported
- English
- Russian
- Polish
- German

### License
This project is open-source and available under the MIT License.

