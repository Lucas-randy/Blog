import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import BlogPosts from "./BlogPosts"; // Assure-toi que le chemin est correct

import NavigationBar from "./components/NavigationBar.js";
import NavigationBarLogin from "./components/NavigationBarLogin.js";

// La logique de l'image
import useAppLogic from "./hooks/useAppLogic"; // Assure-toi que le chemin est correct

//L'authentification avec les bouttons
import AuthForm from "./components/AuthForm";
import AuthButtons from "./components/AuthButtons";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

//Les pages login et inscription
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AuthPages from "./pages/AuthPages";
import "./components/Navbar.css";

//Les différents menus
import Home from "./components/Menu/Home"; // Importation du composant Accueil
import Program from "./pages/Program"; // Importation du composant Programme
import Dietetique from "./components/Menu/Dietetique"; // Importation du composant Dietetique
import Contact from "./components/Menu/Contact"; // Importation du composant Contact
import About from "./pages/About"; // Importation du composant Programme

function App() {
  const { isAuthenticated, login, logout, showNavbar } = useAppLogic();

  return (
    <Router>
      <div className="App">
        {/* ✅ Affichage conditionnel de la bonne navbar */}
        {showNavbar &&
          (isAuthenticated ? (
            <NavigationBar onLogout={logout} />
          ) : (
            <NavigationBarLogin onLogin={login} />
          ))}

        {/* ✅ Routes avec affichage conditionnel */}
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <HomePage />
              ) : (
                <LoginPage setIsAuthenticated={login} />
              )
            }
          />
          <Route path="/program" element={<Program />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
