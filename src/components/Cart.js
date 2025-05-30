import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';

function Cart({ open, onClose }) {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const panelRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (open && panelRef.current && !panelRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, onClose]);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[340px] bg-white shadow-lg z-50 transform transition-transform duration-300 
      ${open ? 'translate-x-0' : 'translate-x-full'}`}
      ref={panelRef}
      style={{ boxShadow: open ? '0 0 30px #0002' : 'none' }}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-bold">Sepet</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-red-500 text-2xl">&times;</button>
      </div>
      <div className="p-4 flex flex-col h-[calc(100%-64px)]">
        {items.length === 0 ? (
          <div className="text-gray-400 flex-1 flex items-center justify-center">The basket is empty</div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto">
              {items.map(item => (
                <div key={item.id} className="flex justify-between items-center mb-2 py-2 border-b">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-400">
                      {item.qty} x {item.price} $
                    </div>
                  </div>
                  <button
                    className="bg-red-500 hover:bg-red-700 transition text-white px-3 py-1 rounded-lg text-xs"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Toplam:</span>
                <span className="text-lg font-bold text-green-600">
                  {items.reduce((acc, item) => acc + item.price * item.qty, 0)} $
                </span>
              </div>
              <button
                className="w-full mt-2 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-bold transition"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
