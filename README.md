# REM Waste Code Challenge

## 🔗 Sandbox URLs

- [https://remwaste.vercel.app/](https://remwaste.vercel.app/)
- [https://remwaste-eduardos-projects-de9a72aa.vercel.app/](https://remwaste-eduardos-projects-de9a72aa.vercel.app/)

---

## 🔧 Getting Started

To run the development server locally:

First, install the dependencies:

```bash
npm install
```

Then, start the server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🧠 Approach

To build this project, I prioritized a **component-based architecture** to ensure scalability and maintainability. This allows for easier future updates, as changes can be made in isolated components and reflected across the application consistently.

### 🔍 Logic Overview

- **`page.tsx`**: The main entry point of the app. It handles the API call, retrieves the data, and passes it down to child components.
- **`SkipCard.tsx`**: Responsible for rendering each card dynamically using the fetched data via `.map()`.

### 🗂️ State Management

When a user selects a card, the state is lifted and shared with the footer component. The footer then displays a **"Back"** button (to deselect) and a **"Continue"** button, based on whether a card is selected.

This modular structure ensures clarity between components and keeps the codebase clean and efficient.

---

## 📁 File Structure

```
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Breadcrumb.tsx
│   └── SkipCard.tsx
├── services/
│   └── api.ts
└── types/
    └── skip.ts
```

---

## 👨‍💻 About

**Eduardo Fanti Dutra**  
🗓️ 07-Apr-2025

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
