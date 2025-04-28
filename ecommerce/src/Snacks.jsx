import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import cafe1 from './images/cafe1.webp';
import cafe10 from './images/cafe10.jpeg';
import cafe7 from './images/cafe7.webp';
import cafe4 from './images/cafe4.jpeg';
import cafe6 from './images/cafe6.webp';

// Coffee Items with Prices
const snacksItems = [
  { id: 1, name: 'Espresso', price: 50, img: cafe1 },
  { id: 2, name: 'Cappuccino', price: 60, img: cafe10 },
  { id: 3, name: 'Latte', price: 65, img: cafe7 },
  { id: 4, name: 'Mocha', price: 70, img: cafe4 },
  { id: 5, name: 'Americano', price: 55, img: cafe6 },
  { id: 6, name: 'Caramel Macchiato', price: 75, img: cafe1 },
  { id: 7, name: 'Flat White', price: 80, img: cafe10 },
  { id: 8, name: 'Affogato', price: 90, img: cafe7 },
];

const Snacks = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate('/')}
          className="mb-5 text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
        >
          ⬅️ Back to Menu
        </button>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl font-bold text-gray-800 mb-10"
        >
          ☕ Snacks Varieties
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {snacksItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform transition-transform"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600">₹{item.price}</p>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: '#F59E0B' }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600"
                >
                  Add to Cart 🛒
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Snacks;
