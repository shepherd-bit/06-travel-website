# Moveo 🌍

A modern, responsive, and animated travel web application designed to help travelers plan custom itineraries, connect with global travel communities, and discover vacation destinations.

---
![Moveo Travel Web App Preview](./public/preview.PNGg)

👉 **[View Live Link](https://shepherd-bit.github.io/06-travel-website/)**

---

## ✨ Features

* **Interactive Consultation Hub:** Customizable search filters (destination, trip duration) with subtle high-contrast frosted glassmorphism elements.
* **Travel Community Showcase:** Dynamic cards highlighting regional travel groups, member statistics, and interactive hover states.
* **Mobile App Call to Action:** Dedicated feature section with an interactive contact tab toggle (Mobile/Email) and native app store links.
* **Fluid GSAP Animations:** Smooth entrance reveals and continuous subtle background floating animations powered by GSAP ScrollTrigger.
* **Clean Dark-Mode Aesthetics:** Styled with a polished slate/grey dark theme, bright blue accents, and full-width fluid layouts.

---

## 🛠️ Tech Stack

* **Frontend Framework:** [React.js](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animation Libraries:** [GSAP](https://gsap.com/) & ScrollTrigger
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
* **Deployment:** GitHub Actions & GitHub Pages

---

## 📁 Project Structure

```text
06-travel-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment configuration
├── public/
│   └── preview.png             # Project preview screenshot
├── src/
│   ├── assets/                 # Images, icons, and media files
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation bar
│   │   ├── Hero.jsx            # Hero banner section
│   │   ├── Offers.jsx          # Special deals & offers section
│   │   ├── PropertyType.jsx    # Stays & booking categories
│   │   ├── Consultation.jsx    # Expert planning & glassmorphic search form
│   │   ├── Community.jsx       # Travelers community grid cards
│   │   ├── CallToAction.jsx    # Mobile app feature showcase & download form
│   │   └── Footer.jsx          # Clean modern dark footer
│   ├── App.jsx                 # Main application layout component
│   ├── main.jsx                # React DOM entry point
│   └── index.css               # Global styles & Tailwind CSS imports
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md