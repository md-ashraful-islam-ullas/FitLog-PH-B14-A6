# FitLog

A modern workout tracking web application built with Next.js. FitLog allows users to browse exercises, build a daily workout plan, save exercises for later, and track completed workouts through a simple and responsive interface.

## Technologies Used

* **Next.js** — React framework with App Router
* **React** — Component-based UI development
* **Tailwind CSS** — Responsive styling and UI design
* **JavaScript (JSX)** — Application logic and components
* **React Context API** — Global workout plan, saved exercises, and completion state
* **React Toastify** — Toast notifications for user actions
* **REST API** — Exercise data fetching

## Key Features

### 1. Exercise Library

Browse a collection of workouts with useful information such as duration, calories burned, rating, equipment, and difficulty.

### 2. Personal Workout Plan

Add exercises to today's workout plan and keep track of the exercises you still need to complete.

### 3. Saved Exercises

Save exercises for later and access them from the **Saved** section of your personal plan.

### 4. Workout Progress Tracking

Mark exercises as completed and visually distinguish completed workouts from the remaining exercises.

### 5. Responsive & Interactive UI

Fully responsive interface with dynamic navigation badges, sorting options, loading states, toast notifications, and dedicated exercise detail pages.

## Getting Started

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## API

Exercise data is retrieved from the FitLog exercise API:

```text
https://api.abcz.workers.dev/api/fitlog
```

---

Built with Next.js and React.
