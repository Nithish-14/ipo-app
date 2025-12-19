# IPO Web Application (Vite + React + Tailwind CSS)

This project is a responsive **IPO Listing & IPO Details web application** built as part of a frontend assignment. The UI closely follows the provided designs and supports both **desktop and mobile views**.

---

## 🚀 Tech Stack

- **Vite** – Fast build tool
- **React** – Component-based UI
- **Tailwind CSS** – Utility-first styling
- **React Router** – Page navigation
- **Google Font: Sora** – As per design requirement

---

## 📄 Features

### IPO List Page

- Table-style layout (matches provided design)
- Company logo, name & issue date
- Issue size, price range, minimum investment
- Fully responsive (table → stacked layout on mobile)

### IPO Details Page

- Header with back navigation, logo, download icon & apply button
- IPO details card (issue size, price range, lot size, etc.)
- IPO timeline with continuous progress line
- About company section
- Mobile & desktop responsive layouts

---

## 📂 Project Structure

```
ipo-app/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── ipoData.js
    ├── pages/
    │   ├── IpoList.jsx
    │   └── IpoDetails.jsx
    └── components/
        ├── IpoTimeline.jsx
        ├── IpoCard.jsx
        └── InfoBox.jsx
```

---

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or above recommended)
- **npm** or **yarn**

Check versions:

```bash
node -v
npm -v
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Run the Application

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

### 4️⃣ Build for Production

```bash
npm run build
```

Preview build locally:

```bash
npm run preview
```

---

## 🎨 Styling & Responsiveness

- Tailwind CSS is used with a **mobile-first approach**
- Desktop layouts use CSS Grid for table-style alignment
- Mobile layouts collapse into stacked sections
- Font family **Sora** is applied globally

---

## 🧠 Design & Technical Decisions

- **Reusable components** for cards, timeline, and info blocks
- **Single data source (`ipoData.js`)** powering both list and detail pages
- **Absolute + relative positioning** for IPO timeline line-through effect
- **Clean separation** between pages and components

---

## 📝 Notes

- All data used is mock/sample data for UI demonstration
- Logos are loaded via public CDN links
- No backend/API integration is included

---
