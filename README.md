# News Homepage

A fully responsive news homepage built with semantic HTML, CSS, and vanilla JavaScript. The layout adapts across mobile, tablet, and desktop breakpoints, giving users an optimized reading experience on any device.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Responsive Behavior](#responsive-behavior)
- [Built With](#built-with)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Author](#author)

## Overview

This project is a news homepage that showcases a featured article, a "New" articles sidebar, and a grid of article cards. It was designed mobile-first and progressively enhanced for larger screens, with careful attention to spacing, typography, and interactive hover/focus states.

## Features

- Fully responsive layout for **mobile**, **tablet**, and **desktop** screen sizes
- Interactive navigation menu with open/close animations and an overlay
- Hover and focus states for all interactive elements
- Optimized images that swap between mobile and desktop versions
- Clean, semantic HTML structure

## Responsive Behavior

The site adapts across three main breakpoints:

- **Mobile (< 768px):** The header displays a hamburger menu icon. Tapping it slides the navigation in as a full-height off-canvas panel from the right, with a dark overlay behind it and a close icon inside the panel.
- **Tablet & Desktop (>= 768px):** The hamburger icon and overlay are hidden, and the navigation links are shown inline as a horizontal menu within the header -- no slide-out panel is needed at these sizes.
- **Desktop (>= 1024px):** The main content reflows from a stacked, single-column layout into a multi-column layout, with the featured article, "New" section, and article cards arranged side by side for better use of the available space.

A `resize` event listener also ensures that if the window is resized past the tablet breakpoint while the mobile menu is open, it automatically closes so the layout doesn't break.

## Built With

- Semantic **HTML5**
- **CSS3** (Flexbox, media queries, CSS transitions)
- Vanilla **JavaScript** (DOM manipulation, event listeners)
- Mobile-first workflow

## Project Structure

```
├── index.html
├── style.css
├── app.js
├── fonts/
└── images/
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Open `index.html` in your browser -- no build steps or dependencies required.

## 🔗 Link

- **Live Demo:** [View Live Demo](https://amirhosseinmaniyan.github.io/news-homepage-project/)

## Author

- GitHub - [amirHosseinManiyan](https://github.com/amirHosseinManiyan/)