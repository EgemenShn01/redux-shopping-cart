import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header({ openCart }) {
  const count = useSelector(state => state.cart.items.reduce((acc, item) => acc + item.qty, 0));
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white px-8 py-6 mb-8 rounded-b-lg shadow">
      <h1 className="text-3xl font-bold">Mini Shopping Cart</h1>
      <button
        className="flex items-center gap-2 font-semibold bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
        onClick={openCart}
      >
        <ShoppingCartIcon style={{ color: '#222' }} />
        Cart <span className="ml-1 text-gray-900">({count})</span>
      </button>
    </header>
  );
}

export default Header;
