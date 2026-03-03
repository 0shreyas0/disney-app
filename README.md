<div align="center">
  <img src="public/disney-castle-logo.svg" alt="Walt Disney Redesigned" width="120" />

  # 🏰 Disney Interactive Experience 

  *A modern, highly engaging web application honoring the magical world of Disney.*

  [**✨ View Live Demo ✨**](https://walt-disney-redesigned.vercel.app/)

  ---

  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-white?style=for-the-badge&logo=framer&logoColor=black)
  ![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

<br/>

## 🌟 About The Project

Welcome to the **Disney Interactive Experience**! This project is a dynamic tribute to the magical worlds of Disney, Marvel, Star Wars, and Pixar. Featuring interactive 3D elements, smooth scrolling, Easter eggs, and a hidden princess mini-game, this application pushes the boundaries of modern web animations that feel incredibly immersive.

> **Note**: For the best interactive experience, please check out the live demo [here](https://walt-disney-redesigned.vercel.app/). 

## ✨ Core Features

### 📖 Immersive 3D Preloader
The experience begins with a stunning **3D preloader** featuring an interactive and magical book animation. Built using `@react-three/fiber` and `@react-three/drei`, it creates an unforgettable introduction before the main content is revealed.

### 🎢 Smooth Scrolling & Parallax Effects
We utilize **Lenis** for buttery smooth, momentum-based scrolling. Combined with **GSAP** and **Framer Motion**, elements like the Hero Section feature parallax starfields and scroll-linked animations that bring the page to life.

### 🎮 "Hidden Princess" Mini-Game
Scattered throughout the site are hidden princesses! 
* Explore the page to find them.
* Your progress is tracked in a persistent **Collection HUD**.
* Fully gamifies the browsing experience!

### 🕹️ Custom Interactions
- **Ralph Chaser Cursor**: A playful interactive layer where Wreck-It Ralph follows your mouse!
- **SplitText Navigation**: Mesmerizing character-by-character animation effects on headers and menus.
- **Dynamic Counters**: Numbers animate dynamically using a custom `CountUp` logic as they scroll into view.

## 🎦 Exploring the Worlds

- **Hero Section:** A captivating full-screen introduction featuring custom Disney branding and autoplaying video backgrounds.
- **Hero Carousel:** A beautifully animated carousel showcasing Disney's rich history.
- **Franchise Worlds:** Interactive animated cards dedicated to the cinematic universes (Marvel, Star Wars, Pixar).
- **Film Reel:** A scrolling cinematic reel of classic Disney films.
- **Disney+ & Merch:** Dedicated immersive sections for streaming content and merchandise.
- **Theme Parks:** A vibrant section celebrating Disney Parks around the world.

## 🛠️ Technology Stack

This application is built with performance and visual excellence in mind:

| Category | Technologies |
| -------- | ------------ |
| **Framework** | React 19, TypeScript, Vite |
| **Styling** | Tailwind CSS, Custom Glassmorphism UI |
| **3D & Canvas** | Three.js, React Three Fiber, React Three Drei |
| **Animations** | GSAP, Framer Motion |
| **Physics & Scrolling** | Matter.js, Lenis Scroll |

## 🚀 Getting Started Locally

To get this project up and running on your local machine, follow these simple steps:

### Prerequisites
* Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
* `npm`, `yarn`, or `pnpm` for managing dependencies.

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the directory**
   ```bash
   cd disney-app
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Start the development server**
   ```bash
   npm run dev
   ```
5. **Open in Browser**
   Visit `http://localhost:5173` to experience the magic!

## 📜 Scripts

* `npm run dev`: Starts the Vite development server.
* `npm run build`: Compiles TypeScript and builds the app for production.
* `npm run lint`: Runs ESLint to ensure code quality.
* `npm run preview`: Locally preview the production build.

<br/>

<div align="center">
  <p>Made with ❤️ and ✨ Magic</p>
</div>
