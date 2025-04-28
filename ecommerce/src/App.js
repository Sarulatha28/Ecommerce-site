import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoffeeItems from './CoffeeItems';
import Landing from './landing';
import Desserts from './Desserts';
import Freshjuice from './Freshjuice'; // Import Freshjuice page
import Snacks from '../src/Snacks'
import Burger from './Burger';
import Icecream from './Icecream';
import Cake from './Cake';


const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/coffee-items" element={<CoffeeItems />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/freshjuice" element={<Freshjuice />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/icecream" element={<Icecream />} />
        <Route path="/burgr" element={< Cake/>} />
        <Route path="/burgr" element={<Burger />} />
      </Routes>
    
  );
};

export default App
