# Focus | Task Manager

A beautiful, minimalist task management application built with React, Vite, and Tailwind CSS. Designed to keep you focused and efficient without unnecessary distractions.

## 🚀 Features

- **Sleek, Minimalist UI:** A clean light theme with subtle shadows, crisp typography, and an intuitive layout.
- **Local Storage Persistence:** Your tasks are automatically saved to your browser's local storage. They'll be right there when you come back.
- **Task Pagination:** Built-in "Show More" functionality to keep your initial view clean, only loading a few tasks at a time.
- **Detailed Task Modal:** Click on any task to open a beautiful overlay dialog to edit the task name, status, start date, and end date.
- **Delete Confirmation:** Accidental clicks happen. A built-in confirmation modal ensures you never delete a task by mistake.
- **Visual Progress Bar:** Watch your completion rate go up with a dynamic progress indicator at the top of your list.

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 (using `@tailwindcss/vite`)
- **State Management:** React Hooks (`useState`, `useEffect`)

## 📦 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ud1tt/Focus.git
   cd Focus
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173` (or the port specified in your terminal) to view the app.

## 🏗️ Project Structure

- `src/App.jsx` - Main application container, holds the core state and layout logic.
- `src/components/TodoForm.jsx` - The input form for adding new tasks quickly.
- `src/components/TaskList.jsx` - Handles the rendering and pagination logic for the list of tasks.
- `src/components/TaskItem.jsx` - The individual task component displaying name, dates, and status.
- `src/components/TaskModal.jsx` - The overlay dialog for viewing and editing full task details.
- `src/components/RemoveModal.jsx` - A reusable confirmation dialog for destructive actions.
- `src/index.css` - Global styles and custom Tailwind scrollbar-hiding utilities.

## 💡 Learning Journey
This project was built iteratively to explore modern React concepts:
- **Component Architecture:** Breaking down complex UI into reusable pieces (`TaskItem`, `TaskModal`, `RemoveModal`).
- **Prop Drilling vs State Management:** Passing update functions (`addTask`, `updateTask`) from the parent container to child components.
- **Side Effects:** Using `useEffect` to seamlessly sync React state with browser `localStorage`.
- **Modern Styling:** Utilizing Tailwind CSS for rapid, responsive UI development.

---
*Stay focused and efficient.*
