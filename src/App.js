import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const handleProductAdded = () => {
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header openCart={() => setCartOpen(true)} />
      <main className="flex gap-8 justify-center mt-10 relative">
        <ProductList onProductAdded={handleProductAdded} />
        <Cart open={cartOpen} onClose={handleCloseCart} />
      </main>
    </div>
  );
}

export default App;
