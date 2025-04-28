import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import cafe1 from './images/cafe1.webp';
import cafe10 from './images/cafe10.jpeg';
import cafe7 from './images/cafe7.webp';
import cafe4 from './images/cafe4.jpeg';
import cafe6 from './images/cafe6.webp';
import coffee1 from './images/coffee1.webp'



const menuItems = [
  { name: 'Coffee', src: coffee1, items: ['Espresso', 'Cappuccino', 'Latte', 'Mocha'] },
  { name: 'Desserts', src: cafe10, items: ['Cheesecake', 'Brownie', 'Ice Cream', 'Waffles'] },
  { name: 'Fresh Juice', src: cafe7, items: ['Orange Juice', 'Mango Shake', 'Lemonade', 'Pineapple Juice'] },
  { name: 'Snacks', src: cafe4, items: ['French Fries', 'Garlic Bread', 'Pizza Slice', 'Sandwich'] },
  { name: 'Pizza', src: cafe6, items: ['Margherita', 'BBQ Chicken', 'Pepperoni', 'Veggie Supreme'] },
  
  { name: 'Burger', src: cafe10, items: ['Cheese Burger', 'Veggie Burger', 'Chicken Burger', 'Double Patty'] },
  { name: 'icecream', src: cafe7, items: ['Club Sandwich', 'Grilled Cheese', 'Veggie Delight', 'Chicken Sandwich'] },
  { name: 'cake', src: cafe4, items: ['Chocolate Cake', 'Vanilla Cake', 'Red Velvet', 'Black Forest'] },

  { name: 'Fries', src: cafe1, items: ['Classic Fries', 'Peri Peri', 'Cheese Fries', 'Masala Fries'] },
  { name: 'momo', src: cafe10, items: ['Chocolate Waffle', 'Nutella Waffle', 'Strawberry Waffle', 'Honey Waffle'] },
  //{ name: 'salad', src: cafe7, items: ['Mango Smoothie', 'Strawberry Smoothie', 'Banana Smoothie', 'Mixed Berry'] },
  { name: 'Garlic Bread', src: cafe4, items: ['Plain Garlic Bread', 'Cheese Garlic Bread', 'Herb Garlic Bread'] },
  { name: 'kebab', src: cafe6, items: ['Chocolate Brownie', 'Walnut Brownie', 'Fudge Brownie', 'Hot Brownie'] },
];

const Landing = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([
    { src: cafe1, text: 'Relax & Enjoy' },
    { src: cafe10, text: 'Delicious Coffee' },
    { src: cafe7, text: 'Cozy Ambience' },
    { src: cafe4, text: 'Fresh Pastries' },
    { src: cafe6, text: 'Quality Beans' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Image Transition Interval
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(imageInterval);
    };
  }, [images.length]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  // Handle Card Click to Show Items or Navigate to Pages
  const handleCardClick = (category) => {
    if (category === 'Coffee') {
      navigate('/coffee-items');
    } else if (category === 'Desserts') {
      navigate('/desserts');
    } else if (category === 'Fresh Juice') {
      navigate('/freshjuice');
    } else if (category === 'Snacks') {
      navigate('/snacks'); 
    } else if (category === 'Pizza') {
      navigate('/pizza');
    }else if (category === 'Burger') {
       navigate('/burger');
      } else if (category === 'Icecream') {
        navigate('/icecream');}
        else if (category === 'Cake') {
          navigate('/cake');}
          else if (category === 'Fries') {
            navigate('/fries');}else {
      setSelectedCategory(category === selectedCategory ? null : category);
    }
  };
  

  return (
    <div>
      {/* Image Slider Section */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <AnimatePresence>
          {images.map(
            (image, index) =>
              index === currentIndex && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div className="relative w-full h-full">
                    <img
                      src={image.src}
                      alt={image.text}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-55" />
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <p className="text-white text-2xl md:text-4xl lg:text-5xl font-serif font-extrabold tracking-wide drop-shadow-lg">
                        {image.text}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Menu Section */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-300 py-12">
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10 tracking-wider"
  >
    Explore Our Menu 🍽️
  </motion.h2>

  {/* Food Category Cards */}
  <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {menuItems.map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleCardClick(item.name)}
        className="relative cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:shadow-2xl"
      >
        <div className="relative w-full h-[150px] md:h-[180px] lg:h-[200px]">
          {/* Card with reduced height */}
          <img
            src={item.src}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-sm md:text-lg lg:text-xl font-extrabold tracking-wide">
              {item.name}
            </h3>
          </div>
        </div>
      </motion.div>
    ))}
  </div>



      </div>
    </div>
  );
};

export default Landing;
