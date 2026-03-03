# Disney Interactive Experience 🏰✨

Welcome to the **Disney Interactive Experience**, a modern, highly engaging web application built with React, Vite, and cutting-edge web animation libraries. This project serves as a dynamic tribute to the magical world of Disney, featuring interactive 3D elements, smooth scrolling, and hidden secrets!

live:

https://ternary-operators-bay.vercel.app/


## 🚀 Core Features

### 1. 📖 Immersive 3D Preloader
The experience begins with a stunning 3D preloader featuring a Snow White book animation. Built using `@react-three/fiber` and `@react-three/drei`, it sets the magical tone before the main content is revealed.

### 2. ✨ Smooth Scrolling & Parallax Effects
We utilize **Lenis** for buttery smooth scrolling across the entire page. Combined with **GSAP** and **Framer Motion**, elements like the Hero Section feature parallax starfields and stunning scroll-linked animations. Numbers across the site (like film release years and statistics) animate dynamically using the `CountUp` component as they scroll into view.

### 3. 🎮 "Hidden Princess" Mini-Game
Scattered throughout the site are hidden princesses! Users can explore the page to find them, and their progress is tracked in a persistent, globally accessible **Collection HUD**. This gamifies the browsing experience and encourages deeper exploration of the different sections. 

### 4. 🎦 Dynamic Sections & Media
- **Hero Section:** A captivating full-screen introduction featuring custom Disney branding and autoplaying video backgrounds.
- **Hero Carousel:** A beautifully animated carousel showcasing Disney's rich history.
- **Franchise Worlds:** Interactive cards dedicated to Disney universes (Marvel, Star Wars, Pixar, etc.).
- **Film Reel:** A scrolling cinematic reel of classic Disney films.
- **Disney+ & Merch:** Dedicated sections for streaming content and merchandise.
- **Theme Parks:** A vibrant section celebrating Disney Parks around the world.

### 5. 🖱️ Custom Interactions (Ralph Cursor & SplitText)
- A **Ralph Chaser Cursor** follows the user's mouse, adding a playful interactive layer.
- **SplitText Navigation:** Navigation headers and links feature a mesmerizing character-by-character animation effect, creating a premium feel.

## 🛠️ Technology Stack
- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS + Vanilla CSS (Glassmorphism & custom variables)
- **3D Graphics:** Three.js, React Three Fiber (`@react-three/fiber`), React Three Drei (`@react-three/drei`)
- **Animations:** GSAP, Framer Motion
- **Physics:** Matter.js
- **Smooth Scrolling:** Lenis

## 🔄 Development Workflow

The development of this project followed a structured workflow to ensure high performance and visual excellence:

1. **Foundation & Routing:** 
   * Setup using Vite for lightning-fast HMR.
   * Established the global layout in `App.tsx` and configured providers (`GameProvider`, `ActiveSectionProvider`) for global state management.
   
2. **Design System & Styling:** 
   * Configured Tailwind CSS and basic global CSS for consistent typography, dark mode base (`#020818`), and glassmorphism utilities.
   
3. **Core Component Assembly:** 
   * Built modular sections (`HeroSection`, `HeroCarousel`, `FranchiseWorlds`, `FilmReel`, etc.) independently. 
   * Ensured responsive design for each segment before integrating them into the main app.
   
4. **Animation & Interactivity Injection:** 
   * Replaced static textual logos with authentic SVGs and introduced video backgrounds.
   * Applied `Framer Motion` for page loading fades and scroll reveals.
   * Implemented `GSAP` and custom components like `SplitText` and `CountUp` to bring text and numbers to life.
   * Added `Lenis` for smooth, momentum-based scrolling.

5. **3D & Minigame Integration:** 
   * Created the 3D Preloader (`Disney3DPreloader`) and lazily loaded it to optimize initial JS bundle size.
   * Integrated the `HiddenPrincess` objects and linked them to the `CollectionHUD` via React Context context hooks.

6. **Refinement & Polish:** 
   * Adjusted animation timings, fixed TypeScript declarations, and handled cross-browser quirks (like autoplaying muted videos and handling WebGL contexts safely).

## 💻 Running Locally

To get this project up and running on your local machine:

1. **Clone the repository** (if you haven't already).
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

Enjoy the magic! ✨
