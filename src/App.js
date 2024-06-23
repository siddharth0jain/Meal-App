// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MyFavorites from './pages/MyFavorites';
import MealGenerator from './pages/MealGenerator';
import AboutMe from './pages/AboutMe';
import CategoryMeals from './pages/CategoryMeals';
import NotFound from './pages/NotFound';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:category" element={<CategoryMeals />} />
            <Route path="/my-favorites" element={<MyFavorites />} />
            <Route path="/meal-generator" element={<MealGenerator />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Router>
    </FavoritesProvider>
  );
}

export default App;