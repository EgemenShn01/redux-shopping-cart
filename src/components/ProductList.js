import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { fetchProducts } from '../actions/productActions';
import StarIcon from '@mui/icons-material/Star';

function ProductList({ onProductAdded }) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const status = useSelector(state => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleAdd = (product) => {
    dispatch(addToCart({
      id: product.id,
      name: product.title,
      price: Math.round(product.price)
    }));
    onProductAdded();
  };

  return (
    <div className="bg-white rounded-xl shadow p-8 min-w-[340px] w-full">
      <h2 className="text-xl font-bold mb-6">Products</h2>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Products are not loaded.</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="relative flex flex-col border border-gray-200 rounded-lg shadow-md bg-gray-50 p-4 h-full"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-md">{product.category}</span>
              <div className="flex items-center gap-1 text-yellow-500">
                <StarIcon fontSize="small" />
                <span className="font-semibold text-sm text-gray-700">{product.rating?.rate}</span>
                <span className="text-xs text-gray-400 ml-1">({product.rating?.count})</span>
              </div>
            </div>

            <img
              src={product.image}
              alt={product.title}
              className="w-24 h-24 object-contain mx-auto mb-2"
            />

            <div className="font-semibold text-center text-base mb-1">{product.title}</div>
            <div className="text-gray-600 text-xs text-center mb-2 line-clamp-2">{product.description}</div>

            <div className="flex justify-between items-end mt-auto pt-4">
              <span className="text-green-700 font-bold text-lg">{Math.round(product.price)} $</span>
              <button
                className="bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded-lg text-sm"
                onClick={() => handleAdd(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
