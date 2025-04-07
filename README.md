# REM Waste Code Challenge

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧠 Approach

To build this project, I prioritized a **component-based architecture** to ensure scalability and maintainability. This allows for easier future updates, as changes can be made in isolated components and reflected across the application consistently.

Here's a brief overview of the structure and logic:

- **`page.tsx`**: This is the main entry point of the app. It handles the API call, retrieves the data, and passes it down to child components.
- **`SkipCard.tsx`**: Responsible for rendering each card dynamically using the data fetched from the API. A `.map()` function is used to iterate over the response and generate each card.

- **State Management**: When a user selects a card, the relevant data is lifted up and passed to the footer component. The footer then displays a **"Back"** button (to deselect) and a **"Continue"** button based on the selection state.

This modular structure ensures clarity in responsibilities between components and helps keep the codebase clean and efficient.

## Eduardo Fanti Dutra | 07-Apr-2025
