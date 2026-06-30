<p align="center">
  <h1>take_home_commusync</h1>
  <p>A take-home task for a CommuSync internship.</p>

  <p align="center">
    <img src="https://img.shields.io/badge/license-No%20License-red" alt="License: No License">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS">
  </p>
</p>

## Description
This repository contains a solution for a take-home task assigned for a CommuSync internship, featuring separate client-side and server-side implementations.

## ✨ Features
No explicit features are listed in the repository data.

## 🚀 Installation
This project is structured with a client-side application and a server-side application. Both require Node.js and npm to run.

### Client-side
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/take_home_commusync.git
    cd take_home_commusync/client
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The client application should now be accessible, typically at `http://localhost:3000`.

### Server-side
1.  **Navigate to the server directory:**
    ```bash
    cd ../server
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the server:**
    ```bash
    npm run start
    ```
    (Note: This command assumes a `start` script is defined in `package.json` for server execution.)

## 🛠️ Tech Stack
*   **Languages:** TypeScript, JavaScript, CSS
*   **Client-side Framework:** Next.js
*   **Server-side Libraries:** Mongoose, Zod
*   **Tooling:** ESLint, PostCSS

## 📂 Project Structure
```
.
├── client/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── public/
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   └── window.svg
│   ├── AGENTS.md
│   ├── CLAUDE.md
│   ├── README.md
│   ├── eslint.config.mjs
│   ├── next.config.ts
│   ├── package.json
│   ├── postcss.config.mjs
│   └── tsconfig.json
└── server/
    ├── src/
    │   ├── lib/
    │   │   ├── mongoose.ts
    │   │   └── zod.ts
    │   ├── routes/
    │   │   └── index.ts
    │   └── index.ts
    ├── package.json
    └── tsconfig.json
```

## 📄 License
No license specified.