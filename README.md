# Modern Shopping Cart App with Redux

This project is a **modern shopping cart application** built with React and Redux.  
Users can view products fetched from an online API, add them to their cart, and manage the cart with a smooth, responsive UI.  
The project demonstrates best practices in Redux state management, async API calls, and component-based UI architecture.

---

## Purpose

- Create a simple, functional, and stylish shopping cart app using React and Redux.
- Demonstrate fetching products from an online API ([https://fakestoreapi.com](https://fakestoreapi.com)) and managing them in a Redux store.
- Showcase a modern grid/card view for products and a sliding cart panel UI.
- Use a separate actions file for async Redux logic (scalable architecture).

---

## Features

- Products are fetched from an online API and displayed in a responsive grid.
- Each product card shows category, title, description, price, rating, image, and an add-to-cart button.
- The shopping cart appears as a side panel and allows users to manage their items.
- The cart is closed by default and opens automatically when an item is added.
- The cart panel can be closed by clicking outside or using the close button.
- Modern, responsive design with Tailwind CSS and Material UI icons.

---

## Tech Stack

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material UI Icons](https://mui.com/material-ui/material-icons/)

---

## Project Structure

src/
├── components/
│ ├── Header.js // Top bar with cart button
│ ├── ProductList.js // Grid/card view for products
│ └── Cart.js // Sliding cart panel (right side)
├── redux/
│ ├── productActions.js // API call for fetching products (async thunk)
│ ├── productsSlice.js // Products state and reducers
│ └── cartSlice.js // Cart state and reducers
├── App.js // Main component and layout
├── index.js // Application entry point
└── index.css // Tailwind CSS imports

---

## Getting Started

1. **Clone the repo:**

git clone https://github.com/EgemenShn01/redux-shopping-cart.git
cd redux-shopping-cart

2. **Install dependencies:**

npm install

3. **If you haven't already installed Tailwind CSS and Material UI:**

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install @mui/icons-material @mui/material @emotion/react @emotion/styled

- In your `src/index.css` file, add:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- Make sure your `tailwind.config.js` includes:
  ```js
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  ```

4. **Start the project:**
"# redux-shopping-cart" 
